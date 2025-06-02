"use client";

import Image from 'next/legacy/image';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

interface AboutUsProps {
  setCurrentView?: React.Dispatch<React.SetStateAction<string>>;
}

export default function AboutUs({ setCurrentView }: AboutUsProps) {
  const teamMembers = [
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

  // Animation variants for Framer Motion
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const handleGetInTouch = () => {
    if (setCurrentView) {
      setCurrentView('contribute');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-blue-500 mb-8 text-center tracking-wide"
          variants={fadeIn}
        >
          About InternshipLah
        </motion.h1>
        
        <motion.div 
          className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 mb-16 shadow-xl border border-gray-700/50"
          variants={fadeIn}
        >
          <p className="text-lg md:text-xl mb-6 text-center leading-relaxed tracking-wide">
            We are a dedicated team of students from University of Malaya who, while not having gone through internship experiences ourselves yet, 
            have witnessed our peers navigate this challenging journey. Our mission is to create a platform that provides practical, 
            honest advice to help Malaysian students navigate the often overwhelming process of finding and securing meaningful internships.
          </p>
          
          <p className="text-lg md:text-xl mb-6 text-center leading-relaxed tracking-wide">
            InternshipLah was born from observing the struggles and successes of our fellow students during their internship hunts. 
            We believe that by collecting and sharing real experiences and actionable advice from those who have gone through it, 
            we can make this journey less intimidating and more accessible for everyone.
          </p>
          
          <p className="text-lg md:text-xl text-center leading-relaxed tracking-wide">
            Whether you're preparing your first resume, practicing for interviews, or deciding between offers,
            we're creating a community-driven resource to support students every step of the way.
          </p>
        </motion.div>
        
        {/* SVG Divider */}
        <div className="relative h-24 mb-12">
          <svg className="absolute w-full h-24 text-gray-800" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="fill-orange-400"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="fill-blue-500"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-gray-900"
            ></path>
          </svg>
        </div>
        
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-orange-400 mb-10 text-center tracking-wide"
          variants={fadeIn}
        >
          Meet Our Team
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:scale-[1.03] hover:ring-2 hover:ring-blue-500/50 group"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-full h-64">
                <Image 
                  src={member.image} 
                  alt={`${member.name}, ${member.role}`} 
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-blue-400 mb-1">{member.name}</h3>
                <p className="text-orange-300 mb-4 text-lg font-medium">{member.role}</p>
                <p className="text-gray-300 flex-grow leading-relaxed">{member.bio}</p>
                
                <div className="mt-5 text-sm text-gray-400">
                  <p className="mb-2 flex items-center">
                    <span className="text-blue-400 mr-2">
                      <MdEmail className="inline h-4 w-4" />
                    </span>
                    {member.email}
                  </p>
                </div>
                
                <div className="flex mt-4 space-x-4">
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 bg-gray-700/50 hover:bg-gray-700 p-2 rounded-full"
                    aria-label={`Email ${member.name}`}
                  >
                    <MdEmail className="w-5 h-5" />
                  </a>
                  
                  {member.github ? (
                    <a 
                      href={member.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 bg-gray-700/50 hover:bg-gray-700 p-2 rounded-full"
                      aria-label={`GitHub profile of ${member.name}`}
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  ) : (
                    <span className="text-gray-600 flex items-center gap-1 bg-gray-700/20 p-2 rounded-full cursor-not-allowed">
                      <FaGithub className="w-5 h-5" />
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-20 text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-6 tracking-wide">Join Our Mission</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto tracking-wide">
            Want to contribute to InternshipLah? We're always looking for students who want to share their internship experiences 
            and help others navigate their career journey.
          </p>
          <motion.button 
            className="bg-blue-600 text-white py-3 px-10 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetInTouch}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
