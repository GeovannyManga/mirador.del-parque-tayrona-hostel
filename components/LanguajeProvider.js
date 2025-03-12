"use client"; // Esto es obligatorio en Next.js 13+ para los contextos

import { createContext, useState, useContext } from "react";
import { locales } from "../app/locales"; // Ajusta la ruta si es necesario

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const switchLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t: locales[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
