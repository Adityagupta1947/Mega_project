import mongoose,{Schema} from 'mongoose'

const userSchema= new Schema({

    username:{
        type:String,
        required:true,
        unique:true,
        index:true,
        trim:true,
        lowercase:true
    },
    email:{
       type:String,
       required:true,
       unique:true,
       trim:true,
    },
    password:{
        type:String,
        required:[true,'Password is mandatory'],
        unique:true
    },
    fullname:{
      type:String,
      required:true,
      trim:true
    },
    avatar:{
        type:String
    },
    
    coverimg:{
        type:String
    },
    watchHistory:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    refreshTokens:{
        type:String,
        required:true,
    }


},{timestamps:true})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){       // isModified("fieldname") is a function of schema
        next()
    }
    this.password= await bcrypt.hash(this.password,10)
    next()
})

// methods is a prop of schema by which we can access all the methods in schema obj, and also add in it.
userSchema.methods.isPasswordCorrect= async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken=function(){
    jwt.sign(
        {
            _id:this._id,
            username:this.username,
            fullname:this.fullname,
            email:this.email,
            avatar:this.avatar
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiryIn:process.env.ACCESS_TOKEN_EXPIRY
        }

    )
}
userSchema.methods.generateRefreshToken=function(){
    jwt.sign(
        {
            _id:this._id,
            username:this.username,
            fullname:this.fullname,
            email:this.email,
            avatar:this.avatar
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiryIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export default User = mongoose.model("User",userSchema)