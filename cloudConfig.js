const cloudinary = require("cloudinary").v2;
require('dotenv').config();
const {CloudinaryStorage} = require("multer-storage-cloudinary")

cloudinary.config({ 
  cloud_name: "db9qk5kxj", 
  api_key: "781469131597199", 
  api_secret: "GJrpQjHHBQyIKm3xPP4LpEj8X-I"
});



const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'Wanderlust_DEV',
      allowFormats:["png", "jpeg", "jpg"]
    },
  });

  module.exports= {
    cloudinary,
    storage
  }