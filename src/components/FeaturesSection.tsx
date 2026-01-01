"use client";

export default function FeaturesSection() {
  const features = [
    {
      icon: "⚡",
      title: "Schnelle Reparatur",
      description: "Die meisten Reparaturen in 30-60 Minuten erledigt"
    },
    {
      icon: "🔧", 
      title: "Professionell",
      description: "Erfahrene Techniker mit Original-Ersatzteilen"
    },
    {
      icon: "🛡️",
      title: "Mit Garantie",
      description: "3 Monate Garantie auf alle unsere Reparaturen"
    },
    {
      icon: "💰",
      title: "Transparente Preise",
      description: "Keine versteckten Kosten - Festpreise"
    },
    {
      icon: "🏪",
      title: "Vor Ort Service",
      description: "Kommen Sie einfach vorbei - keine Termine nötig"
    }
  ];

  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-3">
        
        <div className="max-w-6xl mx-auto mb-8">
          <h2 className="text-2xl font-bold">Warum Dr. Phone? ✨</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl hover:shadow-xl transition-all duration-300 group text-center"
              >
                
                <div className="h-24 flex items-center justify-center border-b group-hover:bg-gray-100 transition-colors">
                  <div className="text-5xl group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                </div>

                <div className="p-2">
                  <div className="font-bold text-gray-800 mb-2 transition-colors text-sm">
                    {feature.title}
                  </div>
                  <div className="text-gray-600 text-xs leading-tight">
                    {feature.description}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}