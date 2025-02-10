//navbar
"use client"
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import { usePathname } from 'next/navigation';  


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For controlling sidebar visibility
   
    const [UserName , setUserName] = useState("")
    
    
    useEffect(() => {
      const User = sessionStorage.getItem('username');  // Get username from sessionStorage
      if(User ){
       setUserName(User.split(' ')[0]);  // Set state, but don't rely on it for redirect
       
      }
      
     
    }, []);  // Runs only once when the component mounts
  

  // Toggles the sidebar when profile photo is clicked
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const pathname = usePathname();  // Get current route in Next.js

  useEffect(() => {
    // Example: Track page views or log current route
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Resize event to close the menu when the screen size exceeds the threshold
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false); // Close the menu when the screen is resized to medium or larger
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on component mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="navbar  z-50 flex items-center justify-between h-[70px] px-[10px] bg-[#0c0c0c] overflow-hidden">
        {/* Logo */}
        <div className="text-white text-3xl flex justify-center">
          <img src="/camp.svg" alt="camp" className="mr-3 mb-2" />
          <h1 className="mt-3">Go-vibe</h1>
        </div>
        
        {/* Hamburger Menu Icon (Visible on Small Screens) */}
        <div className="sm:hidden text-white cursor-pointer" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="w-6 h-6 text-2xl" />
        </div> 

        {/* Navbar Links - Hidden on Small Screens, Visible on Medium & Large */}
        <div className={`links mx-2 flex items-center gap-[20px]  ${isMenuOpen ? 'flex-col absolute top-[70px] left-0 right-0 bg-[#0c0c0c] p-4 z-50' : 'hidden sm:flex'}`}>
          <Link href="/" className={`navLink ${pathname === "/" ? "active" : ""}`} >Home</Link>
          <Link href="/about" className={`navLink ${pathname === "/about" ? "active" : ""}`} >About</Link>
          
          <Link href="/create-blog" className={`navLink ${pathname === "/create-blog" ? "active" : ""}`} >Create Blog</Link>
          <Link href="/contact" className={`navLink ${pathname === "/contact" ? "active" : ""}`} >Contact Us</Link>
          
          <div className="flex justify-center items-center ">

            <Link href="/profile">
              <FontAwesomeIcon icon={faUserCircle} className=" mr-2 text-2xl navLink hover:text-blue-600 " />
              
            </Link>
            {/* // localStorage.removeItem("token");
              // localStorage.removeItem("isLoggedIn"); */}

            
              <div className='text-white '>{ UserName ? (<p>{UserName}</p> )
               : 
               (<Link onClick={() => {
              
            }} href={{pathname:"/auth" }} className="navLink"  > 
               <p>Login</p>
               </Link>)
            }</div>
              
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
