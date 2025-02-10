'use client'  // Ensure client-side rendering for interactivity
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';  // Added useRouter for navigation
import API from '../../service/api.js';
import { TracingBeam } from "../../components/ui/tracing-beam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import Comments from '../../components/Comments.jsx';

const Details = () => {
  const UserName = sessionStorage.getItem('username');
  const searchParams = useSearchParams();
  const id = searchParams.get('id');  // Get the 'id' query parameter
  const router = useRouter();  // For navigation

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch post data
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        let response = await API.getPostById({ id });
        if (response.isSuccess) {
          setPost(response.data);
        }
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  // Handle Post Deletion
  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this post?")) {
      const response = await API.deletePost({id});  // API call to delete
      if (response.isSuccess) {
        alert("Post deleted successfully!");
        router.push('/');  // Redirect to homepage after deletion
      } else {
        alert("Failed to delete the post. Please try again.");
      }
    }
  };



  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className='text-3xl'>Loading...</p>
      </div>
    );
  }

  return (
    <> <div className=' flex  justify-center'>
      {post ? (
        <TracingBeam className="  sm:d-hidden ">
          <div className="w-full  p-6  mx-auto ">
            <div className=" mx-auto max-w-7xl bg-white p-6">
              <div className="flex-col items-center space-x-4">
                <div className="text-gray-700 font-bold text-3xl">@{post.username}</div>
                <div className="text-gray-500 text-lg mt-3">{post.place}</div>
              </div>
              <div className="mt-4 relative">
                <img src={post.image} alt={post.imageName} className="w-full object-cover rounded-lg" />
              </div>
              <div className="mt-4">
                <h2 className="text-3xl text-gray-600 font-bold">{post.title}</h2>
                <p className='my-2 font-semibold text-gray-600'>{new Date(post.createdDate).toDateString()}</p>
                <p className="text-gray-700 mt-2">{post.description}</p>
              </div>
              <div className="mt-2 md:mt-4 border-t-4 pt-2 flex justify-between items-center">
              <button className="flex items-center space-x-1 text-gray-800 hover:text-red-500">
                <span className="text-2xl md:text-3xl">❤️</span>
                <span className='text-lg md:text-3xl '>Like</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-800 hover:text-blue-600">
                <span className="text-2xl md:text-3xl">🏷️</span>
                <span className='text-1xl md:text-2xl'>Bookmark</span>
              </button>
              
            </div>
            <div className="mt-2 md:mt-4 border-t-4 pt-2">
              <Comments post={post}  />
            </div>
              {UserName === post.username && (
                <div className="flex justify-between mt-6 md:mt-10">
                  {/* Update Button */}
                  <Link href={{ pathname: '/edit', query: { id: post._id } }}>
                <button
                   
                    className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                  >
                    <FontAwesomeIcon icon={faPen} className="w-5 h-5 mr-2" />
                    Update
                  </button>
                        </Link>
                 

                  {/* Delete Button */}
                  <button
                    onClick={handleDelete}
                    className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                  >
                    <FontAwesomeIcon icon={faTrash} className="w-5 h-5 mr-2" />
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </TracingBeam>
      ) : (
        <div>Unable to find post!!</div>
      )}
      </div>
    </>
  );
};

export default Details;
