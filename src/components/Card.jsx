import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

import Image from 'next/image'

import prueba from "@/images/mantenimiento1.jpg"

export default function App({ imagen, titulo, mensaje }) {
  return (
    <div>
      <div className="card bg-gray-100 dark:bg-zinc-900 shadow-large shadow-zinc-900 w-72 mt-4 rounded-large h-full">
        <Image src={imagen} alt={titulo} className="w-72 rounded-t-large"/>
        <div className="card-content flex justify-center align-middle flex-wrap p-2">
          <h3 className=" font-bold text-primary-400 text-lg">{titulo}</h3>
          <p>{mensaje}</p>
        </div>
      </div>
    </div>
  );
}
