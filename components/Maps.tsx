"use client"; // Marca que este archivo es solo para el cliente

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import cabana from "../public/cabana.webp";
import "leaflet/dist/leaflet.css";
import { useLanguage } from "./LanguajeProvider";

const Map = () => {
  const {t} = useLanguage()
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Este bloque asegura que solo se ejecuta en el cliente
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !mapContainer.current) return;

    // Inicializamos el mapa solo si estamos en el cliente
    const initializedMap = L.map(mapContainer.current, {
      attributionControl: false,
    }).setView([11.290103615228595, -73.91138804059489], 13);

    // Cargamos el TileLayer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(initializedMap);

    // Creamos el ícono personalizado
    const cabanaIcon = L.icon({
      iconUrl: cabana.src,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    // Agregamos el marcador
    L.marker([11.2899303, -73.9123437], { icon: cabanaIcon })
      .bindTooltip("Mirador Del Parque Tayrona Hostel")
      .addTo(initializedMap);

    // Limpiamos el mapa cuando el componente se desmonte
    return () => {
      initializedMap.remove();
    };
  }, [isClient]); // Solo se ejecuta cuando `isClient` es true

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            {t.mapa.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4">
           {t.mapa.descubre}{" "}
            <strong>Mirador Del Tayrona Hostel</strong> {t.mapa.descubre2}
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="lg:w-1/2 text-gray-700">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              {t.mapa.como}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              {t.mapa.description}
            </p>
          </div>

          <div className="lg:w-1/2">
            <div
              ref={mapContainer}
              style={{
                padding: 0,
                margin: 0,
                width: "100%",
                height: "300px", // Altura del mapa
                borderRadius: "12px",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                zIndex: 1,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
