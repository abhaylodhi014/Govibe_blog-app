
//user.js

// yaha per hogi user wali api
// may be api callback functioin

// request mai ati hai wo sari cheze jo fronted se bacekend mai jani hoti hai
//response = backend to frontend


import { request, response } from "express";
import User from "../models/User.js";
import Googleuser from "../models/Googleuser.js";
import bcrypt from 'bcrypt'
import  JWT  from "jsonwebtoken";
import dotenv from "dotenv"
import Token from "../models/token.js";
dotenv.config();
export const signupUser  =  async (req , res)=>{
  try { 
      
        // Destructure user input from the request body
        const { username, email, password } = req.body;
      
        
// const salt = await bcrypt.genSalt(10); //ye 10 vlaue ka salt generate kar dega
const hashedPassword = await bcrypt.hash(password , 10) ; //by default second term salt hota hai

      // Create a new User object
      const newUser = new User({
        username,
        email, 
        password : hashedPassword,
    });

     await newUser.save() //mongo ka function
      // generate token
    //do argument lega phela hoga body   and dousra hoga secret key and thesra hai expire time
    const accessToken = JWT.sign(newUser.toJSON() , process.env.ACCESS_TOKEN_SECRET , {expiresIn : '1d'})
    const refreshToken = JWT.sign(newUser.toJSON() ,process.env.REFRESH_TOKEN_SECRET) ;
   
    //  //STORE REFRESH TOKEN //STORE IN SESSIONSTORAGE
    //   const newToken = new Token({token : refreshToken});
    //   await newToken.save();
    
      return res.status(200).json({accessToken : accessToken , refreshToken:refreshToken , username : newUser.username , email: newUser.email});
    
  } catch (error) {
    console.error(error);  // Log the error to the console
    return res.status(500).json({msg :"api for signup fail " })
  }
}




export const loginUser = async (req , res) => {
  // const { email, password } = req.body;
      

  //agar user mil jata hai tu pura object  a jayga
  let user = await User.findOne({email : req.body.email});
  if(!user){
    return res.status(400).json({msg : 'email does not exit'})
  }
  try {
   let match =  await bcrypt.compare(req.body.password  , user.password) 
   //phlea argument wo hota hai jo bcrypt nahi hai 

   if(match){
    // generate token
    //do argument lega phela hoga body   and dousra hoga secret key and thesra hai expire time
    const accessToken = JWT.sign(user.toJSON() , process.env.ACCESS_TOKEN_SECRET , {expiresIn : '1d'})
    const refreshToken = JWT.sign(user.toJSON() ,process.env.REFRESH_TOKEN_SECRET) ;
   
    //  //STORE REFRESH TOKEN   //STORE IN  SESSIONSTORAGE
    //   const newToken = new Token({token : refreshToken});
    //   await newToken.save(); 
      
      return res.status(200).json({accessToken : accessToken , refreshToken:refreshToken , username : user.username , email:user.email});
    //accesstoken ek particular time mai expire ho jayga lekin refreshtoken db hai use accesstoken generate hoga
   }else{
      res.status(400).json({msg: 'password does not match'})
   }
  } catch (error) {
     return res.status(500).json({msg : 'error while login in user'})
  }
}

export const authGoogle = async(req , res) => {
  const { name, email, photoURL } = req.body;
 
  try {
    // Check if the user already exists
    let user = await Googleuser.findOne({ email });

    if (!user) {
      // If user doesn't exist, create a new one
      user = new Googleuser({
        username: name,
        email: email,
        photoURL: photoURL,
      });
      await user.save();
    }
    
    const accessToken = JWT.sign(user.toJSON() , process.env.ACCESS_TOKEN_SECRET , {expiresIn : '1d'})
    const refreshToken = JWT.sign(user.toJSON() ,process.env.REFRESH_TOKEN_SECRET) ;
   
     //STORE REFRESH TOKEN
      const newToken = new Token({token : refreshToken});
      await newToken.save();

      return res.status(200).json({accessToken : accessToken , refreshToken:refreshToken , username : user.username , email: user.email , photoURL:user.photoURL});
  } catch (error) {
    res.status(500).json({ msg: 'Error saving user', error: error.message });
}
}