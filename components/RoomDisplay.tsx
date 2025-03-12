"use client";

import Image from "next/image";
import { useLanguage } from "./LanguajeProvider";
import { useRouter } from "next/navigation"; // Importación correcta en App Router
import React from "react";

const rooms = [
  {
    id: "1",
    name: "Palmera: Habitación doble",
    price: 140000,
    imageUrl: "/habitacion 1/habitacion 1/habitacion.jpg",
  },
  {
    id: "2",
    name: "Colibrí: Habitación cuadruple",
    price: 140000,
    imageUrl: "/habitacion 2/habitacion 2/habitacion  cuadruple confort.webp",
  },
  {
    id: "3",
    name: "Mirador: Habitación cuadruple",
    price: 140000,
    imageUrl: "/habitacion 3/habitacion 3/_MG_0149.jpg",
  },
  {
    id: "4",
    name: "kogui: Habitación cuadruple",
    price: 140000,
    imageUrl:
      "/habitacion 4/habitacion 4/Imagen de WhatsApp 2025-03-05 a las 12.54.45_161bb2f5.jpg",
  },
  {
    id: "5",
    name: "Sinsonte: Habitación doble",
    price: 140000,
    imageUrl: "/habitacion 5/habitacion 5/_MG_0088.jpg",
  },
  {
    id: "6",
    name: "Azulejos: Habitación doble",
    price: 140000,
    imageUrl:
      "/habitacion 6/habitacion 6/WhatsApp Image 2024-06-06 at 6.12.25 PM (2).jpeg",
  },
  {
    id: "7",
    name: "Pelicano: Habitacion doble privada",
    price: 250000,
    imageUrl:
      "/habitacion 7/habitacion pelicano 7/WhatsApp Image 2025-02-15 at 5.38.52 PM.jpeg",
  },
];

export default function RoomsDisplay() {
  const {t}= useLanguage()
  const router = useRouter(); // Ahora importado desde 'next/navigation'

  const changeRouter = (id:string) => {
    
    router.push(`/rooms/${id}`); // Redirige a la habitación específica
  };
  const handleWhatsAppRedirect = (name:string) => {
    const message = encodeURIComponent(
      `Hola, Mirador Del Parque Tayrona Hostel, estoy interesado en la habitación *${name}*. ¿Podrías darme más información?`
    );
  
    const phoneNumber = "573004123014"; // Reemplázalo con el número correcto
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  

  return (
    <div className="bg-white text-black text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6">{t.habitaciones.title}</h2>
      <div className="bg-white mx-auto p-4 flex flex-wrap justify-center gap-6">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="w-full sm:w-64 md:w-72 lg:w-80 flex flex-col bg-white rounded-lg shadow-md border border-gray-200"
          >
            <div className="relative h-48 w-full">
              <Image
                src={room.imageUrl || "/placeholder.svg"}
                alt={`Vista de ${room.name}`}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold">{room.name}</h3>
            </div>
            <div className="p-4 flex-grow">
              <p className="text-2xl font-bold text-green-600">
                {new Intl.NumberFormat("es-CO", {
                  style: "currency",
                  currency: "COP",
                  minimumFractionDigits: 0,
                }).format(room.price)}
              </p>
            </div>
            <div className="p-4 pt-0 space-y-3">
              <button 
                onClick={()=>changeRouter(room.id)}
                className="w-full py-2 px-4 bg-gray-400 text-white rounded-md font-medium hover:bg-gray-700 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                {t.habitaciones.info}
              </button>
              <button onClick={()=>handleWhatsAppRedirect(room.name)} className="w-full py-2 px-4 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500">
                {t.habitaciones.quiero}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
