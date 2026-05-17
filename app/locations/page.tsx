import { MapPin } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";

const locations = [
  { name: "Sociolla PIK", area: "Pantai Indah Kapuk", city: "Jakarta Utara", hours: "10:00 – 22:00" },
  { name: "Sociolla Senayan", area: "Senayan City", city: "Jakarta Selatan", hours: "10:00 – 22:00" },
  { name: "Beauty Haul SCBD", area: "Pacific Place", city: "Jakarta Selatan", hours: "10:00 – 21:00" },
  { name: "Beauty Haul Kemang", area: "Kemang Village", city: "Jakarta Selatan", hours: "11:00 – 21:00" },
  { name: "Sociolla Gandaria", area: "Gandaria City", city: "Jakarta Selatan", hours: "10:00 – 22:00" },
  { name: "Sociolla Summarecon", area: "Summarecon Mal Bekasi", city: "Bekasi", hours: "10:00 – 22:00" },
];

export default function Locations() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-content mx-auto px-6 py-10 pb-28 lg:pb-16 w-full">
        <h1
          className="font-serif text-2xl text-warm-900 mb-2"
          style={{ letterSpacing: "-0.02em" }}
        >
          Return locations
        </h1>
        <p className="text-warm-400 text-sm mb-8">
          {locations.length} participating stores
        </p>

        <div className="space-y-4">
          {locations.map(({ name, area, city, hours }) => (
            <div
              key={name}
              className="bg-cream-100 rounded-card shadow-card px-6 py-5 flex gap-4"
            >
              <MapPin
                size={20}
                strokeWidth={1.5}
                className="text-mad-rose-500 flex-shrink-0 mt-0.5"
              />
              <div className="flex-1 min-w-0">
                <p className="text-warm-900 text-sm font-medium mb-0.5">{name}</p>
                <p className="text-warm-700 text-sm">{area}</p>
                <p className="text-warm-400 text-xs mt-1">
                  {city} · {hours}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-mad-rose-50 rounded-card p-6 text-center">
          <p className="text-warm-700 text-sm leading-relaxed">
            More locations coming soon. Follow us on Instagram for updates.
          </p>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
