import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

const returns = [
  { date: "May 15, 2026", product: "Rebel Red Lipstick", store: "Sociolla PIK", points: 30 },
  { date: "May 10, 2026", product: "Blush Palette", store: "Beauty Haul SCBD", points: 30 },
  { date: "Apr 28, 2026", product: "Matte Foundation", store: "Sociolla PIK", points: 30 },
  { date: "Apr 19, 2026", product: "Setting Spray", store: "Beauty Haul Kemang", points: 30 },
  { date: "Apr 5, 2026", product: "Contour Stick", store: "Sociolla Senayan", points: 30 },
  { date: "Mar 22, 2026", product: "Lip Liner", store: "Sociolla PIK", points: 30 },
];

export default function Returns() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      <main className="max-w-content mx-auto px-6 py-10 pb-28 lg:pb-10">
        <div className="flex items-center justify-between mb-8">
          <h1
            className="font-serif text-2xl text-warm-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Return history
          </h1>
          <span className="text-warm-400 text-xs font-medium uppercase tracking-widest">
            {returns.length} total
          </span>
        </div>

        <div className="bg-cream-100 rounded-card shadow-card overflow-hidden">
          {returns.map(({ date, product, store, points }, i) => (
            <div
              key={i}
              className={`px-6 py-5 ${
                i < returns.length - 1 ? "border-b border-warm-200" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-warm-900 text-sm font-medium mb-0.5">{product}</p>
                  <p className="text-warm-400 text-xs">{store}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sage-700 text-sm font-medium">+{points} pts</p>
                  <p className="text-warm-400 text-xs mt-0.5">{date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-warm-400 text-xs text-center mt-8">
          Each return earns 30 points. Keep going!
        </p>
      </main>

      <BottomNav />
    </div>
  );
}
