import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Potefolio — Deviens un designer professionnel",
  description:
    "La plateforme gamifiée qui t'entraîne à monter en compétences design. Briefs individuels générés par IA, feedback peer-to-peer, communauté Discord.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
