import { v2 as Mohit } from "cloudinary";
import fs from 'fs'

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME ,
    api_key:  process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
  });

  const uploadonCloudnary   =  async (localfilePath)=>{

    try{
            if(!localfilePath) return null ;

               const response =  await cloudinary.uploader.upload(localfilePath , {
                    resource_type:"auto"
                })

          
            console.log('file is uploaded on cloudinary' , response.url)
            return response;
    }   
    catch(err){
        fs.unlinkSync(localfilePath)
        //remove the temporary file
        return null

    }
  }
/*
  cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });
  */

  export {uploadonCloudnary}