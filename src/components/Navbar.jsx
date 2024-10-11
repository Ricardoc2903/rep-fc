"use client"

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { useTheme } from 'next-themes';

import { ThemeSwitcher } from "@/components/ThemeSwitcher";

import Image from 'next/image'
import logoOscuro from "@/images/logo_oscuro.png"
import logoClaro from "@/images/logo_claro.png"

import { anton } from "../ui/fonts"

export default function App() {

  const { theme } = useTheme();

  // Determinar la ruta de la imagen según el tema
  const logoSrc = theme === 'dark' ? logoOscuro : logoClaro;

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} isBordered isBlurred>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={logoSrc} className=" w-36 h-10" alt="logo" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className={`${anton.className} antialiased hidden sm:flex gap-4`} justify="center">
        <NavbarItem>
          <Link color="primary" href="/">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/#servicios" color="primary">
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="/contacto">
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
          <Link color="foreground" href="/">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#servicios">
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contacto">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
