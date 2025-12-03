"use client";

import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.log('Autoplay failed:', error);
        }
      }
    };

    playVideo();
  }, []);

  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute z-0 w-full h-full bg-black"></div>
      
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute z-10 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        {/* Fallback если видео не загрузится */}
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="absolute z-20 inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-30 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Dr. Phone & PC Reparatur 
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
          Ihr Spezialist für Smartphone & PC Reparatur
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <div className="text-white text-2xl">↓</div>
      </div>
    </section>
  );
}