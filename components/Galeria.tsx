"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../components/LanguajeProvider";

export default function Galeria() {
  const images = Array.from({ length: 60 }, (_, i) => `/fotos/${i + 1}.jpg`);
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const showMoreImages = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 12, images.length));
  };
  const {t} = useLanguage()
  return (
    <div className="p-6 sm:p-12 bg-white text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6">{t.galeria.title}</h2>
      <p className="text-base text-gray-600 max-w-xl mx-auto mb-10">
        {t.galeria.descripcion}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {images.slice(0, visibleCount).map((src, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 aspect-square cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              className="w-full h-full object-cover"
              alt={`Foto ${index + 1}`}
              width={500}
              height={500}
              src={src}
            />
          </div>
        ))}
      </div>
      {visibleCount < images.length && (
        <button
          onClick={showMoreImages}
          className="mt-8 px-6 py-2 bg-gray-900 text-white text-sm font-medium rounded-full shadow-md hover:bg-gray-700 transition-colors duration-300"
        >
          {t.galeria.mas}
        </button>
      )}

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
          <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-4xl w-full flex flex-col items-center">
            <button 
              className="absolute top-3 right-3 bg-gray-900 text-white rounded-full p-2 shadow-md hover:bg-gray-700 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <Image
              className="w-full h-auto max-h-[85vh] object-contain rounded-md"
              alt="Imagen ampliada"
              width={1200}
              height={1200}
              src={selectedImage}
            />
          </div>
        </div>
      )}
    </div>
  );
}