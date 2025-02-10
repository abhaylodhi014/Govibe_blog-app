"use client"
// layout.jsx
import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { DataProvider } from '../context/DataContext';
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
 
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [UserName , setUserName] = useState("")
  const router = useRouter();
  
  useEffect(() => {
    const User = sessionStorage.getItem('username');  // Get username from sessionStorage
    setUserName(User);  // Set state, but don't rely on it for redirect
    
    if (!User) {  // Use the direct sessionStorage value for immediate redirect
      router.push('/auth');
    }
  }, []);  // Runs only once when the component mounts



  return (
    <>
    <html lang="en">
      <title>Go-vibe : Blog-app</title>
      <link rel="icon" href="./camp.svg" />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <DataProvider>
      <div className="flex  flex-col min-h-screen justify-between">
            <Navbar  />

            <div>
               {children}
            </div>
       
        
        <div className="">
         <Footer/>
      </div></div>
       </DataProvider>
       <script src="https://cdn.jsdelivr.net/npm/flowbite@3.0.0/dist/flowbite.min.js"></script>
      </body>
    </html>
    </>
  );
}
