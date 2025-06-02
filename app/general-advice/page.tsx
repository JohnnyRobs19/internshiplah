"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import GeneralAdvice from '../components/GeneralAdvice/GeneralAdvice';

export default function GeneralAdvicePage() {
  const [currentView, setCurrentView] = useState('general-advice');

  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen flex flex-col">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex-grow">
        <GeneralAdvice />
      </div>
    </div>
  );
}
