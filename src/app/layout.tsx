import type { Metadata } from "next";

import "./globals.css";

import { Providers } from "./providers";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FloatingBtn from "@/components/FloatingBtn"


export const metadata: Metadata = {
  metadataBase: new URL("https://fcrefrigeracion.com/"),
  title: "Freddy Coello Refrigeracion - Servicios",
  description: " Página oficial de FC Refrigeración. Ofrecemos servicio técnico especializado.",
  keywords: " calculadora de frigorias, calculadora, mantenimiento de aires san miguel, mantenimiento de aires muñiz, mantenimiento de aires buenos aires, Muñiz, muñiz, Argentina, san miguel, San Miguel, hvac, fc refrigeracion, fc, refrigeracion, service, reparación de heladeras, instalacion de aire acondicionado, service de aire acondicionado, mantenimiento de aire acondicionado, service de heladeras, service de lavarropas, mantenimiento de lavarropas, reparación de aires acondicionados ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5047977628308352"
         crossorigin="anonymous">
        </script>
      </head>
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
