import React from 'react';
import backstoryImage from '/src/assets/J16A0568.jpg';
import visionImage from '/src/assets/J16A0474.jpg'; 
import missionImage from '/src/assets/J16A0492.jpg'; 

const Company = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-wrap -mx-4 mb-8">
        {/* Backstory with Image */}
        <div className="w-full lg:w-1/2 px-4 mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-3xl font-semibold text-sky-500 mb-4">Our Story</h3>
            <p className="text-black">
            Wamalwa Surveyors was founded back in 2013 as a consulting firm by a dedicated team with the aim of providing up to date engineering designs and surveying techniques to the growing demands in the industry.
The firm has since grown into a larger team comprising of a consortium of consulting engineers and surveyors that work closely for the effective implementation of both complex and simple projects.
We have handled several projects around the country to the clients’ satisfaction. We continue to broaden our network to meet rising demands in the industry.
The company headquarter is based in Nairobi and have a branch in Mombasa.
We boast on timely and accurate delivery of reports to our clientele as we adapt the use of modern engineering and surveying equipments in all our projects. Our prices are competent and gentle to our clients.land surveying. 
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 flex justify-end mt-16">
          <img src={backstoryImage} alt="Our Story" className="rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="flex flex-wrap -mx-4">
        {/* Vision Card */}
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <img src={visionImage} alt="Our Vision" className="rounded-lg shadow-lg mb-4" />
            <h3 className="text-3xl font-semibold text-sky-500 mb-4">Our Vision</h3>
            <p className="text-black">
              To be the benchmark for quality and innovation in land surveying, providing accurate and reliable data for our clients.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="w-full lg:w-1/2 px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <img src={missionImage} alt="Our Mission" className="rounded-lg shadow-lg mb-4" />
            <h3 className="text-3xl font-semibold text-sky-500 mb-4">Our Mission</h3>
            <p className="text-black">
              To deliver exceptional service and insights that empower our clients to make informed decisions about their land and properties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;

