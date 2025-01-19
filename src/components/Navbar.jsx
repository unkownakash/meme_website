import React, { useState } from 'react';
import img2 from '../assets/hamster2.jpg';
import './Navbar.css';
import { About } from './About';
import { Contact } from './Contact';
import { Link, NavLink } from 'react-router-dom';
import { Signup } from './Signup';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar bg-black text-white fixed top-0 left-0 w-full z-50 border-b-2 border-white">
      <div className="container mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <img src={img2} alt="Logo" className="w-10 sm:w-12 mr-3" />
          <span className="text-lg sm:text-2xl font-bold">M Hamster</span>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div
          className="sm:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="hamburger-line bg-white w-6 h-1 mb-1"></div>
          <div className="hamburger-line bg-white w-6 h-1 mb-1"></div>
          <div className="hamburger-line bg-white w-6 h-1"></div>
        </div>

        {/* Navigation Links */}
        <ul
          className={`nav-links sm:flex sm:items-center sm:gap-8 text-sm sm:text-lg lg:text-xl ${
            isOpen ? 'block' : 'hidden'
          } sm:block absolute sm:relative top-16 sm:top-0 left-0 w-full sm:w-auto bg-black sm:bg-transparent px-4 sm:px-0 py-4 sm:py-0 border-t-2 sm:border-0 border-white`}
        >
        
          {/* <li className="py-2 sm:py-0 hover:text-gray-400 cursor-pointer">
          <Link to={}>SignUp</Link>
           
          </li> */}
        </ul>

        {/* Signup Button */}
        <div className="hidden sm:block">
       
<button class="btn-31">
  <span class="text-container">
  <NavLink to="/signup"><span class="text">SignUP</span></NavLink>

  </span>
</button>

        </div>
      </div>
    </nav>
  );
}
