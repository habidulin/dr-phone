"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-black/50 backdrop-blur-md text-gray-800 py-2 px-2 fixed w-full z-50 transition-transform duration-300 ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* ЛОГО */}
        <div className="relative w-44 h-6 sm:w-59 sm:h-10">
          <Image
            src="/images/logo.png"
            alt="Dr. Phone Logo"
            fill
            className="object-contain"
          />
        </div>
        {/* ТЕЛЕФОН */}
        <a
          href="tel:+4915566780738"
          className="bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition font-medium text-sm sm:text-lg shadow whitespace-nowrap"
        >
          📞 +49 155 6678 0738
        </a>
      </div>
    </header>
  );
}