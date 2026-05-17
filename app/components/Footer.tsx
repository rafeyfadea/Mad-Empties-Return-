import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cream-100 py-10">
      <div className="max-w-content mx-auto px-6 text-center">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
          {["About", "FAQ", "Locations", "Contact"].map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase()}`}
              className="text-warm-400 text-sm hover:text-warm-700 transition-colors duration-150"
            >
              {link}
            </Link>
          ))}
        </nav>
        <p className="text-warm-400 text-xs">© 2026 Mad for Makeup</p>
      </div>
    </footer>
  );
}
