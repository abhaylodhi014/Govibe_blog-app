import cloudinary from "../utils/cloudinary.js";
// Image Upload function
export const uploadImage = (request, response) => {
  if (!request.file) 
    return response.status(404).json("File not found from controller");

  // Upload image to Cloudinary
  cloudinary.uploader.upload_stream(
    {
      resource_type:"auto"  // Automatically detect the type (image, video, etc.)
    
    },
    (error, result) => {
      if (error) {
        console.log("error in uploadinmage in controller")
        return response.status(500).json({ msg: error.message });
      }
      
      // Return the Cloudinary URL
      const imageUrl = result.secure_url;  // Cloudinary URL of the uploaded image
      response.status(200).json({ imageUrl });
    }
  ).end(request.file.buffer);  // Buffer the file data from multer
};



export const getImage = async (request, response) => {
    try {   
        const file = await gfs.files.findOne({ filename: request.params.filename });
        // const readStream = gfs.createReadStream(file.filename);
        // readStream.pipe(response);
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
}