import React from 'react';
import backgroundImage from '/src/assets/J16A9154.jpg';

const teamMembers = [
  { name: 'Noah W Wamalwa', title: 'Director' },
  { name: 'Gilbert Ayoo', title: 'Senior Surveyor' },
  { name: 'Dorcas Nangeke', title: 'Finance Director' },
  { name: 'Boris Andika', title: 'Assistant Surveyor' },
  { name: 'Victor Atwoli', title: 'Assistant Surveyor' },
  { name: 'Morris Kavu', title: 'Assistant Surveyor' },
  { name: 'Kennedy Obara', title: 'Assistant Surveyor' },
  { name: 'Sharon Ndichu', title: 'Assistant Surveyor' },
  { name: 'Patience Wairimu Mureithi', title: 'Senior Valuer, Property & Asset Management' },
];

const Team = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img src={backgroundImage} alt="Team Background" className="absolute inset-0 w-full h-full object-cover" />

      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative">
        <h2 className="text-4xl font-extrabold text-center text-sky-950 underline mt-14 mb-8 animate-bounce">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white bg-opacity-60 rounded-lg shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-transform">
              <h3 className="text-xl font-semibold text-black hover:text-indigo-600 transition-colors">{member.name}</h3>
              <p className="text-gray-600">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

