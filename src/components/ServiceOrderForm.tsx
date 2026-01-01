"use client";
import { useState } from 'react';
import { ChevronLeft, CheckCircle } from 'lucide-react';

export interface FormData {
  name: string;
  vorname: string;
  email: string;
  phone: string;
  description: string;
}

interface ServiceOrderFormProps {
  serviceName: string;
  onBack: () => void;
  onSubmit: (data: FormData) => void;
}

export default function ServiceOrderForm({ serviceName, onBack }: ServiceOrderFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const data: FormData = {
      name: formData.get('name') as string,
      vorname: formData.get('vorname') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      description: formData.get('description') as string,
    };

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, serviceName }),
      });

      if (!res.ok) throw new Error("Fehler beim Senden");

      setIsSubmitted(true);

      setError(null);

      setTimeout(() => onBack(), 3000);
    } catch (err) {
      console.error(err);
      setError("Fehler beim Senden. Bitte versuchen Sie es später erneut.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle size={64} className="text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="text-gray-600 mb-6">
          Wir haben Ihre Buchungsanfrage für <strong>{serviceName}</strong> erhalten 
          und werden uns innerhalb der nächsten Stunden bei Ihnen melden.
        </p>
        <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
          <p className="text-blue-800 text-sm">
            📞 <strong>Bei dringenden Fragen:</strong> +49 155 6678 0738
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={onBack}
          className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-lg"
        >
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-2xl font-bold text-gray-800">Termin buchen - {serviceName}</h2>
      </div>

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 rounded-2xl p-6 border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input 
              type="text" 
              name="name"
              required
              placeholder="Ihr Nachname"
              className="w-full p-4 border border-gray-300 rounded-xl bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vorname *
            </label>
            <input 
              type="text" 
              name="vorname"
              required
              placeholder="Ihr Vorname"
              className="w-full p-4 border border-gray-300 rounded-xl bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            E-Mail *
          </label>
          <input 
            type="email" 
            name="email"
            required
            placeholder="ihre.email@beispiel.de"
            className="w-full p-4 border border-gray-300 rounded-xl bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Handynummer *
          </label>
          <input 
            type="tel" 
            name="phone"
            required
            placeholder="+49 123 456789"
            className="w-full p-4 border border-gray-300 rounded-xl bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Beschreibung des Problems
          </label>
          <textarea 
            rows={4}
            name="description"
            placeholder="Beschreiben Sie kurz das Problem mit Ihrem Gerät..."
            className="w-full p-4 border border-gray-300 rounded-xl bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-2xl hover:bg-blue-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
        >
          Termin anfragen
        </button>
        
        <p className="text-gray-500 text-sm text-center">
          Wir melden uns innerhalb von 2 Stunden bei Ihnen zurück.
        </p>
      </form>
    </div>
  );
}
