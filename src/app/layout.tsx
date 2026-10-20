import type { Metadata } from "next";
import "./globals.css";

const title = "Virginio C. Torlao | Junior Full-Stack Developer";
const description = "Junior full-stack developer working with React, Next.js, Python, FastAPI, and PostgreSQL, with a background in computational research and machine learning.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jingtorls-portfolio.vercel.app"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://jingtorls-portfolio.vercel.app/",
    siteName: "Virginio C. Torlao Portfolio",
    type: "website",
    images: [{ url: "/social-preview.svg", width: 1200, height: 630, alt: "Virginio C. Torlao — Junior Full-Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/social-preview.svg"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
