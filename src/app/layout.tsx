import type { Metadata } from "next";
import { Mukta, Noto_Sans_Kannada } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

/* Kannada is the primary script here and Noto Sans Kannada carries it.
   Mukta handles the Latin that appears throughout the agronomy text —
   variety codes, chemical names, units — and the two are layered in one
   stack so the browser falls back per glyph. A Kannada sentence
   containing "NPK 10:26:26" still renders at one optical weight. */
const mukta = Mukta({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mukta",
  display: "swap",
});

const notoKannada = Noto_Sans_Kannada({
  subsets: ["kannada", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-kannada",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ಅದಮ್ಯ ಕೃಷಿ · Adhamya Krishi",
  description:
    "ರಾಗಿ, ತೆಂಗು, ಶುಂಠಿ, ಮುಸುಕಿನಜೋಳ ಮತ್ತು ಕಬ್ಬಿನ ಬೇಸಾಯ ಕ್ರಮಗಳು, ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಮತ್ತು ಕೃಷಿ ಸಂಶೋಧನಾ ಕೇಂದ್ರಗಳ ಸಂಪರ್ಕ ವಿವರಗಳು. — Package of practices for ragi, coconut, ginger, maize and sugarcane, government schemes, and agricultural research contacts.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="kn" className={`${mukta.variable} ${notoKannada.variable}`}>
      <body className="flex min-h-screen flex-col">
        <LanguageProvider>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
