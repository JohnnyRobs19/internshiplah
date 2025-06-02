"use client";

import Image from 'next/legacy/image';

export default function AboutUs() {  const teamMembers = [
    {
      name: "Chiew Ching Yee",
      role: "Group Leader",
      bio: "First-year law student interested in technology-related legal matters. Contributes to UM JusTech's Branding Bureau and has earned recognition in writing and accounting competitions.",
      image: "/assets/Cy.jpg",
      email: "24068101@siswa.um.edu.my",
      github: ""
    },
    {
      name: "Jonathan Siew Zunxian",
      role: "Web Developer/UI/UX Designer",
      bio: "Second-year Computer Science student specializing in AI at UM. Vice Head of Technical Department at UM Computer Society and violinist in UM Symphony Orchestra. Experienced in developing websites and AI solutions through hackathons.",
      image: "/assets/Jon.jpg",
      email: "23004944@siswa.um.edu.my",
      github: "https://github.com/JohnnyRobs19"
    },
    {
      name: "Kee Kai Joon",
      role: "Content Creator",
      bio: "First-year Electrical Engineering student and executive committee member of Malaya Electrical Student Association. Experienced in multimedia roles with strong technical and communication skills in multiple languages.",
      image: "/assets/Kj.jpg",
      email: "23005904@siswa.um.edu.my",
      github: ""
    },
    {
      name: "Goh Xin Lin",
      role: "Content Creator",
      bio: "First-year Business Administration student researching business-related internships. Skilled in Microsoft applications and video editing with experience in accounting events and leadership roles.",
      image: "/assets/Goh.jpg",
      email: "24004807@siswa.um.edu.my",
      github: ""
    },
    {
      name: "Hii Sieh San",
      role: "Content Creator",
      bio: "First-year law student and Scenography member at KUAYUE. Recognized as Best Student of STPM 2023 in her district, with leadership experience, artistic talents, and national competition achievements.",
      image: "/assets/Hii.jpeg",
      email: "23120845@siswa.um.edu.my",
      github: ""
    }
  ];

  return (
    <div className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-500 mb-4 text-center">About InternshipLah</h1>
        
        <div className="bg-slate-800 rounded-lg p-8 mb-16">
          <p className="text-xl mb-6 text-center leading-relaxed">
            We are a dedicated team of students from University of Malaya who, while not having gone through internship experiences ourselves yet, 
            have witnessed our peers navigate this challenging journey. Our mission is to create a platform that provides practical, 
            honest advice to help Malaysian students navigate the often overwhelming process of finding and securing meaningful internships.
          </p>
          
          <p className="text-xl mb-6 text-center leading-relaxed">
            InternshipLah was born from observing the struggles and successes of our fellow students during their internship hunts. 
            We believe that by collecting and sharing real experiences and actionable advice from those who have gone through it, 
            we can make this journey less intimidating and more accessible for everyone.
          </p>
          
          <p className="text-xl text-center leading-relaxed">
            Whether you're preparing your first resume, practicing for interviews, or deciding between offers,
            we're creating a community-driven resource to support students every step of the way.
          </p>
        </div>
        
        <h2 className="text-3xl font-bold text-orange-400 mb-8 text-center">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:scale-105">
              <div className="relative w-full h-64">
                <Image 
                  src={member.image} 
                  alt={`${member.name}, ${member.role}`} 
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 opacity-60"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-blue-400 mb-1">{member.name}</h3>
                <p className="text-orange-300 mb-4 text-lg">{member.role}</p>
                <p className="text-gray-300 flex-grow">{member.bio}</p>
                
                <div className="mt-4 text-sm text-gray-400">
                  <p className="mb-1">
                    <span className="text-blue-400 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    {member.email}
                  </p>
                </div>
                
                <div className="flex mt-4 space-x-3">
                  <a href={`mailto:${member.email}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  {member.github ? (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-gray-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-orange-400 mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8">
            Want to contribute to InternshipLah? We're always looking for students who want to share their internship experiences 
            and help others navigate their career journey.
          </p>
          <button className="bg-blue-600 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-blue-700 transition">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}
