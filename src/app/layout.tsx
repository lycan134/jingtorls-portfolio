import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Virginio C. Torlao | Web Developer & Computational Scientist",
  description:
    "Portfolio of Virginio C. Torlao featuring web development, AI-powered applications, computational science, machine learning, and physics research.",
  openGraph: {
    title: "Virginio C. Torlao | Web Developer & Computational Scientist",
    description:
      "Web development, AI, and computational science for useful digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}