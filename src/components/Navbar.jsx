"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useTheme } from "next-themes";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";

import Image from "next/image";
import logoOscuro from "@/images/logo_oscuro.png";
import logoClaro from "@/images/logo_claro.png";

import { anton } from "../ui/fonts";
import { usePathname } from "next/navigation";

export default function App() {

  const Links = {
    home: "/",
    calculadora: "/calculadora",
    contacto: "/contacto",
  }

  const pathname = usePathname();

  const { theme } = useTheme();

  // Determinar la ruta de la imagen según el tema
  const logoSrc = theme === "dark" ? logoOscuro : logoClaro;

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      className=" bg-primary-100"
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      isBlurred
    >
      <NavbarContent className="">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            src={logoSrc}
            className=" max-w-[160%] h-11 sm:w-36 sm:h-10 "
            alt="logo"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className={`${anton.className} antialiased hidden sm:flex gap-4`}
        justify="center"
      >
        <NavbarItem>
          <Link
            className={`text-primary-400 
              ${
                pathname === Links.home
                  ? " border-b-medium border-primary-700 text-primary-500"
                  : ""
              }
            `}
            href="/"
          >
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`text-primary-400 
            ${
              pathname === Links.calculadora
                ? " border-b-medium border-primary-700 text-primary-500"
                : ""
            }
          `}
            href="/calculadora"
          >
            Calculadora de Frigorias
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`text-primary-400 
            ${
              pathname === Links.contacto
                ? " border-b-medium border-primary-700 text-primary-500"
                : ""
            }
          `}
            href="/contacto"
          >
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link>
            <ThemeSwitcher />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className={`${anton.className} antialiased`}>
        <NavbarItem>
          <Link
            className={`text-primary-400 w-full justify-center h-10 text-lg
              ${
                pathname === Links.home
                  ? " bg-sky-100 dark:bg-foreground-100 rounded-lg text-primary-300"
                  : ""
              }
            `}
            color="foreground"
            href="/"
          >
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`text-primary-400 w-full justify-center h-10 text-lg
              ${
                pathname === Links.calculadora
                  ? " bg-sky-100 dark:bg-foreground-100 rounded-lg text-primary-300"
                  : ""
              }
            `}
            color="foreground"
            href="/calculadora"
          >
            Calculadora de Frigorias
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`text-primary-400 w-full justify-center h-10 text-lg
              ${
                pathname === Links.contacto
                  ? " bg-sky-100 dark:bg-foreground-100 rounded-lg text-primary-300"
                  : ""
              }
            `}
            color="foreground"
            href="/contacto"
          >
            Contacto
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
