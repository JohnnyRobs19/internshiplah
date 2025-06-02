"use client";

import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';

export default function Contribute() {
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

  // Email list of team members
  const contactEmails = [
    {
      name: "Chiew Ching Yee",
      role: "Group Leader",
      email: "24068101@siswa.um.edu.my"
    },
    {
      name: "Jonathan Siew Zunxian",
      role: "Web Developer/UI/UX Designer",
      email: "23004944@siswa.um.edu.my"
    },
    {
      name: "Kee Kai Joon",
      role: "Content Creator",
      email: "23005904@siswa.um.edu.my"
    },
    {
      name: "Goh Xin Lin",
      role: "Content Creator",
      email: "24004807@siswa.um.edu.my"
    },
    {
      name: "Hii Sieh San",
      role: "Content Creator",
      email: "23120845@siswa.um.edu.my"
    }
  ];

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
          How to Contribute
        </motion.h1>
        
        <motion.div 
          className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 mb-16 shadow-xl border border-gray-700/50"
          variants={fadeIn}
        >
          <p className="text-lg md:text-xl mb-6 text-center leading-relaxed tracking-wide">
            Want to help other students succeed? Share your internship experiences, application tips, and interview
            journeys with us. Your story can be the spark that inspires others to achieve their goals.
          </p>
          
          <p className="text-lg md:text-xl mb-6 text-center leading-relaxed tracking-wide">
            Whether you secured a role in tech, finance, law, engineering, or any other field, your unique
            perspective matters. Join our mission to make internship hunting transparent, honest, and accessible to all.
          </p>
          
          <p className="text-lg md:text-xl text-center leading-relaxed tracking-wide">
            You don't need to be a genius with a glowing resume or an extraordinary sportsperson with a collection of medals. 
            Here at <span className="text-orange-400 font-semibold">InternshipLah</span>, we are proving that ordinary students 
            like you and me can land internships at top companies, make meaningful contributions, and gain incredible experiences.
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
        
        <motion.div 
          className="max-w-4xl mx-auto bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700/50"
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-6 text-center tracking-wide">Share Your Journey</h2>
          
          <p className="text-lg mb-6 leading-relaxed">
            "I share the same vision as <span className="text-orange-400 font-semibold">InternshipLah</span>. As a student, how can I help?"
          </p>
          
          <p className="text-lg mb-6 leading-relaxed">
            Share with us your internship application journey—how you tackled each challenging stage, how you crafted your resume to perfection, 
            and how you prepared for those daunting interviews. Your story might just be the guidance and inspiration that another student needs 
            to pursue their dream internship.
          </p>
          
          <p className="text-lg mb-6 leading-relaxed">
            Yes, you might cringe thinking back on the process, but your insights can be the difference for someone who is currently in your shoes. 
            You made it—now, help them make it too.
          </p>
          
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Contact Our Team</h3>
            <p className="text-lg mb-5 leading-relaxed">
              Do email any of our pioneers to share your journey and inspire others:
            </p>
            
            <motion.ul 
              className="space-y-4 mb-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {contactEmails.map((contact, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700/70 transition-colors"
                  variants={fadeIn}
                >
                  <div className="text-blue-400 mr-3">
                    <MdEmail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">{contact.name} - {contact.role}</p>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="text-orange-400 hover:underline hover:text-orange-300 transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          
          <motion.div 
            className="text-center mt-12"
            variants={fadeIn}
          >
            <p className="text-xl mb-8 leading-relaxed font-medium">
              Be a part of the change—help us inspire the next wave of Malaysian interns!
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}