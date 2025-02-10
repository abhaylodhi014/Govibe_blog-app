//user.js
//models hota hai ek validation type ka jisme hum dekhte hai ki hume jo data fronted se a raha hai wo he chaheye ya nahi

import mongoose , {Schema} from "mongoose" ;

const userSchema = new Schema({
    username :{
        type : String ,
        required : true ,
        unique :true ,
        index : true ,
        // ye searching mai help karta hai 
    },
    email:{
        type: String ,
        required : true ,
        unique : true , 
    },
  
   
    password:{
        type : String ,
        required : [true , 'password is required']
    },
  
    profilephoto: {
        type : String ,
    }

} , {timestamps : true});
const User = mongoose.model("User" ,userSchema)
export default User ;
// user collection ka naam hai ye schema user ke uper lago hoga 