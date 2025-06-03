"use client";

import Image from 'next/legacy/image';
import { useEffect } from 'react';
import { initSmoothScroll } from './smoothScroll';

// Add interface for component props
interface LandingProps {
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}

export default function Landing({ setCurrentView }: LandingProps) {
  const currentYear = new Date().getFullYear();
  
  // Initialize smooth scrolling after component mounts
  useEffect(() => {
    initSmoothScroll();
  }, []);
  
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section id="home" className="w-full bg-[#0d1117] text-white min-h-[80vh] flex items-center px-4 sm:px-8 lg:px-12 py-20 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-screen-xl w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-16">
            <div className="md:w-3/5 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                The right guidance, for the right internship.
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                Internship hunting doesn't need to be overwhelming. From resumes to interviews and everything in between — we're building a space where real Malaysian students share honest advice to help you land the right opportunity.
              </p>
              <p className="text-base md:text-lg text-gray-400 italic">
                No fluff. No marketing talk. Just peer-to-peer support, the way it should be.
              </p>
            </div>            <div className="md:w-2/5 w-full mt-8 md:mt-0">
              <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-lg shadow-xl">
                <Image 
                  src="/assets/image.jpg"
                  alt="Students preparing for internships"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-gray-900/80 to-transparent">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 px-16 bg-gray-800 text-gray-200 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-orange-400 mb-6">Our Philosophy</h2>

          <p className="text-xl leading-relaxed mb-4">
            University is more than just exams and assignments—it&apos;s a journey filled with sleepless nights, endless
            deadlines, and the occasional &quot;I can&apos;t do this anymore.&quot; Yet, despite the grind, it&apos;s also the
            foundation for what&apos;s next: the real world.
          </p>

          <p className="text-xl leading-relaxed mb-4">
            At <span className="text-orange-400 font-semibold">InternshipLah</span>, we understand the anxiety that
            comes with preparing for your first internship. The questions, the uncertainties, the fear of not
            measuring up—we&apos;ve been there. That&apos;s why our mission is simple: to bridge the gap between university
            life and the professional world with honest, practical, and experience-driven advice.
          </p>

          <p className="text-xl leading-relaxed">
            Whether you&apos;re hustling to polish your resume, practicing for interviews, or just trying to figure out
            where to start, we&apos;ve got you covered. Here, you&apos;ll find real stories from students who made it,
            step-by-step guides, and all the insider tips you need to land that first opportunity.
          </p>
        </div>
      </section>

      {/* General Advice Preview */}
      <section id="advice" className="py-24 px-16 bg-gray-900 text-gray-200 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-blue-400 mb-6">General Advice</h2>

          <p className="text-xl leading-relaxed mb-4">
            Starting your internship journey can be overwhelming—applications, resumes, interviews—it&apos;s a lot to
            take in. But you don&apos;t have to go through it alone.
          </p>

          <p className="text-xl leading-relaxed mb-4">
            Our collection of tried-and-tested tips is designed to help you every step of the way. Learn how to
            craft the perfect resume, ace your interviews, and navigate workplace expectations like a pro.
          </p>

          <p className="text-xl leading-relaxed mb-8">
            From finding the right opportunities to mastering the application process, we&apos;ve got you covered.
            Discover what it takes to stand out and secure that dream internship.
          </p>

          {/* Changed from Link to button */}
          <button 
            onClick={() => {
              setCurrentView('general-advice');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            className="bg-orange-500 text-white text-lg font-semibold py-3 px-6 rounded-md hover:bg-orange-600 transition"
          >
            Explore More →
          </button>
        </div>
      </section>      {/* Specific Advice Preview */}
      <section id="specific" className="py-24 px-8 md:px-16 bg-gray-900 text-gray-200 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-orange-400 mb-12 text-center">Specific Advice</h2>
          
          {/* Technical Fields */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 border-b border-gray-700 pb-2">Technical Fields</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Computer Science */}
              <div className="bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col h-full">
                <div className="relative w-full h-48">
                  <Image 
                    src="/assets/fsktm.jpg" 
                    alt="Computer Science" 
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800 opacity-40"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-blue-400 mb-3">Computer Science</h3>
                  <p className="text-lg mb-6 flex-grow">Navigate the fast-paced world of technology internships with essential tips
                    on coding interviews, technical assessments, and project portfolios.</p>
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={() => {
                        setCurrentView('cs-details');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }} 
                      className="bg-blue-600 text-white py-2 px-5 rounded-md hover:bg-blue-700 transition flex items-center group"
                    >
                      Learn More 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                    <span className="text-blue-300 text-sm">Popular Choice</span>
                  </div>
                </div>
              </div>

              {/* Engineering */}
              <div className="bg-slate-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col h-full">
                <div className="relative w-full h-48">
                  <Image 
                    src="/assets/engine.jpg" 
                    alt="Engineering" 
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-700 opacity-40"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-blue-400 mb-3">Engineering</h3>
                  <p className="text-lg mb-6 flex-grow">Get practical advice for engineering internships, from technical tests to
                    hands-on project experiences and teamwork strategies.</p>
                  <button 
                    onClick={() => {
                      setCurrentView('engineering');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }} 
                    className="bg-blue-600 text-white py-2 px-5 rounded-md hover:bg-blue-700 transition flex items-center group mt-auto"
                  >
                    Learn More 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Business & Legal Fields */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 border-b border-gray-700 pb-2">Business & Legal Fields</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Business & Finance */}
              <div className="bg-slate-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col h-full">
                <div className="relative w-full h-48">
                  <Image 
                    src="/assets/finance.jpg" 
                    alt="Business & Finance" 
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-700 opacity-40"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-blue-400 mb-3">Business & Finance</h3>
                  <p className="text-lg mb-6 flex-grow">Discover how to master the art of networking, ace corporate interviews, and
                    excel in finance and business-related internships.</p>
                  <button 
                    onClick={() => {
                      setCurrentView('business-finance');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }} 
                    className="bg-blue-600 text-white py-2 px-5 rounded-md hover:bg-blue-700 transition flex items-center group mt-auto"
                  >
                    Learn More 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Law */}
              <div className="bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col h-full">
                <div className="relative w-full h-48">
                  <Image 
                    src="/assets/law.jpg" 
                    alt="Law" 
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800 opacity-40"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-blue-400 mb-3">Law</h3>
                  <p className="text-lg mb-6 flex-grow">Understand the requirements for law internships, from legal writing to
                    courtroom exposure, and learn how to stand out in the legal field.</p>
                  <button 
                    onClick={() => {
                      setCurrentView('law-internship');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }} 
                    className="bg-blue-600 text-white py-2 px-5 rounded-md hover:bg-blue-700 transition flex items-center group mt-auto"
                  >
                    Learn More 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 px-16 bg-gray-800 text-gray-200 scroll-mt-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-orange-400 mb-6">About Us</h2>

          <p className="text-xl leading-relaxed mb-8">
            We are a group of passionate students from <span className="text-blue-400 font-semibold">University of
              Malaya</span> who believe in the power of knowledge-sharing. We created <span
                className="text-orange-400 font-semibold">InternshipLah</span> with one goal in mind—to help fellow
            students navigate the complex and sometimes overwhelming process of landing an internship.
          </p>

          <p className="text-xl leading-relaxed mb-8">
            Our mission is to break down barriers, share real experiences, and provide honest, practical advice so
            you can step confidently into the professional world. Together, let&apos;s turn ambition into action and
            dreams into reality.
          </p>

          <button 
            onClick={() => {
              setCurrentView('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-orange-500 text-white text-lg font-semibold py-3 px-6 rounded-md hover:bg-orange-600 transition"
          >
            Find Out More →
          </button>
        </div>
      </section>

      {/* How to Contribute Section */}
      <section id="contribute" className="py-24 px-16 bg-gray-900 text-gray-200 scroll-mt-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-orange-400 mb-6">How to Contribute</h2>

          <p className="text-xl leading-relaxed mb-8">
            Want to help other students succeed? Share your internship experiences, application tips, and interview
            journeys with us. Your story can be the spark that inspires others to achieve their goals.
          </p>

          <p className="text-xl leading-relaxed mb-8">
            Whether you secured a role in tech, finance, law, engineering, or any other field, your unique
            perspective matters. Join our mission to make internship hunting transparent, honest, and accessible to
            all.
          </p>

          <button 
            onClick={() => {
              setCurrentView('contribute');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-orange-500 text-white text-lg font-semibold py-3 px-6 rounded-md hover:bg-orange-600 transition"
          >
            Explore More →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-center text-lg">
        <p>InternshipLah © {currentYear} - <a href="https://github.com/JohnnyRobs19/internshiplah"
          className="text-blue-400 hover:underline">Website</a> | <a href="https://github.com/JohnnyRobs19/InternshiplahWireframe"
            className="text-blue-400 hover:underline">WireFrame</a>
        </p>
      </footer>
    </div>
  );
}
