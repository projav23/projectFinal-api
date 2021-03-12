require('dotenv').config()
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.cloudName,
  api_key: process.env.cloudKey,
  api_secret: process.env.cloudSecret
});

const storage = new CloudinaryStorage({
  cloudinary,
  folder: 'documents', // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png'],
  params: { resource_type: 'raw' },
  filename: function (req, res, cb) {
    cb(null, res.originalname); // The file on cloudinary would have the same name as the original file name
  }
});

const fileParser = multer({ storage });
module.exports = fileParser;