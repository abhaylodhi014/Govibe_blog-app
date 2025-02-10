//config.js
//API_NOTIFICATION_MESSAGES
export const API_NOTIFICATION_MESSAGES ={
    //if we have loader
    loading:{
        title : 'loading..',
        message :'Data is being loaded , please wait'
    },
     success : {
        title : 'Success' ,
        message : 'Data successfully loaded'
     },
     //if res failure
     reponseFailure:{
          title:'Error',
          message :"an error occurred while fetching response froom the server . Please try again"
     },
     //if request failure
     requestFailure:{
        title :'error' ,
        message:"an error occured while parsing request data"
     },
     netWorkError:{
        title : 'error',
        message : 'unable to connect with the server : please check internet connectivity'
     }
}
//api service call
//sample request
//need service cal : {url:'/' , method : 'post/get/put/delete' params:true/false ,  query:true/false}


export const SERVICE_URLS = {
  
    userSignup : {url: '/signup' , method: 'POST'} ,
    userLogin : {url: '/login' , method: 'POST'},
    getAllPosts: { url: '/posts', method: 'GET', params: true },

    getRefreshToken: { url: '/token', method: 'POST' },
   
    createPost: { url: '/create', method: 'POST' },

     getPostById: { url: '/post', method: 'POST'},

    deletePost: { url: '/delete', method: 'DELETE' },
   
    newComment: { url: '/comment/new', method: 'POST' },
    getAllComments: { url: '/comments', method: 'GET', query: true },
    deleteComment: { url: '/comment/delete', method: 'DELETE', query: true },
    updateComment: { url: '/comment/edit', method: 'PUT' },
   
    updatePost: { url: '/update', method: 'PUT', query: true },

    googleauth:{url: '/google-auth' , method : 'POST' , query : true} ,
}

