import multer from 'multer';
import cloudinary from '../utils/cloudinary.js';  // Import the configured Cloudinary instance

// Multer storage configuration (we'll use memory storage so we can upload directly to Cloudinary)
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });
export default upload;

