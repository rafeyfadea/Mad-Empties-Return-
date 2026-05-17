"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2, Star, Leaf, Package } from "lucide-react";
import { Button } from "../components/Button";

const perks = [
  { icon: Star, text: "10 welcome points on signup" },
  { icon: Package, text: "30 pts per empty returned" },
  { icon: Leaf, text: "Track your personal eco impact" },
];

export default function Signup() {
  const router = useRouter();
  const [fields, setFields] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields((prev) => ({ ...prev, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!fields.name.trim()) e.name = "Enter your name";
    if (!fields.email.includes("@")) e.email = "Enter a valid email";
    if (fields.password.length < 6) e.password = "Minimum 6 characters";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));

    const userData = {
      name: fields.name.trim().split(" ")[0],
      fullName: fields.name.trim(),
      email: fields.email,
      points: 10,
      tier: "member",
      streak: 1,
      totalReturns: 0,
    };
    localStorage.setItem("mad_user", JSON.stringify(userData));
    router.push("/dashboard?welcome=1");
  };

  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row"
      style={{ background: "linear-gradient(180deg, #FDFCFB 0%, #FFF5F7 100%)" }}
    >
      {/* Left: form */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <Link
              href="/"
              className="font-serif text-2xl text-warm-900 tracking-tight block mb-1"
            >
              Mad for Makeup
            </Link>
            <p className="text-warm-400 text-sm">Create your free account</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <input
                type="text"
                placeholder="Full name"
                value={fields.name}
                onChange={set("name")}
                autoComplete="name"
                className={`w-full bg-white border rounded-input px-5 py-3.5 text-base text-warm-900 placeholder-warm-400 focus:outline-none focus:border-sage-500 transition-colors duration-150 ${
                  errors.name ? "border-[#C97272]" : "border-warm-200"
                }`}
              />
              {errors.name && (
                <p className="text-[#C97272] text-xs mt-1.5 px-1">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address"
                value={fields.email}
                onChange={set("email")}
                autoComplete="email"
                className={`w-full bg-white border rounded-input px-5 py-3.5 text-base text-warm-900 placeholder-warm-400 focus:outline-none focus:border-sage-500 transition-colors duration-150 ${
                  errors.email ? "border-[#C97272]" : "border-warm-200"
                }`}
              />
              {errors.email && (
                <p className="text-[#C97272] text-xs mt-1.5 px-1">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={fields.password}
                onChange={set("password")}
                autoComplete="new-password"
                className={`w-full bg-white border rounded-input px-5 py-3.5 text-base text-warm-900 placeholder-warm-400 focus:outline-none focus:border-sage-500 transition-colors duration-150 ${
                  errors.password ? "border-[#C97272]" : "border-warm-200"
                }`}
              />
              {errors.password && (
                <p className="text-[#C97272] text-xs mt-1.5 px-1">{errors.password}</p>
              )}
            </div>

            <Button
              variant="primary"
              fullWidth
              type="submit"
              disabled={loading}
              className="flex items-center justify-center"
            >
              {loading ? (
                <>
                  <Loader2 size={15} className="mr-2 animate-spin" />
                  Creating account…
                </>
              ) : (
                "Create account"
              )}
            </Button>
          </form>

          {/* Perks */}
          <div className="mt-8 pt-6 border-t border-warm-200 space-y-2.5">
            {perks.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                  <Icon size={13} strokeWidth={1.5} className="text-sage-500" />
                </div>
                <p className="text-warm-700 text-sm">{text}</p>
              </div>
            ))}
          </div>

          {/* Login guide */}
          <div className="mt-6 p-4 rounded-card bg-mad-rose-50 border border-mad-rose-200">
            <p className="text-warm-900 text-xs font-medium mb-2">How to login</p>
            <p className="text-warm-700 text-xs leading-relaxed">
              Use your email or name to login, with password <span className="font-mono font-semibold">123456</span>
            </p>
          </div>

          <p className="mt-6 text-center text-warm-400 text-sm">
            Already have one?{" "}
            <Link
              href="/login"
              className="text-warm-700 hover:text-warm-900 font-medium transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
