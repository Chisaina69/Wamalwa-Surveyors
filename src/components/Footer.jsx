import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const [dropdownAbout, setDropdownAbout] = useState(false);
  const [dropdownProjects, setDropdownProjects] = useState(false);

  const toggleDropdownAbout = () => {
    setDropdownAbout(!dropdownAbout);
  };

  const toggleDropdownProjects = () => {
    setDropdownProjects(!dropdownProjects);
  };

  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Navigation Links */}
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <nav>
              <ul className="flex flex-wrap justify-center md:justify-start space-x-4">
                <li><Link to="/" className="hover:text-indigo-500">Home</Link></li>
                <li>
                  <button onClick={toggleDropdownAbout} className="hover:text-indigo-500">About Us</button>
                  {dropdownAbout && (
                    <ul className="absolute bg-gray-700 mt-2 py-2 w-48 rounded-lg shadow-xl">
                      <li><Link to="/company" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Company</Link></li>
                      <li><Link to="/team" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Team</Link></li>
                    </ul>
                  )}
                </li>
                <li>
                  <button onClick={toggleDropdownProjects} className="hover:text-indigo-500">Projects</button>
                  {dropdownProjects && (
                    <ul className="absolute bg-gray-700 mt-2 py-2 w-48 rounded-lg shadow-xl">
                      <li><Link to="/new" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Current</Link></li>
                      <li><Link to="/gallery" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Gallery</Link></li>
                    </ul>
                  )}
                </li>
                <li><a href="mailto:info@wamalwasurveyors.com" className="hover:text-indigo-500">Contact</a></li>
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <Link to="/contact" className="flex items-center hover:text-white">
              <FaMapMarkerAlt className="text-indigo-600 mr-2" />
              <span className="text-gray-700">Mua Park, No. 2, Muthaiga, Nairobi</span>
            </Link>
            <a href="mailto:info@wamalwasurveyors.com" className="flex items-center hover:text-white">
              <FaEnvelope className="text-indigo-600 mr-2" />
              <span className="text-gray-700">info@wamalwasurveyors.com</span>
            </a>
            <Link to="/contact" className="flex items-center hover:text-white">
              <FaPhone className="text-indigo-600 mr-2" />
              <span className="text-gray-700">0725 699 059 / 0736 762 490</span>
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start">
            <a href="#" className="text-gray-400 hover:text-white mr-4">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
        {/* Copyright Notice */}
        <div className="text-center mt-4">
          <p>© {new Date().getFullYear()} Wamalwa Surveyors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


