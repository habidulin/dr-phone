"use client";
import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ServiceModal from '../components/ServiceModal';

interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  images: string[];
  icon: string;
}

export default function Page() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openServiceModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <Header />
      <main className="pt-16">
        <HeroSection />
        <ServicesSection onServiceClick={openServiceModal} />
        <AboutSection />
        <FeaturesSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Service Modal */}
      {selectedService && (
        <ServiceModal 
          service={selectedService}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </>
  );
}
