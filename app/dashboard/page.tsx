import { RotateCcw } from "lucide-react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import { Button } from "../components/Button";
import Badge from "../components/Badge";
import Link from "next/link";

const recentReturns = [
  { date: "May 15", product: "Rebel Red Lipstick", points: 30 },
  { date: "May 10", product: "Blush Palette", points: 30 },
  { date: "Apr 28", product: "Matte Foundation", points: 30 },
  { date: "Apr 19", product: "Setting Spray", points: 30 },
];

const TOTAL_POINTS = 340;
const NEXT_TIER_POINTS = 500;
const PROGRESS = Math.round((TOTAL_POINTS / NEXT_TIER_POINTS) * 100);

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      <main className="max-w-content mx-auto px-6 py-10 pb-28 lg:pb-10 space-y-6">
        {/* Welcome */}
        <div className="flex items-center justify-between">
          <div>
            <h1
              className="font-serif text-2xl text-warm-900"
              style={{ letterSpacing: "-0.02em" }}
            >
              Welcome back, Alex
            </h1>
          </div>
          <Badge variant="rose">Insider</Badge>
        </div>

        {/* Points Card */}
        <div className="bg-white rounded-card shadow-card p-8">
          <p
            className="font-serif text-[56px] text-warm-900 leading-none mb-2"
            style={{ letterSpacing: "-0.03em" }}
          >
            {TOTAL_POINTS}
          </p>
          <p className="text-warm-400 text-sm mb-5">
            {NEXT_TIER_POINTS - TOTAL_POINTS} until Founder
          </p>
          <div className="h-1.5 bg-warm-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-sage-500 rounded-full transition-all duration-500"
              style={{ width: `${PROGRESS}%` }}
            />
          </div>
          <p className="text-warm-400 text-xs mt-2">{PROGRESS}% to Founder</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-mad-rose-50 rounded-card p-6 shadow-card">
            <p className="text-warm-900 text-2xl font-semibold mb-1">11</p>
            <p className="text-warm-400 text-xs uppercase tracking-widest">Returns this quarter</p>
          </div>
          <div className="bg-mad-rose-50 rounded-card p-6 shadow-card">
            <p className="text-warm-900 text-2xl font-semibold mb-1">2.75 kg</p>
            <p className="text-warm-400 text-xs uppercase tracking-widest">Your impact</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <p className="text-warm-900 text-base font-medium mb-5">Recent returns</p>
          <div className="space-y-0">
            {recentReturns.map(({ date, product, points }, i) => (
              <div
                key={i}
                className={`py-5 ${
                  i < recentReturns.length - 1 ? "border-b border-warm-200" : ""
                }`}
              >
                <p className="text-warm-400 text-xs mb-1">{date}</p>
                <p className="text-warm-700 text-sm">
                  {product}{" "}
                  <span className="text-sage-700 font-medium">→ +{points} pts</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link href="/locations">
          <Button variant="primary" fullWidth>
            <RotateCcw size={16} strokeWidth={1.5} className="mr-2" />
            Return more
          </Button>
        </Link>
      </main>

      <BottomNav />
    </div>
  );
}
