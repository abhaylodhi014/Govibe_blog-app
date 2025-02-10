import React, { useState, useEffect, useContext } from 'react';
import SingleComment from './SingleComment.jsx';
import  API  from '../service/api.js';

function Comments({ post }) {
  const [comment, setComment] = useState('');  // To track the input value
  const [comments, setComments] = useState([]);  // To store all comments
  const [toggle, setToggle] = useState(false);  // To re-fetch comments on new addition
   
  const [UserName , setUserName] = useState("") // To track logged-in user

  
  useEffect(() => {
    const User = sessionStorage.getItem('username');  // Get username from sessionStorage
    
    setUserName(User);  // Set state, but don't rely on it for redirect
   
  }, []);  // Runs only once when the component mounts


  // Fetch comments when component mounts or when a new comment is added
  useEffect(() => {
    const fetchComments = async () => {
      const response = await API.getAllComments(null, null, null, { params: { id: post._id } });
      
      if (response.isSuccess) {
        setComments(response.data);
      }
    };
    fetchComments();
}, [toggle, post]);

  //re-fetch post when one of them is change


  // Handle input change
  const handleChange = (e) => {
    e.preventDefault(); 
    setComment(e.target.value);
  };

  // Add a new comment
  const addComment = async () => {
    if (!UserName) return;  // Prevent comment submission if user is not signed in
    const newComment = {
      name: UserName,
      postId: post._id,
      date: new Date(),
      comments: comment
    };

    await API.newComment(newComment);
    setComment('');  // Clear the input
    setToggle(prev => !prev);  // Trigger re-fetch of comments
    // If prev is true, it becomes false.
// If prev is false, it becomes true.
  };

  return (
    <>
    {UserName ? (
       <div>
       <div className="flex items-center space-x-2 mt-4">
         <span className="text-2xl">✒️</span>
         <input
           type="text"
           placeholder="Add a comment..."
           className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
           value={comment}
           onChange={handleChange}
         />
         <span
           className={`text-4xl cursor-pointer ${comment.trim() ? 'text-blue-500' : 'text-gray-500 cursor-not-allowed'}`}
           onClick={comment.trim() ? addComment : null}
         >
             {/* trim() removes any leading and trailing spaces from the input */}
 
           ☛ {/* This is the pointing hand icon */}
         </span>
       </div>
       
       {/* Display Comments */}
       <SingleComment  comments={comments} UserName={UserName} refreshComments={() => setToggle(prev => !prev)} />
        
     </div>
    ) : (
      <div className=" mt-4 p-1 text-center bg-yellow-100 border border-yellow-300 rounded-lg">
          <p className="text-gray-700">You need to be signed in to comment.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="/login" className="px-4   text-blue-500 hover:text-blue-700">Sign In</a>
            <a href="/signup" className="px-4  text-blue-500  hover:text-blue-700">Sign Up</a>
          </div>
        </div>
    )}
   
    </>
  );
}

export default Comments;
