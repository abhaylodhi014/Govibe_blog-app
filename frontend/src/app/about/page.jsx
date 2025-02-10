"use client";
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About GoVibe</h1>
      
      <section className="mb-8 flex flex-col lg:flex-row items-center">
        <img src="/adventure.jpg" alt="Our Mission" className="w-full lg:w-1/2 rounded-lg shadow-md mb-4 lg:mb-0 lg:mr-6" />
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600">
            At GoVibe, our mission is to create a vibrant social media platform where users can freely post blogs, share photos, and express themselves. We aim to foster a community that encourages creativity, connection, and inspiration.
          </p>
        </div>
      </section>

      <section className="mb-8 flex flex-col-reverse lg:flex-row items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Who We Are</h2>
          <p className="text-lg text-gray-600">
            We are a passionate team of innovators committed to providing a seamless and engaging social experience. At GoVibe, we value authenticity and creativity, ensuring that every user finds their unique voice in our community.
          </p>
        </div>
        <img src="/beach-chair.jpg" alt="Who We Are" className="w-full lg:w-1/2 rounded-lg shadow-md mb-4 lg:mb-0 lg:ml-6" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Choose GoVibe?</h2>
        <ul className="list-disc pl-6 text-lg text-gray-600 space-y-2">
          <li>Express Freely: Share your thoughts, photos, and blogs with a community that values creativity.</li>
          <li>User-Friendly Interface: Our platform is designed for ease of use, making posting and connecting simple.</li>
          <li>Vibrant Community: Connect with like-minded individuals who share your passions.</li>
          <li>Safe and Secure: We prioritize user privacy and security to provide a safe online space.</li>
          <li>Continuous Innovation: We are always evolving to bring you the latest features and enhancements.</li>
        </ul>
      </section>

      <section className="bg-gray-100 py-8 px-6 rounded-lg shadow-md flex flex-col lg:flex-row items-center">
        <img src="/family.jpg" alt="Our Vision" className="w-full lg:w-1/2 rounded-lg shadow-md mb-4 lg:mb-0 lg:mr-6" />
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-600">
            We envision GoVibe as the go-to social platform for creative minds worldwide. Our goal is to empower individuals to share their stories and experiences while building meaningful connections across the globe.
          </p>
        </div>
      </section>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Join Us Today!</h2>
        <p className="text-lg text-gray-600 mt-4">
          Ready to share your vibe? Don't wait! Start posting your blogs, sharing your photos, and connecting with a vibrant community. <span className="text-blue-600 underline cursor-pointer">Get Started Now</span>.
        </p>
      </div>
    </div>
  );
};

export default About;
