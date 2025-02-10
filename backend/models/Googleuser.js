
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
  
    photoURL: {
        type : String ,
    }

} , {timestamps : true});
const Googleuser = mongoose.model("GoogleUser" ,userSchema)
export default Googleuser ;