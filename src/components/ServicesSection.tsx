"use client";

import servicesData from '../data/services.json';
import { Smartphone, Battery, Camera, Shield, PcCase } from 'lucide-react';

interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  images: string[];
  icon: string;
}

interface ServicesSectionProps {
  onServiceClick: (service: Service) => void;
}

// Маппинг иконок к услугам
const serviceIcons = {
  'Displaytausch': Smartphone,
  'Akkutausch': Battery,
  'Kameratausch': Camera,
  'Panzerglas': Shield,
  'Handyhülle': PcCase
};

export default function ServicesSection({ onServiceClick }: ServicesSectionProps) {
  return (
    <section className="py-14">
      <div className="container mx-auto px-3">
        
        {/* Заголовок слева */}
        <div className="max-w-6xl mx-auto mb-8">
          <h2 className="text-2xl font-bold">Unsere Services 🛠</h2>
        </div>

        {/* Сетка услуг */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {servicesData.services.map((service) => {
              const IconComponent = serviceIcons[service.name as keyof typeof serviceIcons];
              
              return (
                <div 
                  key={service.id}
                  className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group hover:transform hover:-translate-y-1"
                  onClick={() => onServiceClick(service)}
                >
                  
                  {/* Иконка услуги */}
                  <div className="h-32 bg-blue-50 flex items-center justify-center border-b group-hover:bg-blue-100 transition-colors">
                    {IconComponent && (
                      <IconComponent 
                        size={54} 
                        className="text-blue-600 group-hover:text-blue-700 group-hover:scale-110 transition-all duration-300" 
                      />
                    )}
                  </div>

                  {/* Информация об услуге */}
                  <div className="p-2 text-center">
                    <div className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-sm leading-tight">
                      {service.name}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}