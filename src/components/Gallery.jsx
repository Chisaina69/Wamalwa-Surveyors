import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const imageCategories = {
    Imora: [
      '/src/assets/imora/_DSC0669.jpg',  
      '/src/assets/imora/_DSC0748.jpg',
      '/src/assets/imora/_DSC0746.jpg',
      '/src/assets/imora/_DSC0722.jpg',
      '/src/assets/imora/_DSC0694.jpg',
      '/src/assets/imora/_DSC0658.jpg',
      '/src/assets/imora/_DSC0664 (1).jpg',
      '/src/assets/imora/_DSC0665.jpg',
      '/src/assets/imora/_DSC0683.jpg',
      '/src/assets/imora/_DSC0685.jpg',
      '/src/assets/imora/_DSC0688.jpg',
      '/src/assets/imora/_DSC0692.jpg',
      '/src/assets/imora/_DSC0699.jpg',
      '/src/assets/imora/_DSC0756.jpg',
      '/src/assets/imora/_DSC0755.jpg',
      '/src/assets/imora/_DSC0754.jpg',
      '/src/assets/imora/_DSC0751.jpg',
      '/src/assets/imora/_DSC0714.jpg'
    ],
    residential: [
      '/src/assets/May 3rd 2023/J16A0474.jpg',
      '/src/assets/May 3rd 2023/J16A0659.jpg',
      '/src/assets/May 3rd 2023/J16A0657.jpg',
      '/src/assets/May 3rd 2023/J16A0655.jpg',
      '/src/assets/May 3rd 2023/J16A0649.jpg',
      '/src/assets/May 3rd 2023/J16A0645.jpg',
      '/src/assets/May 3rd 2023/J16A0635.jpg',
      '/src/assets/May 3rd 2023/J16A0625.jpg',
      '/src/assets/May 3rd 2023/J16A0618.jpg',
      '/src/assets/May 3rd 2023/J16A0616.jpg',
      '/src/assets/May 3rd 2023/J16A0614.jpg',
      '/src/assets/May 3rd 2023/J16A0608.jpg',
      '/src/assets/May 3rd 2023/J16A0601.jpg', 
      '/src/assets/May 3rd 2023/J16A0589.jpg',
      '/src/assets/May 3rd 2023/J16A0582.jpg',
      '/src/assets/May 3rd 2023/J16A0574.jpg',
      '/src/assets/May 3rd 2023/J16A0567.jpg',
      '/src/assets/May 3rd 2023/J16A0534.jpg',
      '/src/assets/May 3rd 2023/J16A0521.jpg',
      '/src/assets/May 3rd 2023/J16A0492.jpg',
      '/src/assets/May 3rd 2023/J16A0664.jpg'
    ],
    estate: [
     '/src/assets/June 8th 2023/J16A9149.jpg',
     '/src/assets/June 8th 2023/J16A9155.jpg',
     '/src/assets/June 8th 2023/J16A9159.jpg',
     '/src/assets/June 8th 2023/J16A9160.jpg',
     '/src/assets/June 8th 2023/J16A9162.jpg',
     '/src/assets/June 8th 2023/J16A9163.jpg',
     '/src/assets/June 8th 2023/J16A9166.jpg',
     '/src/assets/June 8th 2023/J16A9364.jpg',
     '/src/assets/June 8th 2023/J16A9363.jpg',
     '/src/assets/June 8th 2023/J16A9360.jpg',
     '/src/assets/June 8th 2023/J16A9356.jpg',
     '/src/assets/June 8th 2023/J16A9355.jpg',
     '/src/assets/June 8th 2023/J16A9343.jpg',
     '/src/assets/June 8th 2023/J16A9337.jpg',
     '/src/assets/June 8th 2023/J16A9335.jpg',
     '/src/assets/June 8th 2023/J16A9331.jpg',
     '/src/assets/June 8th 2023/J16A9325.jpg',
     '/src/assets/June 8th 2023/J16A9323.jpg',
     '/src/assets/June 8th 2023/J16A9319.jpg',
     '/src/assets/June 8th 2023/J16A9315.jpg',
     '/src/assets/June 8th 2023/J16A9307.jpg',
     '/src/assets/June 8th 2023/J16A9306.jpg',
     '/src/assets/June 8th 2023/J16A9284.jpg',
     '/src/assets/June 8th 2023/J16A9281.jpg',
     '/src/assets/June 8th 2023/J16A9251.jpg',
     '/src/assets/June 8th 2023/J16A9245.jpg',
     '/src/assets/June 8th 2023/J16A9240.jpg',
     '/src/assets/June 8th 2023/J16A9236.jpg',
     '/src/assets/June 8th 2023/J16A9234.jpg',
     '/src/assets/June 8th 2023/J16A9230.jpg',
     '/src/assets/June 8th 2023/J16A9228.jpg',
     '/src/assets/June 8th 2023/J16A9227.jpg',
     '/src/assets/June 8th 2023/J16A9225.jpg',
     '/src/assets/June 8th 2023/J16A9222.jpg',
     '/src/assets/June 8th 2023/J16A9201.jpg',
     '/src/assets/June 8th 2023/J16A9192.jpg',
     '/src/assets/June 8th 2023/J16A9188.jpg',
     '/src/assets/June 8th 2023/J16A9179.jpg',
     '/src/assets/June 8th 2023/J16A9173.jpg'
    ],
    land: [
        '/src/assets/project/Project 3.jpg',
        '/src/assets/project/Project 4.jpg',
        '/src/assets/project/Project 6.jpg',
        '/src/assets/project/Project 7.jpg',
        '/src/assets/project/project 8.jpg',
        '/src/assets/project/project 9.jpg',
        '/src/assets/project/project 10.jpg',
        '/src/assets/project/project 11.jpg',
        '/src/assets/project/Project1.jpg',
        '/src/assets/project/Project2.jpg',
        '/src/assets/project/Project4.jpg',
        '/src/assets/project/Project5.jpg'
    ],
    apartment : [
        '/src/assets/May 30 2023/J16A1217.jpg',
        '/src/assets/May 30 2023/J16A1219.jpg',
        '/src/assets/May 30 2023/J16A1221.jpg',
        '/src/assets/May 30 2023/J16A1222.jpg',
        '/src/assets/May 30 2023/J16A1225.jpg',
        '/src/assets/May 30 2023/J16A1228.jpg',
        '/src/assets/May 30 2023/J16A1230.jpg',
        '/src/assets/May 30 2023/J16A1232.jpg',
        'src/assets/May 30 2023/J16A1240.jpg',
        'src/assets/May 30 2023/J16A1241.jpg',
        'src/assets/May 30 2023/J16A1244.jpg',
        'src/assets/May 30 2023/J16A1249.jpg',
        'src/assets/May 30 2023/J16A1252.jpg',
        'src/assets/May 30 2023/J16A1253.jpg',
        'src/assets/May 30 2023/J16A1256.jpg',
        'src/assets/May 30 2023/J16A1257.jpg',
        'src/assets/May 30 2023/J16A1260.jpg',
        'src/assets/May 30 2023/J16A1268.jpg',
        'src/assets/May 30 2023/J16A1271.jpg',
        'src/assets/May 30 2023/J16A1274.jpg',
        'src/assets/May 30 2023/J16A1276.jpg',
        'src/assets/May 30 2023/J16A1280.jpg'
    ],
    
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex < imageCategories[activeCategory].length - 1 ? prevIndex + 1 : 0));
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : imageCategories[activeCategory].length - 1));
  };

  return (
    <div className="container mx-auto p-4">
      {/* Category cards with image carousels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.keys(imageCategories).map((category, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer" onClick={() => handleCategoryClick(category)}>
            <div className="carousel relative w-full h-64 overflow-hidden">
              {imageCategories[category].slice(0, 4).map((image, index) => (
                <img key={index} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-linear ${index === 0 ? 'opacity-100' : 'opacity-0'}`} src={image} alt={`${category} project`} onClick={() => handleImageClick(index)} />
              ))}
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">{category}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal for selected image */}
      {selectedImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="relative max-w-screen-lg w-full h-3/4">
            <img src={imageCategories[activeCategory][selectedImageIndex]} alt="Selected image" className="w-full h-full object-contain" />
            <button onClick={handleCloseModal} className="absolute top-0 right-0 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button onClick={handlePrevImage} className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={handleNextImage} className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
