import React, { useEffect } from 'react';
import backgroundImg from '/src/assets/background.jpg'; 

import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    import('aos/dist/aos').then((AOS) => {
      AOS.default.init({ once: true });
    });
  }, []);

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
      imageUrl: '/src/assets/project/Project 4.jpg', 
      link: '/Projects', 
    },
    {
      title: 'Cadastral Survey',
      description: 'Cadastral surveying specializes in establishing real property boundaries, documenting land ownership, and creating legal documents that define property lines and rights.', 
      imageUrl: '/src/assets/Cadastral.jpg', 
      link: '/Projects', 
    },
    {
      title: 'Design, Construction Supervision',
      description: 'This service encompasses overseeing construction projects, ensuring compliance with blueprints and safety regulations, and managing contractors and subcontractors throughout the build-out.', 
      imageUrl: '/src/assets/June 8th 2023/J16A9163.jpg', 
      link: '/Projects', 
    },
    // ... add more projects if needed
  ];
  

  const ProjectCard = ({ title, description, imageUrl, link }) => (
    <div className="group bg-white rounded-lg p-6 shadow-lg transition duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-1 hover:scale-105 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-500 opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover mb-4 rounded-lg" />
      <div className="relative">
        <h3 className="text-2xl font-semibold mb-3 text-blue-900 group-hover:text-white">{title}</h3>
        <p className="group-hover:text-gray-200">{description}</p>
        <a href={link} className="text-blue-600 hover:underline mt-2 inline-block group-hover:text-blue-300">Learn More</a>
      </div>
    </div>
  );

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
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold text-black mb-8">Our Projects</h2>
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





