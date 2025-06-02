"use client";

import Image from 'next/legacy/image';

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Founder & CS Major",
      bio: "Final year student passionate about making internship hunting less intimidating. Interned at Google and several local startups.",
      image: "/assets/team-member-1.jpg"
    },
    {
      name: "Amir Bin Hassan",
      role: "Engineering Advisor",
      bio: "Mechanical engineering student with experience at Petronas. Loves breaking down complex technical interviews into actionable steps.",
      image: "/assets/team-member-2.jpg"
    },
    {
      name: "Li Wei Ting",
      role: "Finance Specialist",
      bio: "Banking & Finance major who secured internships at Maybank and CIMB. Helps students navigate the competitive financial sector.",
      image: "/assets/team-member-3.jpg"
    },
    {
      name: "Daniel Raj",
      role: "Legal Contributor",
      bio: "Law student with a background in legal tech. Passionate about helping fellow students find meaningful legal internships.",
      image: "/assets/team-member-4.jpg"
    },
    {
      name: "Priya Sharma",
      role: "Content Curator",
      bio: "Communications major with a knack for storytelling. Organizes student experiences and advice into accessible, practical content.",
      image: "/assets/team-member-5.jpg"
    }
  ];

  return (
    <div className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-500 mb-4 text-center">About InternshipLah</h1>
        
        <div className="bg-slate-800 rounded-lg p-8 mb-16">
          <p className="text-xl mb-6 text-center leading-relaxed">
            We are a dedicated team of students from University of Malaya who have been through the internship journey ourselves.
            Our mission is to provide practical, honest advice to help Malaysian students navigate the often overwhelming
            process of finding and securing meaningful internships.
          </p>
          
          <p className="text-xl mb-6 text-center leading-relaxed">
            InternshipLah was born from our own struggles and successes in the internship hunt. We believe that by sharing
            real experiences and actionable advice, we can make this journey less intimidating and more accessible for everyone.
          </p>
          
          <p className="text-xl text-center leading-relaxed">
            Whether you're preparing your first resume, practicing for interviews, or deciding between offers,
            we're here to support you every step of the way.
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
                
                <div className="flex mt-6 space-x-3">
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                    </svg>
                  </a>
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
