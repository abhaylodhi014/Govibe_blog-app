//token.js
import  mongoose ,{Schema} from 'mongoose'

const tokenSchema = new Schema({
     token :{
        type : String ,
        required : true,
     }
},{ timestamps: true })
//token naam ka collection create kiya
const token = mongoose.model('token' , tokenSchema);

export default token ;