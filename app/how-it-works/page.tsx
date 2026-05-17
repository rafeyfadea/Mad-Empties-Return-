import { ScanLine, CalendarDays, Gift } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";
import Card from "../components/Card";

const steps = [
  {
    icon: ScanLine,
    title: "Scan & unlock",
    body: "Enter code to verify your purchase instantly.",
  },
  {
    icon: CalendarDays,
    title: "Build the habit",
    body: "Log your usage daily for 30 days to build routine.",
  },
  {
    icon: Gift,
    title: "Claim rewards",
    body: "Milestone rewards waiting at Day 7, 14, 21, and 30.",
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-6 py-16 pb-28 lg:pb-16">
        <div className="max-w-content mx-auto">
          <h1
            className="font-serif text-4xl text-warm-900 text-center mb-12"
            style={{ letterSpacing: "-0.02em" }}
          >
            The journey
          </h1>

          <Card>
            <div className="divide-y divide-warm-200">
              {steps.map(({ icon: Icon, title, body }, i) => (
                <div key={i} className={`flex gap-5 ${i === 0 ? "pb-10" : i === steps.length - 1 ? "pt-10" : "py-10"}`}>
                  <div className="flex-shrink-0">
                    <Icon size={24} strokeWidth={1.5} className="text-warm-400" />
                  </div>
                  <div>
                    <p className="text-warm-900 text-base font-semibold mb-1.5">{title}</p>
                    <p className="text-warm-700 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="mt-16 text-center">
            <p className="text-warm-400 text-sm leading-relaxed max-w-xs mx-auto">
              Participating stores: Sociolla, Beauty Haul, and selected Mad for Makeup pop-ups.
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
