"use client";
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ServiceOrderForm from './ServiceOrderForm';
import Image from 'next/image';

// Тип для данных формы (должен совпадать с ServiceOrderForm)
interface FormData {
  name: string;
  vorname: string;
  email: string;
  phone: string;
  description: string;
}

interface ServiceModalProps {
  service: {
    id: number;
    name: string;
    description: string;
    price: string;
    images: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const serviceFeatures = [
    {
      icon: "📅",
      title: "Dauer",
      description: "30-60 Minuten"
    },
    {
      icon: "🛠️", 
      title: "Ersatzteile",
      description: "Hochwertig"
    },
    {
      icon: "🏪",
      title: "Service", 
      description: "Vor Ort"
    },
    {
      icon: "🛡️",
      title: "Garantie",
      description: "3 Monate"
    },
    {
      icon: "💶",
      title: "Preise",
      description: "Transparent"
    }
  ];

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === service.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? service.images.length - 1 : prev - 1
    );
  };

  const handleFormSubmit = (formData: FormData) => {
    console.log('Form data received:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center p-2 border-b">
          <div className="text-center flex-1">
            <h2 className="text-2xl font-bold text-gray-800">{service.name}</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>

        {!showForm ? (
          /* Service Details */
          <div className="p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Images Section */}
              <div className="space-y-4">
                {/* Main Image */}
                <div className="relative bg-gray-100 rounded-2xl h-80 flex items-center justify-center overflow-hidden">
                  <Image 
                    src={service.images[currentImageIndex]} 
                    alt={service.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Navigation Arrows */}
                  {service.images.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-3 shadow-lg border border-gray-200 hover:bg-white transition z-10"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-3 shadow-lg border border-gray-200 hover:bg-white transition z-10"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}
                </div>
                
                {/* Thumbnails */}
                <div className="flex gap-3 justify-center">
                  {service.images.map((image, index) => (
                    <div 
                      key={index}
                      className={`relative w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer border-2 overflow-hidden ${
                        index === currentImageIndex ? 'border-blue-500' : 'border-gray-200'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <Image 
                        src={image} 
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Details Section */}
              <div className="space-y-4">
                <div className="space-y-2 text-gray-600 leading-relaxed">
                  <p>
                    Professionelle Reparatur mit hochwertigen Ersatzteilen 
                    und 3 Monaten Garantie.
                  </p>
                  <p>
                    Unsere zertifizierten Techniker führen die Reparatur sorgfältig durch 
                    und achten auf jedes Detail.
                  </p>
                  <div className="border-t border-gray-200 my-1"></div>
                  <div className="grid grid-cols-5 gap-1">
                    {serviceFeatures.map((feature, index) => (
                      <div 
                        key={index}
                        className="text-center group"
                      >
                        <div className="text-xl mb-1 group-hover:scale-110 transition-transform">
                          {feature.icon}
                        </div>
                        <div className="text-xs font-medium text-gray-700 mb-1">
                          {feature.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {feature.description}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 my-1"></div>

                </div>

                <div className="text-green-800 font-bold text-2xl text-left">
                  {service.price}
                </div>
      
                <button 
                  onClick={() => setShowForm(true)}
                  className="w-full bg-blue-600 text-white py-4 rounded-2xl hover:bg-blue-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
                >
                  Jetzt Termin buchen
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Order Form Component */
          <ServiceOrderForm 
            serviceName={service.name}
            onBack={() => setShowForm(false)}
            onSubmit={handleFormSubmit}
          />
        )}
      </div>
    </div>
  );
}