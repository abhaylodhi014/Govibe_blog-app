"use client"

import { useState } from 'react';
import API from "@/service/api"
import Post from "@/components/Post"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Posts() {
const [posts , setPosts] = useState([]);
//mujhe is page per ate hi api call karni hai
const router = useRouter();


useEffect(() => {
    const fetchData = async () => { 
        let response = await API.getAllPosts();
        if (response.isSuccess) {
            setPosts(response.data);
        }
    }
    fetchData();
}, []);


  return (
    <>
    <div>

    
    
{  posts && posts.length > 0 ? (
   <div className="herobg mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
     { posts.map((post) => (
        <div key={post._id}>
          <div>
            <Post post={post}/>
          </div>
        </div>
      ))}
     </div> 
    ) : (
      <div className= " flex-col  w-full justify-center  bg-gray-100 p-6 rounded-2xl shadow-lg">

      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Access Restricted</h1>
       <p className="text-gray-600 mb-6 text-center">
         To view posts from other users, please sign in or create an account.
       </p>
       <div className="flex justify-around gap-4">
         <button
           className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
           onClick={() => router.push('/auth')}
         >
           Sign In
         </button>
         <button
           className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
           onClick={() => router.push('/auth')}
         >
           Sign Up
         </button>
       </div>
    </div>
    
    )}
    </div>
   
  </>
  )
}

export default Posts ;
