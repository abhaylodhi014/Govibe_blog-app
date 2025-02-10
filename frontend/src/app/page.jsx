//page.jsx
"use client"
import Herosection from "@/components/Herosection";
import Category from '../components/Category'
import Post from "../components/Posts"
import Link from "next/link";


export default function Home() {

     

  return (
   <div>    
      <div className="bg-black/95">
       <Herosection/>
    <Category/>
    
   </div>
   <div className="sm:hidden mt-4">
        <Link href={"/create-blog"}>
          <button className='mx-8 text-blue-500  hover:text-blue-800 font-serif  font-bold text-2xl border-b-4 border-gray-400'>
            Create-Blogs +
          </button>
        </Link>
      </div> 
   <Post/> 
   </div>
  );
}
