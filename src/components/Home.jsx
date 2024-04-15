import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Importing background images
import backgroundImg from '../assets/background.jpg';
import backgroundImage2 from '../assets/J16A0496.jpg';
import backgroundImage3 from '../assets/J16A0533.jpg';
import backgroundImage4 from '../assets/J16A1249.jpg';
import backgroundImage5 from '../assets/white-background.jpg';



const preloadImages = (images) => {
  images.forEach((image) => {
    new Image().src = image;
  });
};

const Home = () => {
  const [backgroundImages, setBackgroundImages] = useState([
    { img: backgroundImg, title: 'Precision in Every Measurement', description: 'Your Trusted Partner in Land Surveying' },
    { img: backgroundImage2, title: 'Your Accurate Choice' },
    { img: backgroundImage3, title: 'DEFINING BOUNDARIES IN KENYA SINCE 2013' },
    { img: backgroundImage4, title: 'ENSURING ORDER IN THE PHYSICAL WORLD' },
  ]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); 

    preloadImages(backgroundImages.map(image => image.img)); 

    return () => clearInterval(interval);
  }, [backgroundImages]);

  const currentImage = backgroundImages[currentImageIndex];
  const services = [
    { 
      name: 'Feasibility studies', 
      description: 'Thorough analysis and evaluation of land sites to determine their suitability for various purposes.' 
    },
    { 
      name: 'Topographical Surveys', 
      description: 'Accurate mapping and depiction of the natural and man-made features of a specific area, providing essential data for planning and development.' 
    },
    { 
      name: 'Construction supervision', 
      description: 'Monitoring and overseeing construction projects to ensure adherence to specifications, quality standards, and safety regulations.' 
    },
    { 
      name: 'Cadastral surveys', 
      description: 'Precise measurement and delineation of land boundaries and property lines, essential for legal and administrative purposes such as land ownership and taxation.' 
    },
    { 
      name: 'Remote sensing and GIS service', 
      description: 'Utilization of satellite imagery and geographic information systems (GIS) technology to gather and analyze spatial data, facilitating the creation of detailed three-dimensional representations of terrains for various applications.' 
    },
    { 
      name: 'Designs road and bridges', 
      description: 'Development and planning of road and bridge infrastructure, ensuring structural integrity, functionality, and compliance with safety standards and regulations.' 
    },
  ];

  const projects = [
    {
      title: 'Topographical Survey',
      description: 'A topographical survey maps the elevation, depth, contour lines, and physical characteristics of a parcel of land, providing essential data for planning, development, and construction.', 
      imageUrl: '/project/Project 4.jpg', 
      link: '/ProjectsList', 
    },
    {
      title: 'Cadastral Survey',
      description: 'Cadastral surveying specializes in establishing real property boundaries, documenting land ownership, and creating legal documents that define property lines and rights.', 
      imageUrl: '/Cadastral.jpg', 
      link: '/ProjectsList', 
    },
    {
      title: 'Design, Construction Supervision',
      description: 'This service encompasses overseeing construction projects, ensuring compliance with blueprints and safety regulations, and managing contractors and subcontractors throughout the build-out.', 
      imageUrl: '/June 8th 2023/J16A9163.jpg', 
      link: '/ProjectsList', 
    },
  ];

  const ProjectCard = ({ title, description, imageUrl, link }) => (
    <motion.div 
      className="group bg-[#475569] rounded-lg p-6 shadow-lg transform hover:shadow-2xl hover:-translate-y-1 hover:scale-105 relative"
      whileHover={{ scale: 1.05 }}
    >
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover mb-4 rounded-lg" />
      <div className="relative">
        <h3 className="text-2xl font-bold mb-3 text-sky-500 group-hover:text-sky-500">{title}</h3>
        <p className="group-hover:text-white">{description}</p>
        <Link to="/ProjectsList" className="text-sky-500 hover:underline mt-2 inline-block group-hover:text-sky-500">Learn More</Link>
      </div>
    </motion.div>
  );

  return (
    <div className='bg-[#1e293b] '  style={{ backgroundImage: `url(${backgroundImage5})`, backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className="relative" style={{ backgroundImage: `url(${currentImage.img})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center text-center">
          <motion.h1 className="text-white text-6xl font-bold mb-4" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>{currentImage.title}</motion.h1>
          <motion.p className="text-white text-xl mb-8" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>{currentImage.description}</motion.p>
          <Link to="/ProjectsList" className="text-white bg-sky-500 hover:bg-sky-500 py-2 px-4 rounded-full transition duration-300 ease-in-out animate-bounce">Check Us Out</Link>
        </div>
      </div>

      <div className="mt-8 max-w-3xl mx-auto bg-[#475569] bg-opacity-90 rounded-lg p-8 shadow-lg">
        <h2 className="text-4xl font-extrabold text-sky-500 mb-4 text-center relative">Our Vision</h2>
        <p className="text-lg mb-4 text-center text-white">To be the benchmark for quality and innovation in land surveying, providing accurate and reliable data for our clients.</p>
        <h2 className="text-4xl font-extrabold text-sky-500 mb-4 text-center relative">Our Mission</h2>
        <p className="text-lg text-center text-white">To deliver exceptional service and insights that empower our clients to make informed decisions about their land and properties.</p>
      </div> 

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16 text-center relative" >
        <h2 className="text-4xl font-extrabold text-sky-950 mb-8 inline-block animate-bounce">What We Do</h2> 
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-300 to-indigo-600 mx-auto mb-8"></div> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#475569] bg-opacity-90 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-extrabold mb-3 text-sky-500 ">{service.name}</h3>
              <p className='text-white'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>


    

      {/* Projects Section */}
      <div className="container mx-auto px-4 py-16 text-center relative" >
        <h2 className="text-4xl font-semibold text-sky-950 mb-8 inline-block animate-bounce">Our Projects</h2> 
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-indigo-600 mx-auto mb-8"></div> {/* Awesome underline effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;





