"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  return (
    <nav className="w-full flex flex-col py-6 px-4 bg-gray-800 sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-center mb-4">
        <Link href="/" className="text-4xl font-bold">
          <span className="text-blue-500">Internship</span><span className="text-orange-400">Lah</span>
        </Link>
      </div>
      <div className="flex justify-center space-x-8 md:space-x-16 text-lg">
        {isHomePage ? (
          <>
            <Link href="#advice" className="hover:text-blue-400 transition-colors duration-200 py-1">General Advice</Link>
            <Link href="#specific" className="hover:text-blue-400 transition-colors duration-200 py-1">Specific Advice</Link>
            <Link href="#about" className="hover:text-blue-400 transition-colors duration-200 py-1">About Us</Link>
            <Link href="#contribute" className="hover:text-blue-400 transition-colors duration-200 py-1">Contribute</Link>
          </>
        ) : (
          <>
            <Link href="/#advice" className="hover:text-blue-400 transition-colors duration-200 py-1">General Advice</Link>
            <Link href="/#specific" className="hover:text-blue-400 transition-colors duration-200 py-1">Specific Advice</Link>
            <Link href="/#about" className="hover:text-blue-400 transition-colors duration-200 py-1">About Us</Link>
            <Link href="/#contribute" className="hover:text-blue-400 transition-colors duration-200 py-1">Contribute</Link>
          </>
        )}
      </div>
    </nav>
  );
}
