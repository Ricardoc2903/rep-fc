import Calculadora from "@/components/Calculadora";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora | Freddy Coello Refrigeracion",
  description: "Formulario de contacto de FC Refrigeracion.",
  keywords: " calculadora de frigorias, calculadora, mantenimiento de aires san miguel, mantenimiento de aires muñiz, mantenimiento de aires buenos aires, Muñiz, muñiz, Argentina, san miguel, San Miguel, fc refrigeracion, fc, refrigeracion, service, reparación de heladeras, instalacion de aire acondicionado, service de aire acondicionado, mantenimiento de aire acondicionado, service de heladeras, service de lavarropas, formulario, form, contacto",
};

export default function page() {
  return (
    <div>
      <div>
        <Calculadora />
      </div>
    </div>
  );
}
