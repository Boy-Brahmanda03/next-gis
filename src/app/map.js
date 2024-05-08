"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ zoomSize, data }) {
  let position = []
  if(data == null){
    position = [
      { lat: -8.79106, lng: 115.1768667, name: "RS" },
      { lat: -8.7903559, lng: 115.1742566, name: "RS" },
      { lat: -8.8041261, lng: 115.2172655, name: "RS" },
    ];
  } else {
    position = data
  }

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
            <Marker key={index} position={[marker.lat, marker.lng]} icon={markerIcon}>
              <Popup>{marker.name}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
}
