import React, { useState } from 'react';

const Section = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const imageCategories = {
        block5: [
            '/Sectionalplans/sect.jpg',
            '/Sectionalplans/sect2.jpg',
            '/Sectionalplans/sect plan3.png',
            '/Sectionalplans/sect paln4.png',
            '/Sectionalplans/sect plan5.png'
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-28">
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

export default Section;



