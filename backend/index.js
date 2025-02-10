
//index.js
import express from "express"; // Import Express
import mongoose from "mongoose"; // Import Mongoose
import bodyParser from "body-parser";
import cors from "cors"; // Import CORS
import connectDB from "./db/db.js";
import Router from "./routes/routes.js";
import cloudinary  from "cloudinary" 
import multer from "multer";
// intialize express
const app = express();

// Middleware
app.use(express.json()); // Enable JSON parsing
app.use(cors()); // Enable CORS
//cors -> hume port 5000 per run karna hai per browers mai port 3000 per run hua isliye browers security isse ki wajah se hame ye error deta hai or cors inko handle karta
app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended : true}))
//agar url mai space hai tab bhi ye clear work karega
app.use('/api' , Router)

// Start the server
const PORT =  8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
connectDB();





