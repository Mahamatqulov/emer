import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";
import { Header } from "@/components/Header";
import PageLoader from "@/components/PageLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emergency Medical Center - Quality Healthcare",
  description:
    "Premier emergency medical center providing 24/7 emergency services, general healthcare, and specialized medical treatment for all ages.",
  generator: "",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${inter.className} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <LanguageProvider>
            {/* <PageLoader>{children}</PageLoader> */}
            {children}
            {process.env.NODE_ENV === "production" && <Analytics />}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
