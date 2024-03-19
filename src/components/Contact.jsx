import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-cover bg-center h-screen" style={{backgroundImage: 'url("/src/assets/Screenshot 2024-03-18 171740.png")'}}>
      <div className="bg-white bg-opacity-60 rounded-lg shadow-lg p-8 max-w-lg mx-auto">
        {/* Stylistic Heading */}
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-8 relative inline-block">
          Get In Touch
          <span className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600 transform -skew-x-12"></span>
        </h2>

        {/* Contact Information */}
        <div className="space-y-4">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-indigo-600 mr-2" />
            <span className="text-gray-700">Mua Park, No. 2, Muthaiga, Nairobi</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-indigo-600 mr-2" />
            <a href="mailto:info@wamalwasurveyors.com" className="text-gray-700 hover:text-indigo-600">info@wamalwasurveyors.com</a>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-indigo-600 mr-2" />
            <a href="tel:+254725699059" className="text-gray-700 hover:text-indigo-600">0725 699 059</a> / <a href="tel:+254736762490" className="text-gray-700 hover:text-indigo-600">0736 762 490</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


