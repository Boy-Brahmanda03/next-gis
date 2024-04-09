"use client";
import Navbar from "./navbar";
import Hero from "./hero";
import Footer from "./footer";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="w-1/2 h-96 border border-black">
        <MapContainer className="h-full" center={[-8.4095, 115.1889]} zoom={8} scrollWheelZoom={false}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      </div>
    </>
  );
}
