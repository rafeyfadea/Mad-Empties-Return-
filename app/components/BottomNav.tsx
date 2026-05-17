"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, RotateCcw, Layers } from "lucide-react";

const tabs = [
  { href: "/", label: "Discover", icon: Compass },
  { href: "/returns", label: "Returns", icon: RotateCcw },
  { href: "/tier", label: "Tier", icon: Layers },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-warm-200 safe-area-inset-bottom lg:hidden">
      <div className="flex items-center justify-around h-16 max-w-content mx-auto px-6">
        {tabs.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-1 min-w-[44px] min-h-[44px] justify-center transition-colors duration-150 ${
                active ? "text-mad-rose-500" : "text-warm-400"
              }`}
            >
              <Icon size={20} strokeWidth={1.5} />
              <span
                className="text-[10px] font-medium uppercase tracking-widest"
                style={{ letterSpacing: "0.05em" }}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
