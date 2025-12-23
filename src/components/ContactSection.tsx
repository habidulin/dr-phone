"use client";

import servicesData from '../data/services.json';

export default function ContactSection() {
  const { companyInfo } = servicesData;
  
  const locations = [
    {
      id: 1,
      address: "Dr.Phone PC Reparatur Potsdam",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.780039879822!2d13.064234112310551!3d52.39253767191145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f561d2e1fb1d%3A0xea00c8e9f8c94eb5!2sDr.Phone%20PC%20Reparatur%20Potsdam!5e0!3m2!1sde!2sde!4v1766491741232!5m2!1sde!2sde",
      openingHours: {
        weekdays: "10:00 - 20:00",
        saturday: "10:00 - 20:00",
        sunday: "Geschlossen"
      }
    },
    {
      id: 2,
      address: "Dr.Phone PC Reparatur Werder",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.4082533421215!2d12.930867612308814!3d52.36301697190375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f325aad11b19%3A0x75dcf9abbe36bee8!2sDr.Phone%20PC%20Reparatur%20Werder!5e0!3m2!1sde!2sde!4v1766491711715!5m2!1sde!2sde",
      openingHours: {
        weekdays: "10:00 - 19:00",
        saturday: "10:00 - 18:00",
        sunday: "Geschlossen"
      }
    }
  ];

  return (
    <section id="contact" className="py-8 bg-white">
      <div className="container mx-auto px-1">
        
        {/* Заголовок слева */}
        <div className="max-w-6xl mx-auto mb-8">
          <h2 className="text-2xl font-bold">Kontakt & Öffnungszeiten 📍</h2>
        </div>

        {/* Две карточки с реальными картами */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-6xl mx-auto">
          {locations.map((location) => (
            <div key={location.id} className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-shadow">
              
              {/* Реальная Google Maps карта */}
              <div className="h-64 relative">
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>

              {/* Часы работы на карточке */}
              <div className="p-2 bg-gray-50 border-t">
                <div className="text-center">
                  {/* <div className="text-gray-600 text-sm font-semibold mb-2">Öffnungszeiten</div> */}
                  <div className="space-y-0 text-sm">
                    <div className="flex justify-between items-center py-1 border-b border-gray-200">
                      <span className="text-gray-600">Mo-Fr:</span>
                      <span className="font-semibold text-green-600">{location.openingHours.weekdays}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-200">
                      <span className="text-gray-600">Sa:</span>
                      <span className="font-semibold text-green-600">{location.openingHours.saturday}</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-600">So:</span>
                      <span className="text-gray-500">{location.openingHours.sunday}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}