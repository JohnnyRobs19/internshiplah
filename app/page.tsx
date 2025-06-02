"use client";

import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import GeneralAdvice from "./components/GeneralAdvice/GeneralAdvice";

export default function Home() {
  const [currentView, setCurrentView] = useState("landing");

  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen flex flex-col">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      {currentView === "landing" ? (
        <Landing setCurrentView={setCurrentView} />
      ) : currentView === "general-advice" ? (
        <GeneralAdvice />
      ) : null}
    </div>
  );
}
