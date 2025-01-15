import AdBanner from "./AdBanner";
import Image from "next/image";

export default function App({ imagen, titulo, mensaje }) {
  return (
    <div>
      <div className="card bg-gray-100 dark:bg-zinc-900 shadow-large shadow-zinc-900 w-72 mt-4 rounded-large h-full">
        <Image src={imagen} alt={titulo} className="w-72 rounded-t-large" />
        <div className="card-content flex justify-center align-middle flex-wrap p-2">
          <h3 className=" font-bold text-primary-400 text-lg">{titulo}</h3>
          <p>{mensaje}</p>
        </div>
      </div>
      <AdBanner
        dataAdFormat="auto"
        dataFullWidthResponsive={true}
        dataAdSlot="4326240930"
      />
    </div>
  );
}
