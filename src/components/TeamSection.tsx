"use client";

import servicesData from '../data/services.json';
import Image from 'next/image';

export default function TeamSection() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-3">
        
        <div className="max-w-6xl mx-auto mb-8">
          <h2 className="text-2xl font-bold">Unser Team 🧑🏻‍💻</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {servicesData.team.map((member, index) => (
            <div key={member.id} className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-shadow text-center">
              
              <div className="h-32 w-32 md:h-32 md:w-32 relative mx-auto">
                {index < 2 ? (
                  <Image
                    src={`/images/team${index + 1}.jpg`}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
                    <div className="text-gray-400 text-4xl">👤</div>
                  </div>
                )}
              </div>

              <div className="p-2">
                <div className="font-bold text-gray-800 mb-1">{member.name}</div>
                <div className="text-gray-600 text-sm">{member.position}</div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
