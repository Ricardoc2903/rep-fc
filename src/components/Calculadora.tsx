"use client";
import React, { FormEvent, useState } from "react";
import { Select, SelectItem, Input, Button } from "@nextui-org/react";

// Tipos de datos
interface Opcion {
  key: string;
  label: string;
}

interface OpcionesCalculo {
  clima: string;
  orientacion: string;
  aislamiento: string;
  tipoTecho: string;
  areaVentanas: number;
  personas: number;
  equiposElectronicos: number;
  tipoUso: string;
}

export default function CalculadoraFrigorias() {

  // Estado para manejar el resultado
  const [resultado, setResultado] = useState<string>("");

  // Opciones de selección
  const climas: Opcion[] = [
    { key: "frio", label: "Frío" },
    { key: "templado", label: "Templado" },
    { key: "calido", label: "Cálido" },
    { key: "tropical", label: "Tropical" },
  ];

  const orientaciones: Opcion[] = [
    { key: "norte", label: "Norte" },
    { key: "sur", label: "Sur" },
    { key: "este", label: "Este" },
    { key: "oeste", label: "Oeste" },
  ];

  const aislamientos: Opcion[] = [
    { key: "excelente", label: "Excelente" },
    { key: "bueno", label: "Bueno" },
    { key: "normal", label: "Normal" },
    { key: "malo", label: "Malo" },
  ];

  const tiposTecho: Opcion[] = [
    { key: "aislado", label: "Aislado" },
    { key: "no aislado", label: "No aislado" },
    { key: "vidriado", label: "Vidriado" },
  ];

  const tiposUso: Opcion[] = [
    { key: "vivienda", label: "Vivienda" },
    { key: "oficina", label: "Oficina" },
    { key: "comercial", label: "Comercial" },
  ];

  // Cálculo de frigorías
  const calcularFrigorias = (
    ancho: number,
    largo: number,
    altura: number,
    opciones: OpcionesCalculo
  ): number => {
    const volumen = ancho * largo * altura;
    let frigoriasBase = 20;
    let frigoriasNecesarias = volumen * frigoriasBase;

    const factorClimatico: Record<string, number> = {
      frio: 0.9,
      templado: 1,
      calido: 1.1,
      tropical: 1.2,
    };
    frigoriasNecesarias *= factorClimatico[opciones.clima] || 1;

    const factorOrientacion: Record<string, number> = {
      norte: 0.95,
      sur: 1,
      este: 1.05,
      oeste: 1.1,
    };
    frigoriasNecesarias *= factorOrientacion[opciones.orientacion] || 1;

    const factorAislamiento: Record<string, number> = {
      excelente: 0.9,
      bueno: 0.95,
      normal: 1,
      malo: 1.1,
    };
    frigoriasNecesarias *= factorAislamiento[opciones.aislamiento] || 1;

    const factorTecho: Record<string, number> = {
      aislado: 1,
      "no aislado": 1.15,
      vidriado: 1.25,
    };
    frigoriasNecesarias *= factorTecho[opciones.tipoTecho] || 1;

    frigoriasNecesarias += (opciones.areaVentanas || 0) * 150;
    frigoriasNecesarias += opciones.personas * 100;
    frigoriasNecesarias += (opciones.equiposElectronicos || 0) * 400;

    const factorUso: Record<string, number> = {
      vivienda: 1,
      oficina: 1.1,
      comercial: 1.2,
    };
    frigoriasNecesarias *= factorUso[opciones.tipoUso] || 1;

    frigoriasNecesarias *= 1.1;
    return Math.round(frigoriasNecesarias / 100) * 100;
  };

  // Manejo del formulario
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const ancho = parseFloat(formData.get("ancho") as string);
    const largo = parseFloat(formData.get("largo") as string);
    const altura = parseFloat(formData.get("altura") as string);

    if (ancho <= 0 || largo <= 0 || altura <= 0) {
      setResultado("Por favor, ingrese dimensiones válidas.");
      return;
    }

    const opciones: OpcionesCalculo = {
      clima: formData.get("clima") as string,
      orientacion: formData.get("orientacion") as string,
      aislamiento: formData.get("aislamiento") as string,
      tipoTecho: formData.get("tipoTecho") as string,
      areaVentanas: parseFloat(formData.get("areaVentanas") as string) || 0,
      personas: parseInt(formData.get("personas") as string) || 0,
      equiposElectronicos:
        parseInt(formData.get("equiposElectronicos") as string) || 0,
      tipoUso: formData.get("tipoUso") as string,
    };

    const frigoriasRequeridas = calcularFrigorias(
      ancho,
      largo,
      altura,
      opciones
    );
    setResultado(
      `Se necesitan aproximadamente ${frigoriasRequeridas} frigorías.`
    );
  };

  return (
    <div className=" m-10 sm:mt-10 sm:mb-10  flex flex-col items-center ">
      <div className=" shadow-lg rounded-3xl dark:shadow-primary-800 shadow-primary-400 cal-form p-5">
        <h1 className=" text-1xl sm:text-2xl text-primary-400 mb-3 font-bold">
          Calculadora Avanzada de Frigorías
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <div className="input-group">
              <label htmlFor="ancho">Ancho (metros):</label>
              <Input
                type="number"
                name="ancho"
                step="0.01"
                required
                color="primary"
                variant="underlined"
                placeholder="indicar el ancho del ambiente"
              />
            </div>
            <div className="input-group">
              <label htmlFor="largo">Largo (metros):</label>
              <Input
                type="number"
                name="largo"
                step="0.01"
                isRequired
                color="primary"
                variant="underlined"
                placeholder="indicar el largo del ambiente"
              />
            </div>
            <div className="input-group">
              <label htmlFor="altura">Altura (metros):</label>
              <Input
                type="number"
                name="altura"
                step="0.01"
                isRequired
                color="primary"
                variant="underlined"
                placeholder="indicar la altura del ambiente"
              />
            </div>
            <Select
              label="Clima"
              name="clima"
              isRequired
              color="primary"
              variant="underlined"
              placeholder="indicar el clima de la zona donde vives"
            >
              {climas.map((clima) => (
                <SelectItem key={clima.key} value={clima.key}>
                  {clima.label}
                </SelectItem>
              ))}
            </Select>
            <Select
              label="Orientación"
              name="orientacion"
              isRequired
              color="primary"
              variant="underlined"
              placeholder="indicar la orientación del ambiente"
            >
              {orientaciones.map((orientacion) => (
                <SelectItem key={orientacion.key} value={orientacion.key}>
                  {orientacion.label}
                </SelectItem>
              ))}
            </Select>
            <Select
              label="Aislamiento"
              name="aislamiento"
              isRequired
              color="primary"
              variant="underlined"
              placeholder="indicar el aislamiento del ambiente"
            >
              {aislamientos.map((aislamiento) => (
                <SelectItem key={aislamiento.key} value={aislamiento.key}>
                  {aislamiento.label}
                </SelectItem>
              ))}
            </Select>
            <Select
              label="Tipo de techo"
              name="tipoTecho"
              isRequired
              color="primary"
              variant="underlined"
              placeholder="indicar el tipo de techo del ambiente"
            >
              {tiposTecho.map((techo) => (
                <SelectItem key={techo.key} value={techo.key}>
                  {techo.label}
                </SelectItem>
              ))}
            </Select>
            <div className="input-group">
              <label htmlFor="areaVentanas">Área total de ventanas (m²):</label>
              <Input
                type="number"
                name="areaVentanas"
                step="0.1"
                min="0"
                isRequired
                color="primary"
                variant="underlined"
                placeholder="indicar el total de ventanas en el ambiente"
              />
            </div>
            <div className="input-group">
              <label htmlFor="personas">Número de personas:</label>
              <Input
                type="number"
                name="personas"
                min="0"
                isRequired
                color="primary"
                variant="underlined"
                placeholder="indicar el número de personas"
              />
            </div>
            <div className="input-group">
              <label htmlFor="equiposElectronicos">
                Número de equipos electrónicos grandes:
              </label>
              <Input
                type="number"
                name="equiposElectronicos"
                min="0"
                isRequired
                color="primary"
                variant="underlined"
                placeholder="indicar el numero de equipos grandes"
              />
            </div>
            <Select
              label="Tipo de uso"
              name="tipoUso"
              isRequired
              color="primary"
              variant="underlined"
              placeholder="indicar el tipo de uso"
            >
              {tiposUso.map((uso) => (
                <SelectItem key={uso.key} value={uso.key}>
                  {uso.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="button p-2 ">
            <Button
              type="submit"
              color="primary"
              variant="bordered"
              size="lg"
              className=" w-full"
            >
              Calcular Frigorias
            </Button>
          </div>
        </form>
        {resultado && <div id="resultado">{resultado}</div>}
      </div>
    </div>
  );
}


function setResultado(arg0: string) {
  throw new Error("Function not implemented.");
}


// const [resultado, setResultado] = useState("");

// const climas = [
//   { key: "frio", label: "Frío" },
//   { key: "templado", label: "Templado" },
//   { key: "calido", label: "Cálido" },
//   { key: "tropical", label: "Tropical" },
// ];

// const orientaciones = [
//   { key: "norte", label: "Norte" },
//   { key: "sur", label: "Sur" },
//   { key: "este", label: "Este" },
//   { key: "oeste", label: "Oeste" },
// ];

// const aislamientos = [
//   { key: "excelente", label: "Excelente" },
//   { key: "bueno", label: "Bueno" },
//   { key: "normal", label: "Normal" },
//   { key: "malo", label: "Malo" },
// ];

// const tiposTecho = [
//   { key: "aislado", label: "Aislado" },
//   { key: "no aislado", label: "No aislado" },
//   { key: "vidriado", label: "Vidriado" },
// ];

// const tiposUso = [
//   { key: "vivienda", label: "Vivienda" },
//   { key: "oficina", label: "Oficina" },
//   { key: "comercial", label: "Comercial" },
// ];

// const calcularFrigorias = (ancho, largo, altura, opciones) => {
//   const volumen = ancho * largo * altura;
//   let frigoriasBase = 20;
//   let frigoriasNecesarias = volumen * frigoriasBase;

//   const factorClimatico = {
//     frio: 0.9,
//     templado: 1,
//     calido: 1.1,
//     tropical: 1.2,
//   };
//   frigoriasNecesarias *= factorClimatico[opciones.clima] || 1;

//   const factorOrientacion = {
//     norte: 0.95,
//     sur: 1,
//     este: 1.05,
//     oeste: 1.1,
//   };
//   frigoriasNecesarias *= factorOrientacion[opciones.orientacion] || 1;

//   const factorAislamiento = {
//     excelente: 0.9,
//     bueno: 0.95,
//     normal: 1,
//     malo: 1.1,
//   };
//   frigoriasNecesarias *= factorAislamiento[opciones.aislamiento] || 1;

//   const factorTecho = {
//     aislado: 1,
//     "no aislado": 1.15,
//     vidriado: 1.25,
//   };
//   frigoriasNecesarias *= factorTecho[opciones.tipoTecho] || 1;

//   frigoriasNecesarias += (opciones.areaVentanas || 0) * 150;
//   frigoriasNecesarias += opciones.personas * 100;
//   frigoriasNecesarias += (opciones.equiposElectronicos || 0) * 400;

//   const factorUso = {
//     vivienda: 1,
//     oficina: 1.1,
//     comercial: 1.2,
//   };
//   frigoriasNecesarias *= factorUso[opciones.tipoUso] || 1;

//   frigoriasNecesarias *= 1.1;
//   return Math.round(frigoriasNecesarias / 100) * 100;
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);

//   const ancho = parseFloat(formData.get("ancho"));
//   const largo = parseFloat(formData.get("largo"));
//   const altura = parseFloat(formData.get("altura"));

//   if (ancho <= 0 || largo <= 0 || altura <= 0) {
//     setResultado("Por favor, ingrese dimensiones válidas.");
//     return;
//   }

//   const opciones = {
//     clima: formData.get("clima"),
//     orientacion: formData.get("orientacion"),
//     aislamiento: formData.get("aislamiento"),
//     tipoTecho: formData.get("tipoTecho"),
//     areaVentanas: parseFloat(formData.get("areaVentanas")) || 0,
//     personas: parseInt(formData.get("personas")) || 0,
//     equiposElectronicos: parseInt(formData.get("equiposElectronicos")) || 0,
//     tipoUso: formData.get("tipoUso"),
//   };

//   const frigoriasRequeridas = calcularFrigorias(
//     ancho,
//     largo,
//     altura,
//     opciones
//   );
//   setResultado(
//     `Se necesitan aproximadamente ${frigoriasRequeridas} frigorías.`
//   );
// };
