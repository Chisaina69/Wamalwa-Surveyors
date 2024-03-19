import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

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
        <Link to="/" className="text-xl font-semibold">Wamlwa Surveyors</Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-red-300">Home</Link>
          <div className="relative">
            <button onClick={toggleDropdownAbout} className="hover:text-red-300 flex items-center">
              About Us <FontAwesomeIcon icon={dropdownAbout ? faCaretUp : faCaretDown} />
            </button>
            {dropdownAbout && (
              <div className="absolute left-0 bg-gray-700 mt-2 py-2 w-48 rounded-lg shadow-xl">
                <Link to="/company" className="block px-4 py-2 hover:bg-gray-600">Company</Link>
                <Link to="/team" className="block px-4 py-2 hover:bg-gray-600">Team</Link>
                <Link to="/careers" className="block px-4 py-2 hover:bg-gray-600">Careers</Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button onClick={toggleDropdownProjects} className="hover:text-red-300 flex items-center">
              Projects <FontAwesomeIcon icon={dropdownProjects ? faCaretUp : faCaretDown} />
            </button>
            {dropdownProjects && (
              <div className="absolute left-0 bg-gray-700 mt-2 py-2 w-48 rounded-lg shadow-xl">
                <Link to="/current" className="block px-4 py-2 hover:bg-gray-600">Current</Link>
                <Link to="/past" className="block px-4 py-2 hover:bg-gray-600">Past</Link>
                <Link to="/future" className="block px-4 py-2 hover:bg-gray-600">Future</Link>
              </div>
            )}
          </div>
          <Link to="/clients" className="hover:text-red-300">Clients</Link>
          <Link to="/contact" className="hover:text-red-300">Contact us</Link>
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
              <Link to="/company" className="block px-4 py-2 hover:bg-gray-600">Company</Link>
              <Link to="/team" className="block px-4 py-2 hover:bg-gray-600">Team</Link>
              <Link to="/careers" className="block px-4 py-2 hover:bg-gray-600">Careers</Link>
            </div>
          )}
        </div>
        <div className="px-6 py-4">
          <button onClick={toggleDropdownProjects} className="hover:text-red-300 flex items-center justify-between w-full">
            Projects <FontAwesomeIcon icon={dropdownProjects ? faCaretUp : faCaretDown} />
          </button>
          {dropdownProjects && (
            <div className="bg-gray-700 mt-2 py-2 rounded-lg shadow-xl">
              <Link to="/current" className="block px-4 py-2 hover:bg-gray-600">Current</Link>
              <Link to="/past" className="block px-4 py-2 hover:bg-gray-600">Past</Link>
              <Link to="/future" className="block px-4 py-2 hover:bg-gray-600">Future</Link>
            </div>
          )}
        </div>
        <Link to="/clients" className="hover:text-red-300 px-6 py-4" onClick={toggleNavbar}>Clients</Link>
        <Link to="/contact" className="hover:text-red-300 px-6 py-4" onClick={toggleNavbar}>Contact us</Link>
      </div>
    </nav>
  );
};

export default Navbar;






