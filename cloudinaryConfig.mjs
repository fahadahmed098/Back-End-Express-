// Require the cloudinary library
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import {CloudinaryStorage} from 'multer-storage-cloudinary';
import dotenv from 'dotenv'

dotenv.config();
// Return "https" URLs by setting secure: true
cloudinary.config({ 
  cloud_name: process.env.cloudkaname, 
  api_key: process.env.CLOUDINARY_kEY, 
  api_secret: process.env.CLOUDINARY_API_sECRET
});
// Log the configuration
console.log(cloudinary.config());

// Configure multer storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'Express',
    // Optional folder in Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg', 'gif', 'webp','jfif'],
    // transformation: [{ width: 500, height: 500, crop: 'limit' }] // Auto-resize
  }
});

export const upload = multer({ storage });