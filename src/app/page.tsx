import aire from "@/images/0001.png"
import hel from "@/images/0002.png"
import free from "@/images/0003.png"
import lavSec from "@/images/0004.png"
import camFri from "@/images/0005.png"

import Card from "@/components/Card"
import Hero from "@/components/Hero"

export default function HomePage() {
  return (
    <div>
      <div>
        <Hero />

        <div id="servicios"  className="flex flex-col items-center">
          <h1 className=" mt-5 font-bold text-primary-400 uppercase text-4xl">Servicios</h1>
          <p className=" text-lg text-center w-10/12 m-3">Aquí algunos de los servicios de los que ofrecemos.</p>
        </div>

        <div className="flex mb-10 flex-row flex-wrap gap-10 justify-center">
          <Card
            imagen={aire}
            titulo="Aires Acondicionados"
            mensaje="Ofrecemos servicios especializados en instalación, reparación y mantenimiento de aires acondicionados. Nuestros técnicos altamente capacitados pueden diagnosticar y solucionar un a amplia gama de problemas, desde falta de enfriamiento hasta fugas de refrigerante."
          />
          <Card
            imagen={free}
            titulo="Freezers"
            mensaje="Ofrecemos soluciones completas para la reparación y mantenimiento de freezers. Desde problemas con la temperatura hasta fallas en el sistema de descongelación, nuestros técnicos pueden diagnosticar y reparar eficientemente."
          />
          <Card
            imagen={hel}
            titulo="Heladeras"
            mensaje="Nuestros expertos en refrigeración se especializan en la reparación y mantenimiento de heladeras y exhibidores. Ya sea una fuga de refrigerante, un compresor defectuoso o problemas con el sistema de descongelación, podemos solucionarlo."
          />
          <Card
            imagen={camFri}
            titulo="Cámaras Frigoríficas"
            mensaje="Brindamos servicios especializados para la reparación y mantenimiento de cámaras frigoríficas. Nuestros técnicos tienen experiencia en resolver problemas como la falta de enfriamiento, fallos en los sensores y problemas con las puertas."
          />
          <Card
            imagen={lavSec}
            titulo="Lavarropas / Secarropas"
            mensaje="Contamos con servicios integrales para la reparación y mantenimiento de lavarropas y secarropas. Desde problemas con el tambor hasta fallas en los controles electrónicos, estamos aquí para ayudarte a que tus electrodomésticos funcionen como nuevos."
          />
        </div>

      </div>
    </div>
  )
}