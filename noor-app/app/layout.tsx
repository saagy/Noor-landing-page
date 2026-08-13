import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/lenis-provider";
import { LanguageProvider } from "@/components/language-context";

export const metadata: Metadata = {
  title: "NOOR Capital Gardens | Your New Address for Smart Living",
  description: "Experience Egypt's first fully integrated 4th generation smart city by Talaat Moustafa Group. 5,000 Feddans of sustainable, tech-driven luxury living.",
  keywords: ["Noor City", "Noor Capital Gardens", "Talaat Moustafa Group", "Smart City Egypt", "Luxury Real Estate", "Smart Home Automation"],
  icons: {
    icon: "/images/Logo/Untitled design.png",
    shortcut: "/images/Logo/Untitled design.png",
    apple: "/images/Logo/Untitled design.png",
  },
  openGraph: {
    title: "NOOR Capital Gardens — First Integrated Smart City",
    description: "Your New Address for Smart Living. Revolutionizing living experience near the New Administrative Capital.",
    images: ["/images/Noor-most-used-scaled.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/images/Logo/Untitled design.png" />
      </head>
      <body className="min-h-full flex flex-col selection:bg-[#C9A84C] selection:text-[#0E284A]">
        <LanguageProvider>
          <LenisProvider>
            {children}
          </LenisProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
