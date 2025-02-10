 'use client'
 import React, { useState } from 'react';
   import Link from 'next/link';
   import Comments from "./Comments"
const Post = ({ post  }) => {
   
        const [showFullDescription, setShowFullDescription] = useState(false);

        const toggleDescription = () => {
          setShowFullDescription(!showFullDescription);
        };
     
        return (
          <div className="bg-gray-100 shadow-lg rounded-2xl overflow-hidden mb-6 w-full  p-4">
            <div className="text-gray-700 font-bold text-lg mb-2">@{post.username}</div>
            <div className="text-gray-500 text-sm mb-2">{post.place}</div>
            <div className="relative">
            <Link href={{ pathname: '/details', query: { id: post._id } }}>
    <img src={post.image} alt={post.imageName} className="w-full h-64 object-cover rounded-lg" />
    </Link>

              
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className='my-1 font-semibold text-gray-600'>{new Date(post.createdDate).toDateString()}</p>
              <p className="text-gray-700 mb-4">
                {showFullDescription ? post.description : `${post.description.substring(0, 70)}...`}
                {post.description.length > 100 && (
                  <button onClick={toggleDescription} className="text-blue-500 ml-2">
                    {showFullDescription ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </p>
              <div className="border-t-4  pt-1 flex justify-between items-center">
                <button className="flex items-center space-x-1 text-gray-800  hover:text-red-500 ">
                <span className='text-2xl'>❤️</span>
                  <span>Like</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-800 hover:text-blue-600">
                <span className='text-2xl'>🏷️</span>
                  <span>
                  Bookmark</span>
                </button>
              </div>
              <div className="border-t-4 mt-1 pt-2">
                <div className='mt-[-14]'>
                  <Comments post={post}/>
                </div>
              </div>
            </div>
          </div>
        );
      };
      

  export default Post ;