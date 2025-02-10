'use client';

import React, { useState, useEffect } from 'react';
import API from '../../service/api.js';
import { useRouter } from 'next/navigation';
import Post from "../../components/Post.jsx"
const Profile = () => {
  const email  = sessionStorage.getItem('email')
  const username = sessionStorage.getItem('username');
  const photoURL = sessionStorage.getItem('photoURL')
  const [userPosts, setUserPosts] = useState([]);
  const router = useRouter();
  

  // Dummy user data
  const userData = {
    profilePhoto: photoURL || './profile.jpg',
    email : email || 'example@gmail.com',
    username: username || 'JohnDoe',
    bio: 'Adventurer. Blogger. Lover of mountains and nature.'
  };

 useEffect(() => {
    const fetchData = async () => { 
      let response = await API.getAllPosts();
      if (response.isSuccess) {
        // Filter posts by username
        const Posts = response.data.filter(post => post.username === username);

        setUserPosts(Posts);
      }
    }
    fetchData();
  }, [username]);  // Ensure the effect runs if the username changes
   
  const handleLogout = () =>{
      sessionStorage.clear();
      router.push('/auth');
  }

  return (
    <div className=' mx-auto p-4'>
      {username ? (
        <div className="p-4 space-y-6">
          {/* Profile Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 p-4 rounded-lg shadow-md bg-white">
            <img src={userData.profilePhoto} alt="Profile" className="w-28 h-28 rounded-full border-2 border-gray-300" />
            <div className="mt-4 sm:mt-0 text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-800">@{userData.username}</h1>
              <p className="text-gray-800 mt-1 text-lg">{userData.email}</p>
              <p className="text-gray-700 mt-1">{userData.bio}</p>
              <button 
                className='text-blue-500 hover:text-blue-800 mt-3' 
                onClick={handleLogout}
              >
                <span className='text-lg font-bold'>Logout</span>
              </button>
            </div>
          </div>

          {/* User Posts Section */}
          <div className='w-full'>
            <h2 className="text-xl font-semibold text-gray-700">
              Posts by @{userData.username.split(' ')[0]}
            </h2>
            {userPosts.length > 0 ? (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {userPosts.map((post) => (
                  <div key={post._id}>
                    <Post post={post} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 mt-4">No posts yet.</p>
            )}
          </div>
        </div>
      ) : (
        // Not Logged In Section
        <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white p-4 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-800">You are not signed in!</h1>
          <p className="text-gray-600 mt-2">Please sign in or sign up to view your profile and posts.</p>
          <div className="mt-4 space-x-4">
            <button 
              onClick={() => router.push('/auth')} 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
            >
              Sign In
            </button>
            <button 
              onClick={() => router.push('/auth')} 
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
