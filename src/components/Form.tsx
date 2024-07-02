"use client"

import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nombre = (e.target as HTMLFormElement).nombre.value;
    const number = parseInt((e.target as HTMLFormElement).number.value);
    const email = (e.target as HTMLFormElement).email.value;
    const msg = (e.target as HTMLFormElement).msg.value;

    // Validar la dirección de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
      return;
    }

    const res = await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify({ nombre, number, email, msg }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      setFormSubmitted(true);
      handleReset(); // Llamar a la función handleReset después de enviar el formulario
    } else {
      console.error("Error al enviar el formulario:", res.statusText);
    }
  };

  const handleReset = () => {
    const form = document.getElementById("miFormulario") as HTMLFormElement;
    if (form) {
      form.reset();
      setEmailError(false); // Resetear el estado de emailError
    }
  };

  return (
    <div className="flex flex-col h-full items-center mt-10 mb-32">
      <div className=" w-1/2 rounded-lg h-96 mb-12 sm:mb-0 flex flex-col items-center">
        <h1 className="font-bold text-primary-400 text-2xl">Contactanos</h1>
        {formSubmitted && (
          <div className="mt-3 text-md w-72 sm:w-auto sm:text-xl text-black dark:text-white font-semibold">
            ¡El formulario se envió correctamente!
          </div>
        )}
        <form id="miFormulario" className="form" method="POST" onSubmit={onSubmit}>
          <div className="flex w-80 flex-col px-2 sm:mb-0 sm:px-0 flex-wrap md:flex-nowrap gap-10">
            <Input type="name" id="nombre" variant={"underlined"} color="primary" required label="Nombre" />
            <Input type="number" id="number" variant={"underlined"} color="primary" required label="Teléfono" />
            <Input type="email" id="email" variant={"underlined"} color="primary" required label="Email"
              onChange={() => setEmailError(false)} // Resetear el error al cambiar el email
            />
            {emailError && (
              <div className="text-red-600">Por favor, introduce una dirección de correo electrónico válida.</div>
            )}
            <Input type="message" id="msg" variant={"underlined"} color="primary" required label="Mensaje" />
          </div>
          <div className="flex flex-col px-2 sm:px-0 sm:flex-row justify-center mt-5 gap-5">
            <Button type="submit" className=" w-full sm:w-1/2" color="primary" variant="shadow">
              Enviar
            </Button>
            <Button onClick={handleReset} className=" w-full sm:w-1/2" color="primary" variant="ghost">
              Borrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}