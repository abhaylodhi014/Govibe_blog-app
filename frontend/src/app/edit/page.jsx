//page.jsx - create-blog
"use client"
import { useState, useEffect, useContext } from "react";

import API from "@/service/api";
import { uploadFile } from "@/service/api";
import { useSearchParams, useRouter } from 'next/navigation';  // Added useRouter for navigation

export default function Edit() {
  const username = sessionStorage.getItem('username');
  const searchParams = useSearchParams();
  const id = searchParams.get('id');  // Get the 'id' query parameter
  const router = useRouter();
 
 

 
  const [post, setPost] = useState(null);
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      let response = await API.getPostById({ id });
      if (response.isSuccess) {
        setPost(response.data);
        setImage(response.data.image)
      }
      setLoading(false);
    };

    fetchPost();
  }, [id]);


  // Handle file selection and preview
const handleImageUpload = (e) => {
  const selectedFile = e.target.files[0];
  if (selectedFile) {
    setFile(selectedFile);
    setImage(URL.createObjectURL(selectedFile));
  }
};

// Upload image when file changes
useEffect(() => {
  const uploadImage = async () => {
    if (!file) return;

    const data = new FormData();
    data.append("name", file.name);
    data.append("file", file);

    try {
      const response = await uploadFile(data);
      if (response.data) {
        setPost((prevPost) => ({ ...prevPost, image: response.data.imageUrl }));
      }
    } catch (error) {
      console.error("File upload failed:", error);
    }
  };

  uploadImage();
}, [file]);

    
  // Handle changes in input fields
  const handleChange = (e) => {
   
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPost = { ...post };
    console.log('Updating Post with ID from edit:', id ,  "and post id" , post._id);  // Check if the ID is correct
    const response = await API.updatePost( updatedPost);
    if (response.isSuccess) {
      router.push('/');
    } else {
      alert('Failed to update post!');
    }
  };

  if (loading) return <p className="w-full h-screen text-2xl flex justify-center items-center">Loading...</p>;

  return (
    <>
      <h1 className="bg-gray-400 p-4 text-center text-2xl md:text-3xl font-serif font-bold">
        Exploring Nature's Wonders: A Journey Through Travel and Adventure
      </h1>
      <div className="flex justify-center items-center min-h-screen bg-gray-400">
        <div className="bg-gray-300 p-6 rounded-2xl w-full shadow-lg max-w-[800px] mx-[10%]">
          <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
            {/* Image Upload */}
            <div className="w-full h-60 flex input items-center justify-center border-2 border-dashed border-gray-300 rounded-lg relative">
              <input 
                autoComplete="off"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute input w-full h-full opacity-0 cursor-pointer"
              />
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  className="w-full  h-full object-cover rounded-lg"
                />
              ) : (
                <p className="text-gray text-2xl ">Upload Image</p>
              )}
            </div>

            {/* Post Title */}
            <div>
              <input
                name="title"
                autoComplete="off"
                placeholder="Title"
                type="text"
                value={post.title}
                onChange={handleChange}
                className="w-full input border border-gray-300  focus:ring-2 focus:ring-blue-400 "
                required
              />
            </div>

            {/* Place */}
            <div>
              <input

                type="text"
                autoComplete="off"
                name="place"
                placeholder="Place"
                value={post.place}
                onChange={handleChange}
                className="w-full border input border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
           
            {/* Category Dropdown */}
            <div>
              <select
                name="categories"
                value={post.categories}
                autoComplete="off"
                onChange={handleChange}
                className="w-full border input  border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="Adventure">Adventure</option>
                <option value="Cultural">Cultural</option>
                <option value="Road Trips">Road Trips</option>
                <option value="Beach">Beach</option>
                <option value="Mountain">Mountain</option>
                <option value="Festivals">Festivals</option>
                <option value="Solo Travel">Solo Travel</option>
                <option value="Family Travel">Family Travel</option>
                <option value="Spiritual Travel">Spiritual Travel</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <textarea
              autoComplete="off"
                name="description"
                value={post.description}
                onChange={handleChange}
                className="w-full border input border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter Description"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Upload Button */}
            <button
              type="submit"
              className="w-full button"
            >
              Update Post
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      clipRule="evenodd"
    ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
