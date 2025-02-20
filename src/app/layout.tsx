import type React from "react";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Navbar from "../components/navbar";

const dm_sans = DM_Sans({ 
  subsets: ["latin"],
  // Include all weights we might need
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm_sans',
});

export const metadata = {
  title: "Pemberontakan APRA",
  description: "Sejarah dan informasi tentang Pemberontakan APRA",
  keywords: "APRA, Sejarah Indonesia, Pemberontakan, Raymond Westerling, Negara Pasundan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={dm_sans.variable}>
      <body 
        className={`${dm_sans.className} bg-amber-50 min-h-screen flex flex-col`}
      >
        {/* Background texture overlay */}
        <div className="fixed inset-0 bg-[url('/paper-texture.png')] opacity-5 pointer-events-none" />
        
        {/* Main content */}
        <div className="relative flex flex-col min-h-screen">
          <Navbar />
          
          {/* Content area */}
          <main className="flex-1 relative z-10">
            {children}
          </main>

          {/* Footer */}
          <footer className="mt-auto py-6 text-center text-amber-800 border-t border-amber-200">
            <p className="text-sm">
              © 2024 Pemberontakan APRA - Sejarah Indonesia
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}