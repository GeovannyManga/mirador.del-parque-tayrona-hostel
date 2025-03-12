"use client";
import dynamic from "next/dynamic";
import NavBar from "../components/NavBar";
import PhotoCarousel from "../components/PhotoCarousel";
import Rooms from "../components/Rooms";
import Footer from "../components/Footer";
import Galeria from "../components/Galeria";
import RoomDisplay from "../components/RoomDisplay";

// Carga dinámica del mapa solo en el cliente
const Maps = dynamic(() => import("../components/Maps"), { ssr: false});

export default function Home() {
 
  return (
    <div>
      <NavBar  />
      <PhotoCarousel />
      <Rooms />
      <RoomDisplay></RoomDisplay>
      <Maps /> {/* Muestra el componente Maps cargado dinámicamente */}
      <Galeria></Galeria>
      <Footer/>
    </div>
  );
}
