'use client';
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { useLanguage } from "../components/LanguajeProvider";

export default function NavBar() {
  const { language, switchLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleScrollToSection = () => {
    const target = document.querySelector("#servicios") as HTMLElement | null;
    if (target) {
      const offset = -40;
      window.scrollTo({ top: target.offsetTop + offset, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white/50 backdrop-blur-lg shadow-lg border-b border-white/20 z-50 flex items-center justify-between px-6 md:px-10">
      {/* Logo */}
      <div className="text-black font-bold text-lg">
        <span>Mirador Del Parque</span>
        <span className="block text-sm">Tayrona Hostel</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-black">
        <li className="hover:text-gray-700"><Link href="/">{t.menu.home}</Link></li>
        <li className="hover:text-gray-700"><Link href="/#servicios" onClick={handleScrollToSection}>{t.menu.servicios}</Link></li>
        <li className="hover:text-gray-700"><Link href="/about">{t.menu.sobre}</Link></li>
        <li className="hover:text-gray-700"><Link href="https://wa.me/3508676834?text=Hola%20Eden%20Tayrona%20Park%2C%20estoy%20interesado%20en%20su%20servicio%20de%20alojamiento%20¿podrian%20darme%20mas%20informacion?">{t.menu.contacto}</Link></li>
      </ul>

      {/* Language Selector */}
      <select
        onChange={(e) => switchLanguage(e.target.value)}
        className="hidden md:block bg-white/80 text-black p-2 rounded-md border border-white/40 shadow-sm focus:outline-none"
        defaultValue={language}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 bg-white/40 text-gray-700 rounded-md"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-700 text-white flex flex-col items-center py-4 space-y-4 z-40">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:bg-gray-600 w-full text-center py-2">{t.menu.home}</Link>
          <Link href="/#servicios" onClick={() => { handleScrollToSection(); setMenuOpen(false); }} className="hover:bg-gray-600 w-full text-center py-2">{t.menu.servicios}</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:bg-gray-600 w-full text-center py-2">{t.menu.sobre}</Link>
          <Link href="https://wa.me/573004123014?text=Hola%20Mirador%20Del Parque tayrona%20Hostel%2C%20estoy%20interesado%20en%20su%20servicio%20de%20alojamiento%20¿podrian%20darme%20mas%20informacion?" className="hover:bg-gray-600 w-full text-center py-2">{t.menu.contacto}</Link>
          <select
            onChange={(e) => switchLanguage(e.target.value)}
            className="bg-white text-black p-2 rounded-md border border-white/40 shadow-sm focus:outline-none"
            defaultValue={language}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
      )}
    </nav>
  );
}
