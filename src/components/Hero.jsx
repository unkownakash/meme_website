import React from 'react';
import hero from "../assets/image.png";
import goo from "../assets/new.jpg"
import { useRef } from 'react';
import MemeGenerator from './MemeGenerator';

function Hero() {
  // Reference to the MemeGenerator component
  const memeGeneratorRef = useRef(null);

  // Scroll function
  const scrollToMemeGenerator = () => {
    if (memeGeneratorRef.current) {
      memeGeneratorRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="flex justify-between border-white w-full h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white">
        {/* Overlay */}
     <div>
         <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${hero})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative container mx-auto px-4 flex items-center justify-center h-full">
          <div className="text-center space-y-6">
            <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-indigo-500 ">
              Create 
              
            </h1>
            <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-indigo-500 ">
              Your Own Memes 
              
            </h1>
            <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-indigo-500 ">
            in Seconds
              
            </h1>

            <p className="text-2xl max-w-3xl mx-auto leading-relaxed">
              Turn any image into a hilarious meme! Upload your photo, add text, and customize it to make your friends laugh. It's that easy!
            </p>

            {/* Call to Action Button */}
            <button
              onClick={scrollToMemeGenerator}
              className="inline-block px-5 py-3 mt-6 text-xl font-semibold bg-yellow-400 text-black rounded-full hover:bg-red-200 transition duration-300"
            >
              Start Generating Memes
            </button>
          </div>
        </div>

        {/* Optional Background Image */}

      </div>

      {/* MemeGenerator Section */}
      </div>
      <div id="meme-generator" ref={memeGeneratorRef}>
        <MemeGenerator />
     </div>
    </>
  );
}

export default Hero;
