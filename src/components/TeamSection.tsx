import servicesData from '../data/services.json';

export default function TeamSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Заголовок слева */}
        <div className="max-w-6xl mx-auto mb-8">
          <h2 className="text-2xl font-bold">Unser Team 🧑🏻‍💻</h2>
        </div>

        {/* Сетка команды */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {servicesData.team.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-shadow text-center">
              
              {/* Фото */}
              <div className="h-48 from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-gray-400 text-4xl">👤</div>
              </div>

              {/* Информация */}
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
