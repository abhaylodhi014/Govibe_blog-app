'use client'

import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import API from '../service/api.js';

const SingleComment = ({ comments, UserName, refreshComments }) => {
  const [editCommentId, setEditCommentId] = useState(null);
  const [editText, setEditText] = useState('');
  
  const [visibleCount, setVisibleCount] = useState(1);  // Initially show 2 comments
  const [expandedComments, setExpandedComments] = useState({}); // Track which comments are expanded

  // Handle Delete Comment
  const handleDelete = async (commentId) => {
   
    if (confirm("Are you sure you want to delete this comment?")) {
      const response = await API.deleteComment({ id: commentId });
      if (response.isSuccess) {
        refreshComments();  // Refresh the comments list after deletion
      } else {
        alert("Failed to delete the comment. Please try again.");
      }
    }
  };

  // Handle Edit Comment
  const handleEdit = (commentId, currentText) => {
   
    setEditCommentId(commentId);
    setEditText(currentText);
  };

  // Handle Save Edited Comment
  const handleSaveEdit = async (commentId) => {
    const response = await API.updateComment({ id: commentId, comments: editText });
    if (response.isSuccess) {
      setEditCommentId(null);
      setEditText('');
      refreshComments();  // Refresh the comments list after editing
    } else {
      alert("Failed to update the comment. Please try again.");
    }
  };

  // Toggle 'See More' for individual comments
  const toggleExpand = (commentId) => {
    setExpandedComments(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));
  };

  // Show more comments (increase by 5 each click)
  const handleShowMoreComments = () => {
    setVisibleCount(prevCount => prevCount + 5);
  };

  return (
    <div>
      <div className="mt-4 space-y-2">
        {comments && comments.length > 0 ? (
          comments.slice(0, visibleCount).map((cmt, index) => (
            <div key={index} className="p-3 border rounded-lg bg-gray-100">
              <div className='flex justify-between'>
                <p className="font-bold">@{cmt.name}</p>
                <p className="text-xs font-bold">{new Date(cmt.date).toLocaleString()}</p>
              </div>

              {editCommentId === cmt._id ? (
                <div className=''>
                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                
                    className="w-full rounded-lg p-2 border mt-2 resize-y"
                    
                  />
                  <div className='flex justify-between my-1'>
                    <button
                    onClick={() => handleSaveEdit(cmt._id)}
                    className="mt-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditCommentId(null)}
                    className="mt-2 ml-4 p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  </div>
                  
                </div>
              ) : (
                 
                <div className='text-gray-600  flex justify-between ' >
                  {/* Truncate if comment is more than 20 words */}
                  <div className=''>
                  {cmt.comments.split(' ').length > 20 && !expandedComments[cmt._id] ? (
                    <>
                      {cmt.comments.split(' ').slice(0, 20).join(' ')}...
                      <button 
                        onClick={() => toggleExpand(cmt._id)} 
                        className="text-blue-500 ml-2 hover:text-blue-700"
                      >
                        See More
                      </button>
                    </>
                  ) : (
                    <>
                      {cmt.comments}
                      {cmt.comments.split(' ').length > 20 && (
                        <button 
                          onClick={() => toggleExpand(cmt._id)} 
                          className="text-blue-500 ml-2 hover:text-blue-700"
                        >
                          See Less
                        </button>
                      )}
                    </>
                  )}
                  </div>
                   
                    {/* Show edit/delete buttons if the user owns the comment */}
              {UserName === cmt.name && (
                <div className="flex  items-center justify-center    ml-2 mr-[-4]   ">
                  <div className='mr-2'>
                    <button
                    onClick={() => handleEdit(cmt._id, cmt.comments)}
                    className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600" 
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  </div>
                  
                        <div className='ml-1'>
                          <button
                    onClick={() => handleDelete(cmt._id)}
                    className="p-1 bg-red-500 text-white rounded hover:bg-red-600 "
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  </div>
                  
                </div>
              )}

                </div>
              )}

             
             
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>

      {/* Show 'Show More' button if there are more comments to load */}
      {comments.length > visibleCount && (
        <button
          onClick={handleShowMoreComments}
          className="text-blue-500 ml-2  hover:text-blue-700"
        >
          Show More Comments
        </button>
      )}
    </div>
  );
};

export default SingleComment;
