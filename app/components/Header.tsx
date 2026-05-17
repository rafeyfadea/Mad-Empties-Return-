"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 h-16 bg-cream-50 transition-shadow duration-200 ${
        scrolled ? "shadow-card" : ""
      }`}
    >
      <div className="max-w-content mx-auto h-full px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-xl text-warm-900 tracking-tight">
            Mad for Makeup
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/login"
            className="text-warm-700 text-sm font-medium hover:text-warm-900 transition-colors duration-150"
          >
            Login
          </Link>
          <button
            aria-label="Search"
            className="text-warm-400 hover:text-warm-700 transition-colors duration-150"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
        </nav>
      </div>
    </header>
  );
}
