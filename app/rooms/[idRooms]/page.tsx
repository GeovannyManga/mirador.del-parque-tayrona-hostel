"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const rooms = [
  {
    id: "1",
    name: "Palmera: Habitación doble",
    description: "Una cómoda habitación doble con vista a la montaña, ideal para 2 personas. Incluye desayuno.",
    basePrice: 140000,
    extraPersonPrice: 70000,
    maxpersone: 2,
    images: [
      "/habitacion 1/habitacion 1/habitacion.jpg",
      "/habitacion 1/habitacion 1/habitacio 2.jpg",
    ],
  },
  {
    id: "2",
    name: "Colibrí: Habitación cuádruple",
    description: "Ideal para familias, con espacio amplio y confort. Capacidad para hasta 4 personas. Vista a la montaña y desayuno incluido.",
    basePrice: 140000,
    maxpersone: 4,
    extraPersonPrice: 70000,
    images: [
      "/habitacion 2/habitacion 2/habitacion  cuadruple confort.webp",
      "/habitacion 2/habitacion 2/habitacio cuadruple confort.webp",
      "/habitacion 2/habitacion 2/habitacion cuadruple confort.webp",
    ],
  },
  {
    id: "3",
    name: "Mirador: Habitación cuádruple",
    description: "Una espaciosa habitación para 4 personas con una vista espectacular a la montaña. Incluye desayuno.",
    basePrice: 140000,
    maxpersone: 4,
    extraPersonPrice: 70000,
    images: ["/habitacion 3/habitacion 3/_MG_0149.jpg", "/habitacion 3/habitacion 3/_MG_0157.jpg"],
  },
  {
    id: "4",
    name: "Kogui: Habitación cuádruple",
    description: "Habitación tradicional con capacidad para 4 personas, con vistas a la montaña y desayuno incluido.",
    basePrice: 140000,
    maxpersone: 4,
    extraPersonPrice: 70000,
    images: ["/habitacion 4/habitacion 4/Imagen de WhatsApp 2025-03-05 a las 12.54.45_161bb2f5.jpg"],
  },
  {
    id: "5",
    name: "Sinsonte: Habitación doble",
    description: "Cómoda habitación para 2 personas con vista a la montaña. Incluye desayuno.",
    basePrice: 140000,
    maxpersone: 2,
    extraPersonPrice: 70000,
    images: [
      "/habitacion 5/habitacion 5/_MG_0088.jpg",
      "/habitacion 5/habitacion 5/_MG_0079.jpg",
      "/habitacion 5/habitacion 5/_MG_0086.jpg",
      "/habitacion 5/habitacion 5/_MG_0090.jpg",
      "/habitacion 5/habitacion 5/_MG_0111.jpg",
    ],
  },
  {
    id: "6",
    name: "Azulejos: Habitación doble",
    description: "Habitación acogedora para 2 personas con vista a la montaña y desayuno incluido.",
    basePrice: 140000,
    maxpersone: 2,
    extraPersonPrice: 70000,
    images: [
      "/habitacion 6/habitacion 6/WhatsApp Image 2024-06-06 at 6.12.25 PM (2).jpeg",
      "/habitacion 6/habitacion 6/WhatsApp Image 2024-06-06 at 6.12.25 PM (3).jpeg",
      "/habitacion 6/habitacion 6/WhatsApp Image 2024-06-06 at 6.12.25 PM (3).jpeg",
    ],
  },
  {
    id: "7",
    name: "Pelícano: Habitación doble privada",
    description: "Habitación privada con capacidad para 2 personas, con una increíble vista a la montaña y desayuno incluido.",
    basePrice: 250000,
    maxpersone: 2,
    extraPersonPrice: 70000,
    images: [
      "/habitacion 7/habitacion pelicano 7/WhatsApp Image 2025-02-15 at 5.38.52 PM.jpeg",
      "/habitacion 7/habitacion pelicano 7/WhatsApp Image 2025-02-15 at 5.38.53 PM.jpeg",
      "/habitacion 7/habitacion pelicano 7/WhatsApp Image 2025-02-15 at 5.38.56 PM (1).jpeg",
      "/habitacion 7/habitacion pelicano 7/WhatsApp Image 2025-02-15 at 5.38.55 PM.jpeg",
    ],
  },
];

export default function RoomDetail() {
  const params = useParams();
  const room = rooms.find((r) => r.id === params.idRooms);

  const [currentImage, setCurrentImage] = useState(0);
  const [days, setDays] = useState(1);
  const [totalPersons, setTotalPersons] = useState(2); // Mínimo 2 personas

  if (!room) {
    return (
      <div className="text-center text-red-600 font-serif text-xl">
        Habitación no encontrada
      </div>
    );
  }

  // Cálculo del precio
  const extraPersons = totalPersons > 2 ? totalPersons - 2 : 0;
  const totalPrice = (room.basePrice + extraPersons * room.extraPersonPrice) * days;
  const deposit = totalPrice * 0.5; // 50% de anticipo

  // Función para enviar la reserva por WhatsApp
  const handleReserve = () => {
    const message = encodeURIComponent(
      `Hola, quiero reservar la habitación *${room.name}* por *${days} día(s)* para *${totalPersons} persona(s)*.\n\n` +
      `💰 Precio total: COP ${new Intl.NumberFormat("es-CO").format(totalPrice)}\n` +
      `🔹 Deseo apartarla con el 50%: COP ${new Intl.NumberFormat("es-CO").format(deposit)}`
    );

    const phoneNumber = "573004123014"; // Reemplaza con el número de WhatsApp correcto
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-[#f9f4ef] flex flex-col items-center p-6 font-serif">
      <h1 className="text-4xl font-bold text-[#8b5e3c] border-b-2 border-[#c49a6c] pb-2">
        {room.name}
      </h1>
      <p className="text-lg text-[#6b4226] italic mt-2 mb-6">{room.description}</p>

      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Carrusel de imágenes */}
        <div className="relative w-full md:w-1/2 h-[50vh] bg-[#f5e1c8]">
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#8b5e3c] text-white p-2 rounded-full shadow"
            onClick={() => setCurrentImage((currentImage - 1 + room.images.length) % room.images.length)}
          >
            ◀
          </button>
          <Image
            src={room.images[currentImage]}
            alt={room.name}
            layout="fill"
            objectFit="cover"
            className="w-full h-full rounded-lg"
          />
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#8b5e3c] text-white p-2 rounded-full shadow"
            onClick={() => setCurrentImage((currentImage + 1) % room.images.length)}
          >
            ▶
          </button>
        </div>

        {/* Selector de días y personas */}
        <div className="w-full md:w-1/2 p-6 bg-[#fff7eb] flex flex-col justify-center">
          <div className="mb-4">
            <label className="block text-lg text-[#8b5e3c] mb-1">Días de estancia:</label>
            <input
              type="number"
              value={days}
              min="1"
              onChange={(e) => setDays(parseInt(e.target.value))}
              className="w-full border-2 border-[#c49a6c] p-2 text-center bg-[#f5e1c8] text-[#6b4226] rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg text-[#8b5e3c] mb-1">Número total de personas:</label>
            <input
              type="number"
              min="1"
              max={room.maxpersone}
              step="1"
              value={totalPersons}
              onChange={(e) => {
                let value = parseInt(e.target.value) || 1;
                if (value > room.maxpersone) value = room.maxpersone;
                if (value < 1) value = 1;
                setTotalPersons(value);}}
              className="w-full border-2 border-[#c49a6c] p-2 text-center bg-[#f5e1c8] text-[#6b4226] rounded-md"
            />
          </div>
          <p className="text-2xl font-semibold text-[#6b4226] bg-[#e8d3b2] p-3 rounded-lg shadow-md text-center">
            Total: COP {new Intl.NumberFormat("es-CO").format(totalPrice)}
          </p>

          {/* Botón de Reservar */}
          <button
            onClick={handleReserve}
            className="mt-4 bg-[#8b5e3c] text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#6b4226] transition-all duration-300"
          >
            Reservar por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
