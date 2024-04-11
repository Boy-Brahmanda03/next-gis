"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ zoomSize }) {
  const position = [
    { pos: [-8.79106, 115.1768667], namaRs: "RS" },
    { pos: [-8.7903559, 115.1742566], namaRs: "RS" },
    { pos: [-8.8041261, 115.2172655], namaRs: "RS" },
  ];

  const markerIcon = L.icon({
    iconUrl: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png",
    iconSize: [40, 43],
  });

  return (
    <>
      <MapContainer className="h-full rounded-xl" center={[-8.4095, 115.1889]} zoom={zoomSize} scrollWheelZoom={false}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MarkerClusterGroup>
          {position.map((marker, index) => (
            <Marker key={index} position={marker.pos} icon={markerIcon}>
              <Popup>{marker.namaRs}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
}
