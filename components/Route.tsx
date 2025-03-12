"use client";

import React from "react";
import { useLanguage } from "./LanguajeProvider";
import dynamic from "next/dynamic";
const Video  = dynamic(() => import("./Video"), {
  ssr: false, // Desactiva el renderizado en servidor (opcional)
  loading: () => <p>Cargando...</p>, // Mensaje mientras carga
});


export default function RouteWithVideos() {

  const {t} = useLanguage()
// Datos de la ruta
const routeSteps = [
  {
    id: 1,
    title: [t.ruta.ruta1][0],
    description: [t.ruta.description1][0],
    videoUrl: "https://youtu.be/KN4NIA1MCFU",
  },
  {
    id: 2,
    title: [t.ruta.ruta2][0],
    description: [t.ruta.description2][0],
    videoUrl: "https://youtu.be/vTvpbw3fpWw",
  },
  {
    id: 3,
    title: [t.ruta.ruta3][0],
    description: [t.ruta.description3][0],
    videoUrl: "https://youtu.be/JvPKJEu6BGM",
  },
];



  const getYouTubeID = (url:string) => {
    const match = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    return match ? match[1] : null;
  };
  
  return (
    <section className="bg-white py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">{t.ruta.ruta}</h1>
          <p className="text-lg text-gray-600 mt-4">
            {t.ruta.pasos}
          </p>
        </div>

        {/* Línea de tiempo */}
        <div className="relative">
          {routeSteps.map((step, index) => (
            <div
              key={step.id}
              className="mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative"
            >
              {/* Línea de conexión */}
              {index < routeSteps.length + 1 && (
                <div className="absolute w-1 h-full bg-gray-300 left-[-0.14rem] sm:left-[-1.18rem] top-0"><div className="absolute w-4 h-4 bg-blue-500 rounded-full left-1/2 transform -translate-x-1/2  top-4 sm:top-1/2"></div></div>
              )}

              {/* Punto de la línea */}
              

              {/* Contenido */}
              <div className="w-full sm:w-1/2 text-center sm:text-left px-4">
                <h2 className="text-xl font-semibold text-gray-800">{step.title}</h2>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>

              {/* Video */}
              <div className="w-full sm:w-1/2 px-4">
              <Video videoUrl={`${getYouTubeID(step.videoUrl)}`} videoTitle={`${step.title}`} />


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
