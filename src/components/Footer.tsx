export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl">📱</div>
          <div className="font-bold text-xl">Dr. Phone</div>
        </div>
        <div className="text-gray-400 text-sm text-center">
          © 2025 Dr. Phone Potsdam • 
          <a href="#" className="ml-2 hover:text-white">Impressum</a> • 
          <a href="#" className="ml-2 hover:text-white">Datenschutz</a>
        </div>
         <div className="font-medium">
          +49 123 4567 1221
        </div>
      </div>
    </footer>
  );
}
