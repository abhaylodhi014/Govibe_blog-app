"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import API from "@/service/api";

import { signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "../../utils/firebase.js";

export default function Auth() {  // Renamed from 'auth' to 'Auth' to follow component naming convention
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // New state for authentication tracking
  const router = useRouter();

  // Redirect after successful login/signup
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated]);

  // Login function
  const loginUser = async () => {
    try {
      const response = await API.userLogin({ email, password });
      
      // Store tokens in sessionStorage
      sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
      sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
      sessionStorage.setItem('username', response.data.username);
      sessionStorage.setItem('email', response.data.email);

      setError("");
      setIsAuthenticated(true);  // Trigger redirection
    } catch (error) {
        setError(error.response?.data?.message || "Login failed !! try again.");
    }
  };

  // Signup function
  const signupUser = async () => {
    try {
      const response = await API.userSignup({ username, email, password });
      

      // Store tokens in sessionStorage
      sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
      sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
      sessionStorage.setItem('username', response.data.username);
      sessionStorage.setItem('email', response.data.email);

      setError("");
      setIsAuthenticated(true);  // Trigger redirection
    } catch (error) {
      setError(error.response?.data?.message || "signup failed !! try again.")
    }
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      await loginUser();
    } else {
      await signupUser();
    }
  };
  
  //login/signup with google 
  const handleGoogleAuth = async () => {
    try {
   
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
     

      // Save user info in sessionStorage
      sessionStorage.setItem("username", user.displayName);
      sessionStorage.setItem("email", user.email);
      sessionStorage.setItem("profilePhoto", user.photoURL);
      console.log('photourl ' , user.photoURL);

      // Send user data to backend to store in MongoDB
      const response = await API.googleauth({
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
      sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
      sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);

      // Redirect to profile or home
      router.push("/");
    } catch (error) {
      console.error("Error with Google Authentication:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 shadow-2xl p-6 w-[300px]">
        <h1 className="text-3xl text-center font-bold mb-4">
          {isLogin ? "Login" : "Signup"}
        </h1>

        <form onSubmit={handleSubmit} className="my-5 flex-col">
          {!isLogin && (
            <div className="my-5">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-2 w-full border rounded"
              />
            </div>
          )}

          <div className="my-4">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 w-full border rounded"
            />
          </div>

          <div className="my-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 w-full border rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 my-1 bg-gray-400 rounded-3xl text-white hover:bg-blue-500"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
          <div className="my-2 text-center">
            <p className="my-3 text-2xl font-bold">OR</p>
          </div>

          <div className="mx-auto flex justify-center bg-gray-400 rounded-3xl text-white hover:bg-blue-500">
            <FontAwesomeIcon icon={faGoogle} className="w-6 h-6 mr-1 mt-3 ml-4" />
            <button className="p-3   rounded-3xl" onClick={handleGoogleAuth}>Google {isLogin ? "Login" : "Signup"}</button>
          </div>
        

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-4 text-blue-500"
        >
          {isLogin ? "Need an account? Signup" : "Have an account? Login"}
        </button>

        {error && (
          <div className="bg-red-400 rounded-3xl p-2 mt-3 justify-center flex">
            <FontAwesomeIcon icon={faExclamationCircle} className="w-6 h-6 mx-2 text-2xl" />
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
