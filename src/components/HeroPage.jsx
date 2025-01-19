import React from 'react';
import bgImg from '../assets/BigImg.jpg';
import img2 from '../assets/hamster2.jpg';
import MemeGenerator from './MemeGenerator';
import { Link } from 'react-router-dom';
import { About } from './About';
import { Contact } from './Contact';
// import { Guide } from './Guide';
import './Heropage.css';
import { Guide } from './Guide';
import { Signup } from './Signup';
export default function HeroPage() {
  return (
    <>
      <div className="h-screen bg-red-200 border-l-2 border-black relative">
        {/* Background Image */}
        <img
          src={bgImg}
          alt=""
          className="h-full w-full absolute top-0 left-0 object-cover"
        />

        {/* Navbar */}
        <div className=" absolute  w-full h-16  border-black p-4 sm:p-6 flex justify-between items-center bg-opacity-50">
          <div className="logo flex items-center gap-2">
            <img src={img2} alt="Logo" className="w-14 sm:w-16 lg:w-20" />
            <span
              className="glitch bg-black text-white px-3 sm:px-5 text-xl sm:text-2xl py-1 sm:py-2 rounded"
              style={{ textShadow: '2px 2px 2px red' }}
            >
              M Hamster
            </span>
          </div>
          <div className="navList hidden sm:flex gap-4 lg:gap-8 text-sm sm:text-lg lg:text-xl google-font">
          {/* <Link to={About} className='hover:underline cursor-pointer'>About Us</Link> */}
            {/* <span className="hover:underline cursor-pointer">Trending</span> */}
            {/* <span className="hover:underline cursor-pointer">Templates</span> */}
            {/* <span className="hover:underline cursor-pointer">About Us</span> */}
            {/* <span className="hover:underline cursor-pointer">Contact</span> */}
          {/* <Link to={Contact} className='hover:underline cursor-pointer'>Contact</Link> */}

          </div>
          {/* <div className="  text-sm sm:text-lg lg:text-xl border bg-white border-black px-3 py-1 lg:px-4 lg:py-2 hover:bg-black">
           
            <Link to={Signup}>SignUp</Link>
          </div> */}
        </div>

        {/* Hero Section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center google-font px-4">
          <p className="glitch text-2xl sm:text-4xl lg:text-5xl">
            Welcome to{' '}
            <span
              className="bg-black text-white px-3 sm:px-5"
              style={{ textShadow: '2px 2px 2px red' }}
            >
              M Hamster
            </span>
          </p>
          <p className="text-3xl sm:text-5xl lg:text-7xl mt-3 sm:mt-5">
            Create the funniest
          </p>
          <p className="text-3xl sm:text-5xl lg:text-7xl">meme ever</p>
          <button className="border border-black px-4 py-2 sm:px-5 sm:py-3 rounded text-lg sm:text-2xl mt-5 font-extrabold tracking-wider hover:bg-black hover:text-white transition-all duration-500">
            <a href="#generate"> MAKE IT</a>
           
          </button>
        </div>
      </div>
         <Guide/>
      <div id='generate'>
         <MemeGenerator/>
      </div>
    </>
  );
}
