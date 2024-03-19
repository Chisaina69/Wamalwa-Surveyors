import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '/src/assets/background.jpg'; // Replace with the path to your chosen image

import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    import('aos/dist/aos').then((AOS) => {
      AOS.default.init({ once: true });
    });
  }, []);

  const services = [
    { name: 'Site Inspection', description: 'Detailed analysis and assessment of land sites.' },
    { name: 'Topographical Surveys', description: 'Accurate representation of the area’s terrain.' },
    { name: 'Boundary Surveys', description: 'Defining true property corners and property lines.' },
    { name: 'Measurements', description: 'Precise land and property measurements.' },
    { name: '3D Modeling', description: 'Advanced three-dimensional representation of terrains.' },
    { name: 'Safety Inspections', description: 'Ensuring compliance with safety regulations.' },
  ];

  return (
    <div>
      <div className="relative" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '50vh' }}>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-6xl font-bold mb-4" data-aos="fade-up">Precision in Every Measurement</h1>
          <p className="text-white text-xl mb-8" data-aos="fade-up">Your Trusted Partner in Land Surveying</p>
        </div>
      </div>

      <div className="mt-8 max-w-3xl mx-auto bg-white bg-opacity-90 rounded-lg p-8 shadow-lg" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-blue-900 mb-4" data-aos="fade-up">Our Vision</h2>
        <p className="text-lg mb-4" data-aos="fade-up">To be the benchmark for quality and innovation in land surveying, providing accurate and reliable data for our clients.</p>
        <h2 className="text-4xl font-semibold text-blue-900 mb-4" data-aos="fade-up">Our Mission</h2>
        <p className="text-lg" data-aos="fade-up">To deliver exceptional service and insights that empower our clients to make informed decisions about their land and properties.</p>
      </div>


      {/* Services Section */}
      <div className="container mx-auto px-4 py-16" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-black mb-8" data-aos="fade-up">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg" data-aos="fade-up">
              <h3 className="text-2xl font-semibold mb-3 text-blue-900">{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-4 py-16" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-black mb-8" data-aos="fade-up">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards will be added here */}
        </div>
      </div>
    </div>
  );
};

export default Home;





