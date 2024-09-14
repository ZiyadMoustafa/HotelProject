const cloudinary = require("cloudinary").v2;
const multer = require("multer");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Not an image! Please upload only images."), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadPhoto = upload.single("hotelImage"); //      <-------

exports.resizePhotoProject = async (req, res, next) => {
  if (!req.file) return next();

  const fileName = `${req.file.originalname}`;

  const filePath = `Hotels`; //    <-------

  const result = await uploadToClodinary(req.file.buffer, fileName, filePath);
  req.body.hotelImage = result.secure_url; //    <-------

  next();
};

const uploadToClodinary = (buffer, filename, folderPath, options = {}) => {
  return new Promise((resolve, reject) => {
    options.folder = folderPath;
    options.public_id = filename;
    const uploadStream = cloudinary.uploader.upload_stream(
      options,
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
    uploadStream.end(buffer);
  });
};
