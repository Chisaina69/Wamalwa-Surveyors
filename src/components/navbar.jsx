import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

// Import your logo image
import logo from '/src/assets/Wamalwa-Surveyors-Logo2.png'; // Update the path to your logo file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownAbout, setDropdownAbout] = useState(false);
  const [dropdownProjects, setDropdownProjects] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdownAbout = () => {
    setDropdownAbout(!dropdownAbout);
  };

  const toggleDropdownProjects = () => {
    setDropdownProjects(!dropdownProjects);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-8" />
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-red-300">Home</Link>
          <div className="relative">
            <button onClick={toggleDropdownAbout} className="hover:text-red-300 flex items-center">
              About Us <FontAwesomeIcon icon={dropdownAbout ? faCaretUp : faCaretDown} />
            </button>
            {dropdownAbout && (
              <div className="absolute left-0 bg-gray-700 mt-2 py-2 w-48 rounded-lg shadow-xl">
                <Link to="/Company" className="block px-4 py-2 hover:bg-gray-600">Company</Link>
                <Link to="/team" className="block px-4 py-2 hover:bg-gray-600">Team</Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button onClick={toggleDropdownProjects} className="hover:text-red-300 flex items-center">
              Projects <FontAwesomeIcon icon={dropdownProjects ? faCaretUp : faCaretDown} />
            </button>
            {dropdownProjects && (
              <div className="absolute left-0 bg-gray-700 mt-2 py-2 w-48 rounded-lg shadow-xl">
                <Link to="/Projects" className="block px-4 py-2 hover:bg-gray-600">Projects</Link>
                <Link to="/Gallery" className="block px-4 py-2 hover:bg-gray-600">Gallery</Link>
              </div>
            )}
          </div>
          <Link to="/Contact" className="hover:text-red-300">Contact us</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-xl">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`absolute top-0 left-0 h-full bg-gray-900 bg-opacity-95 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out flex flex-col md:hidden`}>
        <button onClick={toggleNavbar} className="text-xl text-white absolute top-5 right-5">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <Link to="/" className="hover:text-red-300 px-6 py-4" onClick={toggleNavbar}>Home</Link>
        {/* Mobile Dropdowns */}
        <div className="px-6 py-4">
          <button onClick={toggleDropdownAbout} className="hover:text-red-300 flex items-center justify-between w-full">
            About Us <FontAwesomeIcon icon={dropdownAbout ? faCaretUp : faCaretDown} />
          </button>
          {dropdownAbout && (
            <div className="bg-gray-700 mt-2 py-2 rounded-lg shadow-xl">
              <Link to="/Company" className="block px-4 py-2 hover:bg-gray-600">Company</Link>
              <Link to="/team" className="block px-4 py-2 hover:bg-gray-600">Team</Link>
            </div>
          )}
        </div>
        <div className="px-6 py-4">
          <button onClick={toggleDropdownProjects} className="hover:text-red-300 flex items-center justify-between w-full">
            Projects <FontAwesomeIcon icon={dropdownProjects ? faCaretUp : faCaretDown} />
          </button>
          {dropdownProjects && (
            <div className="bg-gray-700 mt-2 py-2 rounded-lg shadow-xl">
              <Link to="/Projects" className="block px-4 py-2 hover:bg-gray-600">Projects</Link>
              <Link to="/Gallery" className="block px-4 py-2 hover:bg-gray-600">Gallery</Link>
            </div>
          )}
        </div>
        <Link to="/Contact" className="hover:text-red-300 px-6 py-4" onClick={toggleNavbar}>Contact us</Link>
      </div>
    </nav>
  );
};

export default Navbar;








