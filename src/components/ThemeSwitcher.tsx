// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

import { FaMoon } from "react-icons/fa6";
import { IoMdSunny } from "react-icons/io";

// export function ThemeSwitcher() {
//   const [mounted, setMounted] = useState(false)
//   const { theme, setTheme } = useTheme()

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) return null

//   return (
//     <div className="flex gap-5">
//       <button onClick={() => setTheme('light')}>Claro</button>
//       <button onClick={() => setTheme('dark')}>Oscuro</button>
//     </div>
//   )
// };

// import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme === "dark" ? (
        <Button variant="bordered" color="primary" isIconOnly onClick={() => setTheme('light')}><IoMdSunny /></Button>
      ) : (
        <Button variant="bordered" color="primary" isIconOnly onClick={() => setTheme('dark')}><FaMoon /></Button>
      )}
    </div>
  );
};