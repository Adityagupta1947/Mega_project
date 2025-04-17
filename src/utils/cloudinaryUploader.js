import {v2 as cloudinary} from 'cloudinary'
import { nanoid } from 'nanoid';
import fs from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret:CLOUDINARY_API_SECRET
});


const cloudinaryUploader = async (localfilepath)=>{
    
    try{
     const response=  await cloudinary.uploader
        .upload(
            localfilepath, 
            {
                public_id: nanoid(),
                resource_type:"auto"
            }    
        )    
        console.log("file uploaded on cloudinary: success")
        fs.unlinksync(localfilepath,(error)=>{
            if(error){
                console.log("File deletion from server local storage failed")
            }else{
                console.log("File deletion from server local storage successfully")
            }
        })
        return response   // inside it url is present to have access of file on cloud
    }catch(error){
        fs.unlinksync(localfilepath)   // why here unlink -> to avoid disk flodding with trash
      console.log("File upload on cloud failed, Error:",error)  
    }      
}    

export default cloudinaryUploader
