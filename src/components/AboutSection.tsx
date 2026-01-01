"use client";

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-3">
        
        <div className="max-w-6xl mx-auto mb-8">
          <h2 className="text-2xl font-bold">Über Uns 🕵️‍♂️</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
              <div className="h-80 from-gray-100 to-gray-200 flex items-center justify-center relative">
                <Image
                  src="/images/our-store.jpg"
                  alt="Unser Dr. Phone Laden"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R"
                />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-800">Ihr zuverlässiger Partner für Smartphone-Reparaturen</h3>
              
              <div className="space-y-1 text-gray-600 leading-relaxed">
                <p>
                  Seit über 5 Jahren reparieren wir Smartphones in Potsdam und Werder (Havel) 
                  mit Leidenschaft und Expertise. Unser Team von zertifizierten Technikern 
                  steht Ihnen für alle Reparaturen zur Verfügung.
                </p>
                
                <p>
                  Wir verwenden nur hochwertige Ersatzteile und bieten 3 Monate Garantie 
                  auf alle unsere Reparaturen. Die meisten Reparaturen erledigen wir 
                  in nur 30-60 Minuten vor Ort.
                </p>

                <p>
                  Ob Displaytausch, Akkuwechsel oder Wasserschaden - wir finden für 
                  jedes Problem die richtige Lösung. Kommen Sie einfach vorbei und 
                  überzeugen Sie sich selbst!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center p-2 from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                <div className="text-2xl font-bold text-blue-600 mb-1">5+</div>
                <div className="text-xs text-gray-700 font-medium">Jahre Erfahrung</div>
              </div>
              
              <div className="text-center p-2 from-green-50 to-green-100 rounded-2xl border border-green-200">
                <div className="text-2xl font-bold text-green-600 mb-1">1000+</div>
                <div className="text-xs text-gray-700 font-medium">Zufriedene Kunden</div>
              </div>
              
              <div className="text-center p-2 from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
                <div className="text-2xl font-bold text-purple-600 mb-1">3</div>
                <div className="text-xs text-gray-700 font-medium">Monate Garantie</div>
              </div>
              
              <div className="text-center p-2 from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
                <div className="text-2xl font-bold text-orange-600 mb-1">30-60</div>
                <div className="text-xs text-gray-700 font-medium">Minuten Reparatur</div>
              </div>
              
              <div className="text-center p-2 from-red-50 to-red-100 rounded-2xl border border-red-200">
                <div className="text-2xl font-bold text-red-600 mb-1">24/7</div>
                <div className="text-xs text-gray-700 font-medium">Kundenservice</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}