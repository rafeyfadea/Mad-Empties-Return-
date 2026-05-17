import { Leaf, Package, Users, Recycle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const stats = [
  { icon: Package, value: "2,247", label: "Empties returned" },
  { icon: Recycle, value: "562 kg", label: "Packaging recovered" },
  { icon: Users, value: "841", label: "Active members" },
  { icon: Leaf, value: "1.2 t", label: "CO₂ offset estimate" },
];

export default function Impact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-content mx-auto px-6 py-16 w-full">
        <h1
          className="font-serif text-4xl text-warm-900 text-center mb-4"
          style={{ letterSpacing: "-0.02em" }}
        >
          Our collective impact
        </h1>
        <p className="text-warm-400 text-sm text-center mb-14">
          Together, we're closing the loop on beauty waste.
        </p>

        <div className="grid grid-cols-2 gap-5 mb-14">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="bg-cream-100 rounded-card shadow-card p-6 text-center"
            >
              <Icon size={24} strokeWidth={1.5} className="text-sage-500 mx-auto mb-3" />
              <p
                className="font-serif text-3xl text-warm-900 mb-1"
                style={{ letterSpacing: "-0.02em" }}
              >
                {value}
              </p>
              <p className="text-warm-400 text-xs uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>

        <div className="bg-sage-100 rounded-card p-8 text-center">
          <p className="text-warm-400 text-xs uppercase tracking-widest mb-3">Our commitment</p>
          <p className="text-warm-700 text-sm leading-relaxed max-w-xs mx-auto">
            Every returned empty is recycled through our certified partner network. We publish
            quarterly impact reports — no greenwashing, just numbers.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
