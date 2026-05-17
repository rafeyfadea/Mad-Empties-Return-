"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Star,
  Package,
  Leaf,
  Flame,
  Zap,
  Crown,
  RotateCcw,
  X,
  MapPin,
  ChevronRight,
  Sparkles,
  Trophy,
} from "lucide-react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import { Button } from "../components/Button";
import Badge from "../components/Badge";

// ─── Types ────────────────────────────────────────────────────────────────────

type Tier = "member" | "insider" | "founder";

interface UserState {
  name: string;
  points: number;
  tier: Tier;
  streak: number;
  totalReturns: number;
  rank: number;
  isNew: boolean;
}

// ─── Static config ────────────────────────────────────────────────────────────

const TIERS: { id: Tier; label: string; min: number }[] = [
  { id: "member", label: "Member", min: 0 },
  { id: "insider", label: "Insider", min: 200 },
  { id: "founder", label: "Founder", min: 500 },
];

const DEMO_USER: UserState = {
  name: "Alex",
  points: 340,
  tier: "insider",
  streak: 7,
  totalReturns: 11,
  rank: 23,
  isNew: false,
};

const DEMO_RETURNS = [
  { date: "May 15", product: "Rebel Red Lipstick", points: 30 },
  { date: "May 10", product: "Blush Palette", points: 30 },
  { date: "Apr 28", product: "Matte Foundation", points: 30 },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getMissions(isNew: boolean) {
  if (isNew) {
    return [
      {
        id: "first_return",
        title: "Make your first return",
        desc: "Head to any Sociolla or Beauty Haul with an empty",
        progress: 0,
        total: 1,
        reward: 30,
        cta: true,
      },
      {
        id: "profile",
        title: "Complete your profile",
        desc: "Add your beauty preferences to personalise drops",
        progress: 0,
        total: 1,
        reward: 10,
        cta: false,
      },
    ];
  }
  return [
    {
      id: "weekly_3",
      title: "Return 3 empties this week",
      desc: "1 more to complete — you're almost there",
      progress: 2,
      total: 3,
      reward: 40,
      cta: false,
    },
    {
      id: "new_store",
      title: "Explore a new store",
      desc: "Return at a store you haven't visited before",
      progress: 0,
      total: 1,
      reward: 25,
      cta: true,
    },
  ];
}

function getBadges(isNew: boolean, totalReturns: number) {
  return [
    {
      id: "welcome",
      icon: Star,
      label: "Welcome",
      desc: "Joined the family",
      earned: true,
    },
    {
      id: "first_return",
      icon: Package,
      label: "First Return",
      desc: "Return your first empty",
      earned: !isNew || totalReturns > 0,
    },
    {
      id: "eco",
      icon: Leaf,
      label: "Eco Warrior",
      desc: "Return 5 empties",
      earned: !isNew && totalReturns >= 5,
    },
    {
      id: "streak",
      icon: Flame,
      label: "On Fire",
      desc: "Maintain a 7-day streak",
      earned: !isNew,
    },
    {
      id: "power",
      icon: Zap,
      label: "Power Returner",
      desc: "Return 10 empties",
      earned: !isNew && totalReturns >= 10,
    },
    {
      id: "founder",
      icon: Crown,
      label: "Founder",
      desc: "Reach 500 points",
      earned: false,
    },
  ];
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function MissionCard({
  title,
  desc,
  progress,
  total,
  reward,
  cta,
  isFirst,
}: {
  title: string;
  desc: string;
  progress: number;
  total: number;
  reward: number;
  cta: boolean;
  isFirst: boolean;
}) {
  const pct = Math.round((progress / total) * 100);

  return (
    <div
      className={`rounded-card shadow-card p-5 ${
        isFirst && progress === 0
          ? "bg-mad-rose-50 border border-mad-rose-200"
          : "bg-cream-100"
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <p className="text-warm-900 text-sm font-medium mb-0.5 leading-snug">{title}</p>
          <p className="text-warm-400 text-xs leading-relaxed">{desc}</p>
        </div>
        <span className="flex-shrink-0 bg-sage-100 text-sage-700 text-xs font-medium px-2.5 py-1 rounded-badge">
          +{reward} pts
        </span>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-warm-200 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-700 ${
              pct === 0 ? "w-0" : "bg-mad-rose-500"
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="text-warm-400 text-xs flex-shrink-0 tabular-nums">
          {progress}/{total}
        </span>
      </div>

      {cta && (
        <Link
          href="/locations"
          className="inline-flex items-center gap-1 text-mad-rose-500 text-xs font-medium mt-3 hover:text-mad-rose-700 transition-colors"
        >
          Find a store <ChevronRight size={12} strokeWidth={2} />
        </Link>
      )}
    </div>
  );
}

function BadgeItem({
  icon: Icon,
  label,
  desc,
  earned,
}: {
  icon: React.ElementType;
  label: string;
  desc: string;
  earned: boolean;
}) {
  return (
    <div
      className={`rounded-card shadow-card p-4 text-center ${
        earned
          ? "bg-cream-100 transition-card hover:-translate-y-0.5 hover:shadow-card-hover"
          : "bg-cream-50 opacity-40"
      }`}
      title={desc}
    >
      <div
        className={`w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center ${
          earned ? "bg-sage-100" : "bg-warm-200"
        }`}
      >
        <Icon
          size={18}
          strokeWidth={1.5}
          className={earned ? "text-sage-500" : "text-warm-400"}
        />
      </div>
      <p
        className={`text-xs font-medium leading-tight ${
          earned ? "text-warm-900" : "text-warm-400"
        }`}
      >
        {label}
      </p>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function Dashboard() {
  const [user, setUser] = useState<UserState>(DEMO_USER);
  const [showBanner, setShowBanner] = useState(false);
  const [displayedPoints, setDisplayedPoints] = useState(0);

  // Hydrate from localStorage and read welcome param
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("welcome") === "1") setShowBanner(true);

    const stored = localStorage.getItem("mad_user");
    if (stored) {
      try {
        const data = JSON.parse(stored);
        setUser({
          name: data.name ?? "You",
          points: data.points ?? 10,
          tier: (data.tier as Tier) ?? "member",
          streak: data.streak ?? 1,
          totalReturns: data.totalReturns ?? 0,
          rank: 841,
          isNew: true,
        });
      } catch {}
    }
  }, []);

  // Animated counter
  useEffect(() => {
    const target = user.points;
    if (target === 0) {
      setDisplayedPoints(0);
      return;
    }
    let raf: number;
    const start = performance.now();
    const duration = 1400;
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplayedPoints(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [user.points]);

  // Tier data
  const tierIdx = TIERS.findIndex((t) => t.id === user.tier);
  const currentTier = TIERS[tierIdx];
  const nextTier = TIERS[tierIdx + 1];
  const tierPct = nextTier
    ? Math.min(
        Math.round(
          ((user.points - currentTier.min) / (nextTier.min - currentTier.min)) * 100
        ),
        100
      )
    : 100;
  const pointsToNext = nextTier ? nextTier.min - user.points : 0;

  const missions = getMissions(user.isNew);
  const badges = getBadges(user.isNew, user.totalReturns);
  const earnedCount = badges.filter((b) => b.earned).length;

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      <main className="max-w-content mx-auto px-6 py-8 pb-28 lg:pb-12 space-y-5">

        {/* Welcome banner */}
        {showBanner && (
          <div className="bg-sage-100 rounded-card px-5 py-4 flex items-start gap-3">
            <Sparkles
              size={18}
              strokeWidth={1.5}
              className="text-sage-500 flex-shrink-0 mt-0.5"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sage-700 text-sm font-medium">
                Welcome, {user.name}! You've earned 10 welcome points.
              </p>
              <p className="text-sage-700 text-xs mt-0.5 opacity-75">
                Complete your first mission to start climbing the tiers.
              </p>
            </div>
            <button
              onClick={() => setShowBanner(false)}
              className="text-sage-700 opacity-50 hover:opacity-100 transition-opacity flex-shrink-0 ml-1"
              aria-label="Dismiss"
            >
              <X size={15} strokeWidth={1.5} />
            </button>
          </div>
        )}

        {/* Page heading */}
        <div className="flex items-center justify-between">
          <h1
            className="font-serif text-2xl text-warm-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Hey, {user.name}
          </h1>
          <Badge variant="rose">
            {user.tier.charAt(0).toUpperCase() + user.tier.slice(1)}
          </Badge>
        </div>

        {/* ── Points hero card ── */}
        <div className="bg-white rounded-card shadow-card p-7">
          {/* Number */}
          <div className="flex items-end gap-2 mb-1">
            <span
              className="font-serif text-warm-900 tabular-nums leading-none"
              style={{
                fontSize: "clamp(52px, 16vw, 68px)",
                letterSpacing: "-0.03em",
              }}
            >
              {displayedPoints.toLocaleString()}
            </span>
            <span className="text-warm-400 text-sm font-medium pb-2">pts</span>
          </div>

          {nextTier ? (
            <p className="text-warm-400 text-sm mb-5">
              {pointsToNext} more to reach{" "}
              <span className="text-warm-700 font-medium">{nextTier.label}</span>
            </p>
          ) : (
            <p className="text-warm-400 text-sm mb-5">You&apos;ve reached the top tier ✦</p>
          )}

          {/* Progress bar */}
          <div className="h-2 bg-warm-200 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-sage-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${tierPct}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-warm-400 mb-6">
            <span>{currentTier.label}</span>
            {nextTier && <span>{nextTier.label}</span>}
          </div>

          {/* Mini stats row */}
          <div className="flex items-center gap-4 pt-4 border-t border-warm-200">
            <div className="flex items-center gap-1.5">
              <Flame size={13} strokeWidth={1.5} className="text-[#D9A86C]" />
              <span className="text-warm-700 text-xs font-medium">
                {user.streak}-day streak
              </span>
            </div>
            <div className="w-px h-3 bg-warm-200" />
            <div className="flex items-center gap-1.5">
              <Trophy size={13} strokeWidth={1.5} className="text-warm-400" />
              <span className="text-warm-400 text-xs">#{user.rank} this month</span>
            </div>
            <div className="w-px h-3 bg-warm-200" />
            <div className="flex items-center gap-1.5">
              <RotateCcw size={13} strokeWidth={1.5} className="text-warm-400" />
              <span className="text-warm-400 text-xs">{user.totalReturns} returns</span>
            </div>
          </div>
        </div>

        {/* ── Tier journey stepper ── */}
        <div className="bg-cream-100 rounded-card shadow-card px-7 py-5">
          <p className="text-warm-400 text-xs font-medium uppercase tracking-widest mb-5">
            Your journey
          </p>
          <div className="flex items-center">
            {TIERS.map((tier, i) => {
              const done = tierIdx > i;
              const active = tier.id === user.tier;
              return (
                <div key={tier.id} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center gap-1.5">
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-2 transition-colors duration-300 ${
                        done
                          ? "bg-sage-500 border-sage-500"
                          : active
                          ? "bg-mad-rose-500 border-mad-rose-500"
                          : "bg-cream-50 border-warm-200"
                      }`}
                    />
                    <span
                      className={`text-[11px] font-medium whitespace-nowrap ${
                        active
                          ? "text-mad-rose-500"
                          : done
                          ? "text-sage-700"
                          : "text-warm-400"
                      }`}
                    >
                      {tier.label}
                    </span>
                  </div>
                  {i < TIERS.length - 1 && (
                    <div
                      className={`flex-1 h-px mx-2 mb-4 transition-colors duration-300 ${
                        done ? "bg-sage-500" : "bg-warm-200"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Tier benefits preview */}
          <div className="mt-5 pt-4 border-t border-warm-200">
            <p className="text-warm-400 text-xs mb-2">
              {nextTier ? `Unlock at ${nextTier.label}:` : "Founder perks:"}
            </p>
            {nextTier?.id === "insider" && (
              <div className="flex flex-wrap gap-2">
                {["Early drops", "Exclusive packaging", "Priority events"].map((b) => (
                  <span
                    key={b}
                    className="text-xs text-mad-rose-700 bg-mad-rose-100 rounded-badge px-2.5 py-1"
                  >
                    {b}
                  </span>
                ))}
              </div>
            )}
            {nextTier?.id === "founder" && (
              <div className="flex flex-wrap gap-2">
                {["Co-create products", "Founder kit", "For life"].map((b) => (
                  <span
                    key={b}
                    className="text-xs text-mad-rose-700 bg-mad-rose-100 rounded-badge px-2.5 py-1"
                  >
                    {b}
                  </span>
                ))}
              </div>
            )}
            {!nextTier && (
              <span className="text-xs text-sage-700 bg-sage-100 rounded-badge px-2.5 py-1">
                All perks unlocked ✦
              </span>
            )}
          </div>
        </div>

        {/* ── Active missions ── */}
        <div>
          <p className="text-warm-900 text-sm font-medium mb-3 px-0.5">
            Active missions
          </p>
          <div className="space-y-3">
            {missions.map((m, i) => (
              <MissionCard key={m.id} {...m} isFirst={i === 0} />
            ))}
          </div>
        </div>

        {/* ── Achievements ── */}
        <div>
          <div className="flex items-center justify-between mb-3 px-0.5">
            <p className="text-warm-900 text-sm font-medium">Achievements</p>
            <span className="text-warm-400 text-xs">
              {earnedCount}/{badges.length} earned
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {badges.map((b) => (
              <BadgeItem key={b.id} {...b} />
            ))}
          </div>
        </div>

        {/* ── Community rank ── */}
        <div className="bg-cream-100 rounded-card shadow-card px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-warm-400 text-xs font-medium uppercase tracking-widest mb-1">
              Community rank
            </p>
            <p className="font-serif text-2xl text-warm-900" style={{ letterSpacing: "-0.02em" }}>
              #{user.rank}
            </p>
            <p className="text-warm-400 text-xs mt-0.5">
              Top {user.isNew ? "100%" : "15%"} this month
            </p>
          </div>
          <div className="text-right">
            <p className="text-warm-400 text-xs mb-1">Points this month</p>
            <p className="text-warm-900 text-lg font-semibold">
              {user.isNew ? "10" : "120"}
            </p>
          </div>
        </div>

        {/* ── Recent returns / first return prompt ── */}
        {!user.isNew ? (
          <div>
            <p className="text-warm-900 text-sm font-medium mb-3 px-0.5">
              Recent returns
            </p>
            <div className="bg-cream-100 rounded-card shadow-card overflow-hidden">
              {DEMO_RETURNS.map(({ date, product, points }, i) => (
                <div
                  key={i}
                  className={`px-5 py-4 flex items-center justify-between ${
                    i < DEMO_RETURNS.length - 1 ? "border-b border-warm-200" : ""
                  }`}
                >
                  <div>
                    <p className="text-warm-900 text-sm">{product}</p>
                    <p className="text-warm-400 text-xs mt-0.5">{date}</p>
                  </div>
                  <span className="text-sage-700 text-sm font-medium">+{points} pts</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-mad-rose-50 rounded-card p-6 text-center">
            <p className="text-warm-700 text-sm font-medium mb-1">
              Ready for your first return?
            </p>
            <p className="text-warm-400 text-xs mb-5 leading-relaxed">
              Any Sociolla or Beauty Haul — just hand over your empty, they'll scan it.
            </p>
            <Link href="/locations">
              <Button variant="primary">
                <MapPin size={14} strokeWidth={1.5} className="mr-2" />
                Find a store
              </Button>
            </Link>
          </div>
        )}

        {/* CTA */}
        {!user.isNew && (
          <Link href="/locations">
            <Button variant="primary" fullWidth className="flex items-center justify-center">
              <RotateCcw size={15} strokeWidth={1.5} className="mr-2" />
              Return more empties
            </Button>
          </Link>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
