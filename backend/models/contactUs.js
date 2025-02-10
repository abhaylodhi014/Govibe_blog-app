

import mongoose , {Schema} from "mongoose" ;

const contactUsSchema = new Schema({
    name :{
        type : String ,
        required : true ,
       
        index : true ,
        // ye searching mai help karta hai 
    },
    email:{
        type: String ,
        required : true ,
        unique : true , 
    },
  
   
    message:{
        type : String ,
        required : [true , 'message is required']
    },
  

} , {timestamps : true});
const contactUs = mongoose.model("contactUS" ,contactUsSchema)
export default contactUs ;
