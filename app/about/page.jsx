"use client"
import React from 'react';
import Image from 'next/image';
import NavBar from '../../components/NavBar';
import Footer from "../../components/Footer";
import { useLanguage } from "../../components/LanguajeProvider";

export default function About() {
  const {t}= useLanguage()
  return (
    <div>
      {/* NavBar */}
      <NavBar />

      {/* About Section */}
      <section
        className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16 pt-28"
        id="about"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section: Image */}
          <div className="relative w-full h-80 md:h-[500px]">
            <Image
              src="/hostal.jpg"
              alt="Vista del hostal Eden Tayrona Park"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section: Content */}
          <div className="flex flex-col space-y-4 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t.about.welcome}
            </h2>
            <p className="text-lg leading-relaxed">
              {t.about.ubicacion}
            </p>
            <p className="text-lg leading-relaxed">
              {t.about.uno} <strong>Felix Casimiro</strong>, {t.about.dos}{' '}
              <strong>{t.about.tres}</strong>, {t.about.cuatro}
            </p>
            <p className="text-lg leading-relaxed">
              {t.about.cinco}
            </p>
            <a
              href="https://wa.me/573004123014?text=Hola Mirador Del Parque Tayrona Hostel%2C%20estoy%20interesado%20en%20su%20servicio%20de%20alojamiento%20¿podrian%20darme%20mas%20informacion?"
              className="text-center mt-4 inline-block bg-green-600 text-white py-4 px-8 rounded-lg shadow-md hover:bg-green-700 transition"
            >
              {t.about.seis}
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
