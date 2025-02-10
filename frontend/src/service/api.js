//api.js
//yaha per api call karege
//by use of axios intercept
// sari api is format mai he call hogi
import axios from 'axios';
import {getAccessToken} from "../utils/common-utils"
import {API_NOTIFICATION_MESSAGES , SERVICE_URLS}  from '../constants/config';
const API_URL = 'http://localhost:8000/api';





//ek comman api bana rahe hai
// ✅ Create axios instance and store it in a variable
const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 20000,
    headers: {
        "Accept": "application/json, multipart/form-data", 
    }
 });
// Function to handle file upload
export const uploadFile = (formData) => {
    return axiosInstance.post('/file/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'  // This ensures the file is sent correctly
        }
    });
};
 // ✅ Add interceptors to the axios instance
//req ka interceptors
//phela callback success ke case mai and dousra error ke case mai
axiosInstance.interceptors.request.use(
   function (config){
    return config ;
   },
   function(error){
    return Promise.reject(error);
   }
)
axiosInstance.interceptors.response.use(
    function(response){
        //stop global loader here
        return  processResponse(response) ;
    },
    function(error){
        //stop global loader here
        return Promise.reject(processError(error));
    }
)

// ✅ Process API responses
//if success -> return (issuccess = true , data:object)
//if fail -> return (isfailure:true , status: string ,msg:string , code >400)
const processResponse = (response) =>{
    if(response?.status ===200){
        return {isSuccess : true , data : response.data}
    }
    else{
        return{
            isFailure : true ,
            status : response?.status ,
            msg : response?.msg ,
            code : response?.code,
        }
    }
}

// ✅ Handle API errors
const processError = async (error) =>{
    //error teen tarah ki hoti hai 
    if(error.response ){
        //jinmme res ata hai
     //req made and server responded with a status other 
     //that fail out of the range 2.x.x   
        console.log('error in response ' , error.toJSON());
        return{
            isError :' true',
            msg : API_NOTIFICATION_MESSAGES.reponseFailure ,
            code : error.response.status
        }
    }
    else if (error.request){
           //jinme req ati hai
        //request made but no res was recived 
        console.log('Error in respnse:', error.request);
        console.log('error in req ' , error.toJSON());
        return{
            isError :' true',
            msg : API_NOTIFICATION_MESSAGES.requestFailure ,
            code : ""
        }  
    }
    else{
        //jinme kuch nahi ata
        //something happend in setting up req that triggers and error
        console.log('error in network ' , error.toJSON());
        return{
            isError :' true',
            msg : API_NOTIFICATION_MESSAGES.netWorkError ,
            code : ""//yaha pe backend ke pass req gai he nahi
        }
    }
}

// ✅ Create API object dynamically
const API = {};
for (const [key, value] of Object.entries(SERVICE_URLS)) {
    API[key] = (body, showUploadProgress, showDownloadProgress, config = {}) => {
      
      const axiosConfig = {
        method: value.method,
        url: value.url,
        headers: {
          authorization: getAccessToken(),
        },
        responseType: value.responseType,
        onUploadProgress: function (progressEvent) {
          if (showUploadProgress) {
            let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            showUploadProgress(percentageCompleted);
          }
        },
        onDownloadProgress: function (progressEvent) {
          if (showDownloadProgress) {
            let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            showDownloadProgress(percentageCompleted);
          }
        },
        ...config,  // This allows extra configurations like 'params'
      };
  
      // For GET requests, use 'params', for others use 'data'
      if (value.method.toLowerCase() === 'get') {
        axiosConfig.params = config.params || {};
      } else {
        axiosConfig.data = body;
      }
  
      return axiosInstance(axiosConfig);
    };
  }
  

  export default API ;
  