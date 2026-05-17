import Link from "next/link";
import { Package, ScanLine, Gift } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Button } from "./components/Button";
import Card from "./components/Card";

const steps = [
  {
    icon: Package,
    title: "Collect empties",
    body: "Finish your Mad products, save the packaging.",
  },
  {
    icon: ScanLine,
    title: "Return at store",
    body: "Bring to any Sociolla or Beauty Haul. Staff scans, points instant.",
  },
  {
    icon: Gift,
    title: "Unlock benefits",
    body: "Rise through tiers, get early access to new drops.",
  },
];

const tiers = [
  {
    name: "Member",
    points: "0 points",
    benefits: ["Discord community access", "Vote on upcoming shades", "Monthly newsletter"],
    current: false,
  },
  {
    name: "Insider",
    points: "200 points",
    benefits: ["Early product drops", "Exclusive packaging", "Priority event access"],
    current: true,
  },
  {
    name: "Founder",
    points: "500 points",
    benefits: ["Co-create products", "Founder badge for life", "Annual founder kit"],
    current: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pb-20 lg:pb-0">
        {/* Hero */}
        <section
          className="px-6 pt-28 pb-20 text-center"
          style={{
            background: "linear-gradient(180deg, #FDFCFB 0%, #FFF5F7 100%)",
          }}
        >
          <div className="max-w-[560px] mx-auto">
            <h1
              className="font-serif text-[42px] lg:text-[48px] text-warm-900 leading-tight mb-6"
              style={{ letterSpacing: "-0.02em" }}
            >
              Turn empties into access
            </h1>
            <p className="text-warm-700 text-base leading-relaxed mb-10 max-w-sm mx-auto">
              Return your Mad packaging, earn points, unlock exclusive drops.
              Simple as that.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button variant="primary">Start returning</Button>
              </Link>
              <Link href="/how-it-works">
                <Button variant="secondary">How it works →</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Journey Steps */}
        <section className="px-6 py-16">
          <div className="max-w-content mx-auto">
            <Card>
              <p className="text-warm-400 text-xs font-medium uppercase tracking-widest mb-8">
                The journey
              </p>
              <div className="space-y-8">
                {steps.map(({ icon: Icon, title, body }, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex-shrink-0 mt-0.5">
                      <Icon size={24} strokeWidth={1.5} className="text-warm-400" />
                    </div>
                    <div>
                      <p className="text-warm-900 text-sm font-medium mb-1">{title}</p>
                      <p className="text-warm-700 text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Impact Counter */}
        <section className="px-6 pb-16">
          <div className="max-w-content mx-auto">
            <div className="bg-sage-100 rounded-card px-8 py-7">
              <p className="text-warm-400 text-xs font-medium uppercase tracking-widest mb-3">
                Our collective impact
              </p>
              <p className="text-sage-700 text-xl font-medium">
                2,247 empties&nbsp;&nbsp;•&nbsp;&nbsp;562 kg recovered
              </p>
            </div>
          </div>
        </section>

        {/* Tier Preview */}
        <section className="px-6 pb-16">
          <div className="max-w-content mx-auto">
            <p className="text-warm-400 text-xs font-medium uppercase tracking-widest mb-6">
              Earn your place
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              {tiers.map(({ name, points, benefits, current }) => (
                <div
                  key={name}
                  className={`rounded-card p-6 shadow-card ${
                    current
                      ? "bg-mad-rose-100 border-l-4 border-sage-500"
                      : "bg-mad-rose-50"
                  }`}
                >
                  <h3
                    className="font-serif text-lg text-warm-900 mb-1"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {name}
                  </h3>
                  <p className="text-warm-400 text-xs mb-4">{points}</p>
                  <ul className="space-y-1.5">
                    {benefits.map((b) => (
                      <li key={b} className="text-warm-700 text-sm flex gap-2">
                        <span className="text-warm-400">·</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-cream-100 px-6 py-20 text-center">
          <div className="max-w-content mx-auto">
            <h2
              className="font-serif text-[32px] text-warm-900 mb-8"
              style={{ letterSpacing: "-0.02em" }}
            >
              Ready to start?
            </h2>
            <Link href="/signup">
              <Button variant="primary">Join for free</Button>
            </Link>
            <p className="text-warm-400 text-xs mt-4">No purchase required</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
