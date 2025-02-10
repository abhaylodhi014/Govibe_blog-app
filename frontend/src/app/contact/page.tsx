"use client";
import React from 'react'
import { useState } from "react";
import { Meteors } from "@/components/ui/meteors";

const ContactUs = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [status, setStatus] = useState("");
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus("Sending...");
  
      // Simulate API call
      setTimeout(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }, 1000);
    };
}


function page() {
  return (
   <> 
  

  <div className=" w-full  relative ">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r py-9 from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500  blur-9xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4  h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start"> 
 
         
          <div className="w-full min-h-screen flex flex-col items-center justify-center text-white py-5 ">
    <h1 className="text-5xl md:text-7xl text-center font-sans font-bold mb-8 text-white">Contact Us</h1>

    <p className='m-5 text-center w-65 px-2 md:px-24 lg:px-44 text-gray-500 flex flex-wrap'>We're here to help with any questions about our destinations, travel experiences, or packages. Reach out and let us know how we can assist you in your travel journey with GoVibe.</p>
    <form
    //   onSubmit={handleSubmit}
      className="w-full max-w-lg bg-black-400 shadow-md rounded px-8 pt-6 pb-8 "
    >
      <div className="mb-4">
       
        <input
          type="text"
          id="name"
          name="name"
        //   value={formData.name}
        //   onChange={handleChange}
          placeholder="Enter your name"
          className="w-full border rounded px-3 py-2 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div className="mb-4">
       
        <input
          type="email"
          id="email"
          name="email"
          // value={formData.email}
          // onChange={handleChange}
          placeholder="Enter your email"
          className=" w-full border rounded px-3 py-2 bg-gray-900 text-white focus:outline-none focus:ring-2   focus:ring-blue-400"
          required
        />
      </div>
      <div className="mb-6">
        
        <textarea
          id="message"
          name="message"
          // value={formData.message}
          // onChange={handleChange}
          placeholder="Type your message here"
          rows={5}
          className="w-full border rounded px-3 py-2 text-white bg-gray-900  focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  "
        >
          Send Message
        </button>
      </div>
    </form>
  
  </div>
         
 
          
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={50} />
        </div>
      </div>
  </>
   

  );
}

export default page
