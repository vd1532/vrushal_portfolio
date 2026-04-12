import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vrushal Dalvi — Pharmaceutical Scientist",
  description:
    "Portfolio of Vrushal Dalvi — MS candidate at SUNY Buffalo specializing in lipid nanoparticle formulation, biophysical characterization, and PK/PD modeling.",
  keywords: [
    "Vrushal Dalvi",
    "pharmaceutical scientist",
    "lipid nanoparticles",
    "LNP formulation",
    "PK/PD modeling",
    "SUNY Buffalo",
    "drug delivery",
  ],
  authors: [{ name: "Vrushal Dalvi" }],
  openGraph: {
    title: "Vrushal Dalvi — Pharmaceutical Scientist",
    description: "Developing protein-loaded lipid nanoparticles for therapeutic immune modulation.",
    type: "website",
    url: "https://vd1532.github.io/vrushal_portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vrushal Dalvi — Pharmaceutical Scientist",
    description: "Developing protein-loaded lipid nanoparticles for therapeutic immune modulation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${dmSerif.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
