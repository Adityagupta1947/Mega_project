import multer from "multer"
import path from "path"

const storage= multer.diskStorage({
    destination:function(req,file,cb){
        cd(null, path.join(__dirname, "../..public/temp"))
    },
    filename:function (req,file,cb){
        cb(null, file.originalname)
    }
}
)

export default multerUploader = multer({
    storage
})