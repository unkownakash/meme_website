import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { About } from "./About";
import { Contact } from "./Contact";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-300 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold text-white mb-2">Meme Generator</h1>
          <p className="text-lg text-gray-400">
            Create and share memes effortlessly. Get creative, have fun, and make the internet laugh!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-center">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-100 transition">
                Home
              </Link>
            </li>
            {/* <li>
              <Link to="/features" className="hover:text-gray-100 transition">
                Features
              </Link>
            </li> */}
            <li>
              <Link to="/about" className="hover:text-gray-100 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-100 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link
              to="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Meme Generator. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
