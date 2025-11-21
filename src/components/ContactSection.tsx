import servicesData from '../data/services.json';

export default function ContactSection() {
  const { companyInfo } = servicesData;
  
  const locations = [
    {
      id: 1,
      address: "Babelsberger Str. 16, 14473 Potsdam",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4869.560164963621!2d13.060148862396287!3d52.39253689965969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f561d2e1fb1d%3A0xea00c8e9f8c94eb5!2sDr.phone!5e0!3m2!1sru!2sde!4v173723396302!5m2!1sru!2sde",
      openingHours: {
        weekdays: "9:00 - 18:00",
        saturday: "10:00 - 16:00", 
        sunday: "Geschlossen"
      }
    },
    {
      id: 2,
      address: "Auf dem Strengfeld 6, 14542 Werder (Havel)",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1218.202823311312!2d12.931938889294994!3d52.36306424300512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f36b62d35bf9%3A0x432e3b00cc064a85!2sAuf%20dem%20Strengfeld%206%2C%2014542%20Werder%20(Havel)!5e0!3m2!1sru!2sde!4v173723527658!5m2!1sru!2sde",
      openingHours: {
        weekdays: "9:00 - 18:00",
        saturday: "10:00 - 16:00",
        sunday: "Geschlossen"
      }
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
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