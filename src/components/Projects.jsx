import React, { useState, useEffect } from 'react';
import backgroundImage1 from "../assets/June 8th 2023/J16A9159.jpg";
import backgroundImage2 from "../assets/June 8th 2023/J16A9163.jpg";
import backgroundImage3 from "../assets/May 30 2023/J16A1241.jpg";




const projects = {
  TopographicalSurvey: [
    { description: '24km Roads B 9', location: 'Mandera', client: 'Engiconsult Ltd', stage: 'Complete' },
    { description: '1 Acre parcel', location: 'Kiambu County', client: 'Dick Omondi', stage: 'Complete' },
    { description: 'Customer creation', location: 'Coast region', client: 'KPLC', stage: 'Ongoing' },
    { description: 'Route Survey', location: 'Coast region', client: 'KPLC', stage: 'Ongoing' },
    { description: 'Mapping Customers', location: 'Coast region', client: 'KPLC', stage: 'Ongoing' },
    { description: 'Route Survey', location: 'Rift Valley & Eastern', client: 'REA', stage: 'Ongoing' },
    { description: 'Mapping Customers', location: 'Rift Valley & Eastern', client: 'REA', stage: 'Ongoing' },
    { description: '30km Road C107', location: 'Kilifi County', client: 'Uniconsult Eng. Ltd', stage: 'Complete' },
    { description: 'Mapping of coffee farms', location: 'Nyeri', client: 'KPCU', stage: 'Complete' },
    { description: 'Alibizzia road 5km', location: 'Thika', client: 'Associated Construction', stage: 'Complete' }
  ],
  CadastralSurvey: [
    { description: '1000 acres boundary definition', location: 'Webuye', client: 'Webco Ltd', stage: 'Ongoing' },
    { description: 'Beacon re-establishment', location: 'Karen', client: 'Karanja', stage: 'Complete' },
    { description: 'Beacon search', location: 'Nasra Gardens', client: 'Shimoli', stage: 'Complete' },
    { description: 'Land subdivision', location: 'Ilkisumet 429', client: 'Grace & Kibe', stage: 'Ongoing' },
    { description: 'Land subdivision', location: 'Koma Rock', client: 'Kevin Kasonog', stage: 'Complete' },
    { description: 'Land subdivision', location: 'Kajiado/Kaputiei North/9232', client: 'LA Consult', stage: 'Complete' },
    { description: 'Boundary definition', location: 'LR NO 209/11613 & 209/6705', client: 'Strathmore University', stage: 'Complete' }
  ],
  DesignConstructionSupervison: [
    { description: 'Construction of Lomut Bridge and Approach Roads Along Marigat - Marich Pass (B17) Road', date: 'KENHA/HP&D/RD/2499/2018', client: 'KeNHA' },
    { description: 'Construction of Wei Wei Bridge and Approach Roads Along Marigat - Marich Pass (B17) Road', date: 'KENHA/HP&D/RD/2545/2018', client: 'KeNHA' },
    { description: 'Construction Works for the Improvement of Flood Mitigation Structures on Lower Nzoia River - 34km', date: '2018', client: 'National Irrigation Board' },
    { description: 'Upgrading to Bitumen Standard & Performance Based Routine Maintenance of Kamuongo-Kandwia-Gai-Kyuso-Twimyua Road 30km', date: '2017', client: 'Kenya Rural Roads Authority' },
    { description: 'Kirubia (off B6) – Karurini – Mariani – Kaanwa – Chuka University (B6) 20km', date: '2017', client: 'Kenya Rural Roads Authority' },
    { description: 'Topographical survey for Design and Construction & Supervision of Proposed Infrustracture Services For Phase II of Athi River Export Processing Zone.', date: '2017', client: 'EPZA' },
    { description: 'Canyon Bistro – Regional Police HQ – Karurina - Kivwee – Iveche (B6) 18.2 km', date: '2017', client: 'Kenya Rural Roads Authority' },
    { description: 'Kirege (off B6) – Nthirani Coffee Factory – Chuka CBD (B6) 9km', date: '2017', client: 'Kenya Rural Roads Authority' },
    { description: 'Chuka Girls – Kaigiro – Gacienkure – Tuyu – Airstrip Road 3km', date: '2017', client: 'Kenya Rural Roads Authority' },
    { description: 'Demarcation of 600ha Parcel of Tana and Athi River Development Authority (TARDA) in Garsen for Leasing Purposes', date: '2017', client: 'Griffon Energy Limited' },
    { description: 'Improvement to Bitumen Standard and Maiantenance of Kwa Vonza – Kenyatta University – Mikuyuni Primary _ South Eastern Kenya University Road (LVSR) 18km', date: '2017', client: 'Kenya Rural Roads Authority' },
    { description: 'Uchumi – Mini Inn-Kiambuthi-Uchumi (B7) 2.5 km', date: '2017', client: 'Kenya Rural Roads Authority' },
    { description: 'Construction of Gravel Roads and Drainage Works for Proposed Albizzia Downs Development Along Thika – Mang’u Road in Thika', date: '2016', client: 'Albizzia Downs Estate Limited' }
  ]
};


const backgroundImages = [
    backgroundImage1,
    backgroundImage2,
    backgroundImage3,
  ];

const Project = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [showProjects, setShowProjects] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    // Cycle through background images every 5 seconds
    const intervalId = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Changed from 6000000 to 5000 for 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);
  
    const toggleCategory = (category) => {
      setActiveCategory(category);
      setShowProjects(true);
    };
  
    const handleCloseModal = () => {
      setShowProjects(false);
    };
  
    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-fixed pt-16"
        style={{
          backgroundImage: `url(${backgroundImages[backgroundIndex]})`,
          backgroundSize: 'cover',
        }}
      >
        {/* Content container */}
        <div className={`container mx-auto px-4 py-8 z-10 relative ${showProjects ? 'hidden' : ''}`}>
          <div className="flex flex-wrap items-center justify-center">
            {Object.keys(projects).map((category) => (
              <button
                key={category}
                className="m-4 bg-white text-black font-bold rounded-lg px-6 py-4 cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition ease-in-out duration-300 text-2xl"
                onClick={() => toggleCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
  
        {/* Projects Modal */}
        {showProjects && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white w-2/3 h-3/4 p-4 rounded-lg shadow-lg overflow-y-auto relative">
              <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={handleCloseModal}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-xl font-bold mb-4">{activeCategory}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects[activeCategory].map((project, index) => (
                  <div key={index} className={`p-4 rounded-lg shadow-lg ${project.stage === 'Complete' ? 'bg-green-100' : 'bg-amber-100'} hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1`}>
                    <h3 className="font-bold text-lg mb-2">{project.description}</h3>
                    <p className="text-gray-800"><strong>Location:</strong> {project.location || 'Location not specified'}</p>
                    <p className="text-gray-800"><strong>Client:</strong> {project.client}</p>
                    <p className={`text-gray-800 font-semibold ${project.stage === 'Complete' ? 'text-green-700' : 'text-amber-700'}`}><strong>Stage:</strong> {project.stage || 'Stage not specified'}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Project;