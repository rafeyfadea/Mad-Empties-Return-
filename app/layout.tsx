import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mad for Makeup — Empties Return Program",
  description: "Return your Mad packaging, earn points, unlock exclusive drops.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream-50 text-warm-900 antialiased">
        {children}
      </body>
    </html>
  );
}
