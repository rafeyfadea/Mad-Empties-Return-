import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import Badge from "../components/Badge";

const tiers = [
  {
    name: "Member",
    range: "0 – 199 points",
    benefits: [
      "Discord community access",
      "Vote on upcoming shades",
      "Monthly newsletter",
    ],
    status: "completed" as const,
  },
  {
    name: "Insider",
    range: "200 – 499 points",
    benefits: [
      "Early product drops",
      "Exclusive packaging",
      "Priority event access",
    ],
    status: "current" as const,
  },
  {
    name: "Founder",
    range: "500+ points",
    benefits: [
      "Co-create products",
      "Founder badge for life",
      "Annual founder kit",
    ],
    status: "locked" as const,
  },
];

const POINTS = 340;
const NEXT_THRESHOLD = 500;
const PROGRESS = Math.round((POINTS / NEXT_THRESHOLD) * 100);

export default function Tier() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      <main className="max-w-content mx-auto px-6 py-10 pb-28 lg:pb-10">
        <h1
          className="font-serif text-2xl text-warm-900 mb-2"
          style={{ letterSpacing: "-0.02em" }}
        >
          Your tier status
        </h1>
        <p className="text-warm-400 text-sm mb-8">
          {NEXT_THRESHOLD - POINTS} more points to Founder
        </p>

        {/* Progress */}
        <div className="bg-white rounded-card shadow-card p-6 mb-8">
          <div className="flex justify-between text-xs text-warm-400 mb-2">
            <span>Member</span>
            <span>Insider</span>
            <span>Founder</span>
          </div>
          <div className="h-2 bg-warm-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-sage-500 rounded-full"
              style={{ width: `${PROGRESS}%` }}
            />
          </div>
          <p className="text-warm-900 text-sm font-medium mt-3">
            {POINTS} points
          </p>
        </div>

        {/* Tier Cards */}
        <div className="space-y-4">
          {tiers.map(({ name, range, benefits, status }) => (
            <div
              key={name}
              className={`rounded-card p-6 shadow-card ${
                status === "current"
                  ? "bg-mad-rose-100 border-l-4 border-sage-500"
                  : status === "completed"
                  ? "bg-sage-100"
                  : "bg-cream-100 opacity-60"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h2
                  className="font-serif text-lg text-warm-900"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {name}
                </h2>
                {status === "current" && <Badge variant="rose">Current</Badge>}
                {status === "completed" && <Badge variant="sage">Unlocked</Badge>}
              </div>
              <p className="text-warm-400 text-xs mb-4">{range}</p>
              <ul className="space-y-1.5">
                {benefits.map((b) => (
                  <li key={b} className="text-warm-700 text-sm flex gap-2">
                    <span className={status === "locked" ? "text-warm-200" : "text-warm-400"}>
                      ·
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
