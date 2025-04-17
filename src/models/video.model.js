import mongoose, {Schema} from 'mongoose'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'

const videoSchema= new Schema({
    videoFile:{
        type:String,
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    thumbnail:{
        type:String,
        required:true
    },
    
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    views:{
        type:Number,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    ispublished:{
        type:Boolean,
        required:true
    }

},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)

export default Video = mongoose.model("Video",videoSchema)