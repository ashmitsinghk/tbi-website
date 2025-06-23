"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white text-black shadow-lg border-black' : 'bg-transparent text-white border-white'} border-b-1 `}>
      <nav className="flex items-center justify-between">
        <div className={`flex items-center gap-4 p-8 ${scrolled ? 'border-black' : 'border-white'} border-r-1 `}>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={60}
            height={60}
            className={`w-40 ${scrolled ? 'invert' : ''}`}
          />
        </div>

        <div className="flex gap-16 text-lg p-8">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Programs</a>
          <a href="#" className="hover:underline">Insights</a>
          <a href="#" className="hover:underline">Events</a>
        </div>

        <a href="#" className={`mr-8 py-2 px-6 rounded-lg font-bold transition-colors duration-300 ${scrolled ? 'bg-black text-white hover:bg-gray-800' : 'bg-white/20 hover:bg-white/30'}`}>
          APPLY TO INCUBATOR
        </a>
      </nav>
    </header>
  );
};

export default Navbar; 