import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">Wamlwa Surveyors</Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-red-300">Home</Link>
          <Link to="/about" className="hover:text-red-300">About Us</Link>
          <Link to="/services" className="hover:text-red-300">What We Offer</Link>
          <Link to="/contact" className="hover:text-red-300">Contact Us</Link>
          <Link to="/projects" className="hover:text-red-300">Projects</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-xl">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>
      <div className={`absolute top-0 left-0 h-full bg-gray-900 bg-opacity-95 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out flex flex-col md:hidden`}>
        <button onClick={toggleNavbar} className="text-xl text-white absolute top-5 right-5">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <Link to="/" className="hover:text-red-300 px-6 py-4" onClick={toggleNavbar}>Home</Link>
        <Link to="/about" className="hover:text-red-300 px-6 py-4" onClick={toggleNavbar}>About Us</Link>
        <Link to="/services" className="hover:text-red-300 px-6 py-4" onClick={toggleNavbar}>What We Offer</Link>
        <Link to="/contact" className="hover:text-red-300 px-6 py-4" onClick={toggleNavbar}>Contact Us</Link>
        <Link to="/projects" className="hover:text-red-300 px-6 py-4" onClick={toggleNavbar}>Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;





