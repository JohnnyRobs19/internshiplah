"use client";

import { ReactNode } from 'react';

interface NavbarProps {
  currentView: string;
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}

export default function Navbar({ currentView, setCurrentView }: NavbarProps) {
  const handleNavigation = (sectionId: string): void => {
    if (currentView !== 'landing') {
      setCurrentView('landing');
      // Add a small delay to ensure the landing page is rendered before scrolling
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full flex flex-col py-6 px-4 bg-gray-800 sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-center mb-4">
        <button 
          onClick={() => {
            setCurrentView('landing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-4xl font-bold"
        >
          <span className="text-blue-500">Internship</span>
          <span className="text-orange-400">Lah</span>
        </button>
      </div>
      <div className="flex justify-center space-x-8 md:space-x-16 text-lg">
        {currentView === 'landing' ? (
          <>
            <button
              onClick={() => handleNavigation('philosophy')}
              className="hover:text-blue-400 transition-colors duration-200 py-1"
            >
              Our Philosophy
            </button>
            <button
              onClick={() => handleNavigation('advice')}
              className="hover:text-blue-400 transition-colors duration-200 py-1"
            >
              General Advice
            </button>
            <button
              onClick={() => handleNavigation('specific')}
              className="hover:text-blue-400 transition-colors duration-200 py-1"
            >
              Specific Advice
            </button>
            <button
              onClick={() => handleNavigation('about')}
              className="hover:text-blue-400 transition-colors duration-200 py-1"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavigation('contribute')}
              className="hover:text-blue-400 transition-colors duration-200 py-1"
            >
              Contribute
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                setCurrentView('landing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-blue-400 transition-colors duration-200 py-1"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('philosophy')}
              className="hover:text-blue-400 transition-colors duration-200 py-1"
            >
              Our Philosophy
            </button>
            <button
              onClick={() => handleNavigation('specific')}
              className="hover:text-blue-400 transition-colors duration-200 py-1"
            >
              Specific Advice
            </button>
            <button
              onClick={() => handleNavigation('about')}
              className="hover:text-blue-400 transition-colors duration-200 py-1"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavigation('contribute')}
              className="hover:text-blue-400 transition-colors duration-200 py-1"
            >
              Contribute
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
