import type { Metadata } from "next";

import "./globals.css";

import { Providers } from "./providers";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FloatingBtn from "@/components/FloatingBtn"


export const metadata: Metadata = {
  title: "FC Refrigeracion",
  description: "Pagina oficial de FC Refrigeracion",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="google-site-verification" content="XSnsQL_0Jo6aMqmzwELNcpaOOMRHP2AQs4WbBfp0aNg" />
      </Head>
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
