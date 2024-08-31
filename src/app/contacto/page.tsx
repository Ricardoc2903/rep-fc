import Form from "@/components/Form"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Freddy Coello Refrigeracion",
  description: "Formulario de contacto de FC Refrigeracion.",
  keywords: "fc refrigeracion, fc, refrigeracion, service, reparación de heladeras, instalacion de aire acondicionado, service de aire acondicionado, mantenimiento de aire acondicionado, service de heladeras, service de lavarropas, formulario, form, contacto",
};

export default function page() {
  return (
    <div>
      <Form />
    </div>
  )
}
