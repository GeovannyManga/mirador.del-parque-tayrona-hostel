'use client'

import React from 'react';
import Image from "next/image";
import comida from "../public/comida.webp";
import masaje from "../public/masaje.webp";
import habitacion from "../public/habitacion.webp";
import { useLanguage } from "./LanguajeProvider";

export default function Rooms() {
  const {t} = useLanguage() 
  return (
    <section id='servicios'  className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          {t.servicios.descubre}
        </h2>
        <p className="text-lg text-gray-600 mb-12">
         {t.servicios.comodidad}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tarjeta 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={comida}
              alt="Habitación 1"
              className="w-full h-64 object-cover"
              width={800}
              height={500}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.servicios.restaurante}</h3>
              <p className="text-gray-600 mb-4">
               {t.servicios.descripcion1}
              </p>
              <a
                aria-label='contacta por whatsapp para mas informacion'
                href="https://wa.me/573004123014?text=Hola Mirador Del Parque Tayrona Hostel%2C%20estoy%20interesado%20en%20su%20servicio%20de%20alojamiento%20¿podrian%20darme%20mas%20informacion?"
                className="inline-block px-6 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
              >
                {t.servicios.see}
              </a>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={habitacion}
              alt="Habitación 2"
              className="w-full h-64 object-cover"
              width={1000}
              height={1000}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.servicios.room}</h3>
              <p className="text-gray-600 mb-4">
                {t.servicios.descripcion2}
              </p>
              <a
              aria-label='contacta por whatsapp para mas informacion'
                href="https://wa.me/573004123014?text=Hola Mirador Del Parque Tayrona Hostel%2C%20estoy%20interesado%20en%20su%20servicio%20de%20alojamiento%20¿podrian%20darme%20mas%20informacion?"
                className="inline-block px-6 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
              >
                {t.servicios.see}
              </a>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={masaje}
              alt="Habitación 3"
              className="w-full h-64 object-cover"
              width={1000}
              height={1000}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.servicios.spa}</h3>
              <p className="text-gray-600 mb-4">
             {t.servicios.descripcion3}
              </p>
              <a
              aria-label='contacta por whatsapp para mas informacion'
               href="https://wa.me/573004123014?text=Hola Mirador Del Parque Tayrona Hostel%2C%20estoy%20interesado%20en%20su%20servicio%20de%20alojamiento%20¿podrian%20darme%20mas%20informacion?"
                className="inline-block px-6 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
              >
                {t.servicios.see}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
