"use client";

import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import GeneralAdvice from "./components/GeneralAdvice/GeneralAdvice";
import AboutUs from "./components/AboutUs/AboutUs";
import Contribute from "./components/Contribute/Contribute";
import ComputerScience from "./components/ComputerScience/ComputerScience";
import Engineering from "./components/Engineering/Engineering";
import Business from "./components/Business/Business";

export default function Home() {
  const [currentView, setCurrentView] = useState("landing");

  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen flex flex-col">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      {currentView === "landing" && <Landing setCurrentView={setCurrentView} />}

      {currentView === "general-advice" && <GeneralAdvice />}
      
      {currentView === "about" && <AboutUs setCurrentView={setCurrentView} />}
        {currentView === "contribute" && <Contribute />}      {currentView === "cs-details" && <ComputerScience />}      {currentView === "engineering" && <Engineering />}

      {currentView === "business-finance" && <Business />}

      {/* Add more conditional sections as needed */}
      {/* For example: */}
      {/* {currentView === 'business-finance' && <BusinessFinance />} */}
      {/* {currentView === 'law-internship' && <LawInternship />} */}
    </div>
  );
}
