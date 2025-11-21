"use client";
import { useEffect, useState } from 'react';

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
    <header className={`bg-white/90 backdrop-blur-md text-gray-800 py-4 px-6 fixed w-full z-50 transition-transform duration-300 border-b border-gray-200 ${
      isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-xl">📱</div>
          <div className="font-bold text-lg">Dr. Phone</div>
        </div>
        <a
          href="tel:+4912345671221"
          className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition font-medium text-sm shadow"
        >
          📞 +49 123 4567 1221
        </a>
      </div>
    </header>
  );
}