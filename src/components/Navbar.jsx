import React, { useEffect, useState } from 'react'
import { assets } from "../assets/assets"
import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify' // ✅ To show logout success message

const Navbar = () => {
  // State to control mobile menu open/close
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const navigate = useNavigate()
  const location = useLocation() // ✅ to get current route path

  // State to hold user info and login status from localStorage
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")))
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("isLoggedIn") === "true")

  // ✅ Effect to prevent scrolling when mobile menu is open
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    // Clean up effect when component unmounts
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [showMobileMenu])

  // ✅ Listen to changes in localStorage to update login state (sync across components/pages)
  useEffect(() => {
    const handleStorageChange = () => {
      setUser(JSON.parse(localStorage.getItem("user")))
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true")
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        
        {/* ✅ Logo */}
        <img src={assets.logo} alt="Logo" />

        {/* ✅ Desktop navigation links */}
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
          <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
          <a href="#Testimonails" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
        </ul>

        {/* ✅ If logged in, show user's name and logout button. Otherwise show Sign up button */}
        {isLoggedIn ? (
          <div className="hidden md:flex items-center gap-3 bg-white text-black px-4 py-2 rounded-full">
            <img src={assets.user} alt="User" className="w-6 h-6 rounded-full" />
            <span>{user?.name}</span>

            {/* ✅ Logout button logic */}
            <button
              onClick={() => {
                localStorage.removeItem("isLoggedIn")       // Clear login status
                localStorage.removeItem("user")             // Clear user info
                window.dispatchEvent(new Event("storage"))  // Notify other components (like Navbar) to update
                setShowMobileMenu(false)                    // Close menu if open
                toast.success("Logged out successfully")    // Show success toast
                navigate("/login")                          // Redirect to login page
              }}
              className="ml-3 text-sm text-red-600 hover:underline"
            >
              Logout
            </button>
          </div>
        ) : (
          // ✅ Show "Sign up" button only if not on the signup page
          location.pathname !== "/signup" && (
            <button
              onClick={() => navigate('/signup')}
              className='hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer'
            >
              Sign up
            </button>
          )
        )}

        {/* ✅ Hamburger menu icon for small screens */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          alt="Menu"
          className='md:hidden w-7'
        />
      </div>

      {/* ✅ Mobile Navigation Menu */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        
        {/* Cross (close) icon */}
        <div className='flex justify-end cursor-pointer'>
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            alt="Close"
            className='w-6'
          />
        </div>

        {/* ✅ Mobile nav links */}
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium cursor-pointer'>
          <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={() => setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Testimonails" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
