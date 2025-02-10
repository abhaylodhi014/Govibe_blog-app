
//index.js/db
import mongoose from "mongoose"
//mongoose help to cnnect with database

import dotenv from "dotenv"; // Import dotenv

// Load environment variables
dotenv.config();

// connect to database
const connectDB = async () => {
    try{
       await mongoose.connect(process.env.MONGO_URI ); 
       //, {useNewUrlParser : true} new version mai koi rule nahi hai
    //   mongodb ko bol rahe hai purana wala parser deprisite ho chuka hai naya use karna hai
    console.log("database connected successfully!!")
    } catch (error){
        console.log("mongodb connection error " , error);  
       
       
    } 
}

export default connectDB;