import type { Metadata } from "next";

import "./globals.css";

import { Providers } from "./providers";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FloatingBtn from "@/components/FloatingBtn"


export const metadata: Metadata = {
  title: "FC Refrigeracion - Servicios Técnicos en Refrigeración",
  description: "Página oficial de FC Refrigeración. Ofrecemos servicios técnicos en refrigeración de alta calidad.",
  keywords: "refrigeración, servicios técnicos, reparación de refrigeradores, mantenimiento de aire acondicionado",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <div>
            <Navbar />
            <main>
              {children}
              <FloatingBtn />
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
