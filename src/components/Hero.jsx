import React from 'react'

import { Button, Link } from "@nextui-org/react";
import man from "@/images/mantenimiento1.jpg"

import Image from "next/image"

import { FaWhatsapp } from "react-icons/fa";


export default function Hero() {
  return (
    <div>
      <div className="flex justify-center m-5 gap-10 mt-8">
        <div className="hero-text w-full sm:w-3/6">
          <h1 className=' font-bold text-center text-primary-400 text-lg'>Servicio Técnico Profesional</h1>
          <br />
          <p className=' text-wrap'>Ofrecemos servicio técnico profesional de cámaras frigoríficas, heladeras domésticas y comerciales, aires acondicionados, lavarropas y secarropas. Trabajamos con todas las marcas. Nuestro trabajo cuenta con garantía, no dudes en llamarnos.</p>
          <div className="hero-btn mt-4 flex flex-col sm:flex-row justify-center gap-5">
            <Button as={Link} href="https://wa.link/7ofobc" className=' w-full xl:w-1/2' color="success">
            <FaWhatsapp className=' h-5 w-5' />WhatsApp
            </Button>
            <Button as={Link} className=' w-full xl:w-1/2' href='/contacto' color="primary" variant="bordered">
              Contactanos
            </Button>
          </div>
        </div>
        <div className=" hero-image w-auto hidden sm:block">
          <Image width={370} className=' align-middle rounded-xl' src={man} alt="imagen" />
        </div>
      </div>
    </div>
  )
}
