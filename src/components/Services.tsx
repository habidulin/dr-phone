"use client";

import servicesData from '../data/services.json';

export default function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {servicesData.services.map((service) => (
        <div 
          key={service.id}
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:transform hover:-translate-y-1"
        >
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{service.icon}</span>
              <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
            </div>
            
            <p className="text-gray-600 mb-4">{service.description}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Preis:</span>
                <span className="font-semibold text-blue-600">{service.price}</span>
              </div>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium">
              Termin buchen
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}