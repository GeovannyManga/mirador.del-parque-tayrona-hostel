"use client";
import React, { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import tayrona1 from "../public/tayrona4.webp";
import tayrona2 from "../public/tayrona2.webp";
import tayrona3 from "../public/tayrona3.webp";
import tayrona4 from "../public/tayrona1.webp";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { useLanguage } from "../components/LanguajeProvider";

const Text  = dynamic(() => import("./Text"), {
  ssr: false, // Desactiva el renderizado en servidor (opcional)
  loading: () => <p>Cargando...</p>, // Mensaje mientras carga
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const PhotoCarousel = () => {
  const {t}= useLanguage()
  const images = [tayrona1, tayrona2, tayrona3, tayrona4];
  const [currentIndex, setCurrentIndex] = useState(1); // Comienza en la primera imagen real
  const [isAnimating, setIsAnimating] = useState(true); // Controla si la animación está habilitada
  const [isTransitioning, setIsTransitioning] = useState(false); // Evita saltos durante la transición
 
  const handleTransitionEnd = () => {
    setIsTransitioning(false); // Permitir nuevos saltos
    if (currentIndex === 0) {
      // Sin animación, mover al último elemento real
      setIsAnimating(false);
      setCurrentIndex(images.length);
    } else if (currentIndex === images.length + 1) {
      // Sin animación, mover al primer elemento real
      setIsAnimating(false);
      setCurrentIndex(1);
    }
  };

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsAnimating(true);
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, [isTransitioning]);  // Dependencias necesarias para la función
  

  const prevSlide = () => {
    if (isTransitioning) return; // Evita múltiples cambios durante la transición
    setIsAnimating(true); // Activar animación
    setIsTransitioning(true); // Bloquear nuevos saltos
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 8000);
  
    // Limpiar el intervalo cuando el componente se desmonte
    return () => {
      clearInterval(intervalId);
    };
  },[nextSlide]);  // Arreglo de dependencias vacío para ejecutarse solo una vez
  
 

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className={`${raleway.className} z-10 absolute  transform w-full h-auto top-80 md:top-1/2 flex flex-col items-center justify-center text-center`}
      >
        <Text text1={t.welcome.bien}/>
        <Text text1={t.welcome.eden}/>
        <a aria-label='contacta por whatsapp para mas informacion' href="https://wa.me/3508676834?text=Hola Eden Tayrona Park%2C%20estoy%20interesado%20en%20su%20servicio%20de%20alojamiento%20¿podrian%20darme%20mas%20informacion?">
          <div className={`flex mt-10 w-40 h-12 bg-green-700 hover:bg-green-900	rounded-lg font-semibold ${raleway.className} items-center justify-center color-white`}>{t.welcome.contact}</div>
        </a>
      </div>

      {/* Slides */}
      <div
        className={`flex ${
          isAnimating ? "transition-transform duration-500" : ""
        }`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {/* Duplicar la última imagen al principio */}
        <div className="w-full h-screen flex-shrink-0 relative">
          <Image
            alt="Duplicate Last"
            src={images[images.length - 1]}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            priority
          />
          {/* Capa oscura */}
          <div className="absolute inset-0 "></div>
        </div>

        {/* Imágenes reales */}
        {images.map((image, index) => (
          <div key={index} className="w-full h-screen flex-shrink-0 relative">
            <Image
              alt={`Slide ${index}`}
              src={image}
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
              priority
            />
            {/* Capa oscura */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
        ))}

        {/* Duplicar la primera imagen al final */}
        <div className="w-full h-screen flex-shrink-0 relative">
          <Image
            alt="Duplicate First"
            src={images[0]}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            priority
          />
          {/* Capa oscura */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
      </div>

      {/* Controles */}
      <button
      aria-label="ir a la anterior foto"
        onClick={prevSlide}
        className="z-20 absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full px-4 py-2"
      >
        ‹
      </button>
      <button
      aria-label="ir a la siguiente foto"
        onClick={nextSlide}
        className="z-20 absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full px-4 py-2"
      >
        ›
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
          aria-label="ir a la foto"
            key={index}
            onClick={() => {
              if (isTransitioning) return; // Bloquear clicks rápidos en los indicadores
              setIsAnimating(true);
              setCurrentIndex(index + 1);
            }}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index + 1 ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
