"use client";

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-3">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-1">

        {/* ВЕРХНИЙ РЯД — ЛОГО И КОНТАКТЫ */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* ЛОГО */}
          <div className="flex items-center gap-2">
            <div className="relative w-48 h-16 sm:w-56 sm:h-20">
              <Image
                src="/images/logo.png"
                alt="Dr. Phone Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* КОНТАКТЫ */}
          <div className="font-medium text-center md:text-right">
            <div className="text-lg">+49 155 6678 0738</div>
            <a
              href="mailto:vo-service2020@outlook.de"
              className="text-gray-300 hover:text-white text-sm"
            >
              vo-service2020@outlook.de
            </a>
          </div>
        </div>

        {/* НИЖНИЙ РЯД — ЮРИДИЧЕСКИЙ ТЕКСТ */}
        <div className="text-gray-400 text-sm text-center mt-1">
          © 2025 Dr. Phone Potsdam  
          <span className="mx-2">•</span>
          <a href="#" className="hover:text-white">Impressum</a>
          <span className="mx-2">•</span>
          <a href="#" className="hover:text-white">Datenschutz</a>
        </div>

      </div>
    </footer>
  );
}
