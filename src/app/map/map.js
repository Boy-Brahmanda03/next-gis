"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import Image from "next/image";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRouter } from "next/navigation";

export default function Map({ zoomSize, data }) {
  const router = useRouter();
  const handleClick = (id) => {
    router.push("hospital/detail/" + id);
  };
  let position = [];
  if (data != null) {
    position = data.data;
    console.log(data);
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
              <Popup className="w-64">
                <h1 className="text-lg font-bold">{marker.name}</h1>
                <Image
                  className="aspect-video w-auto object-cover object-center mt-2 rounded-xl"
                  src={marker.gambar ? `data:image/jpeg;base64,${marker.gambar}` : marker.gambar}
                  width={200}
                  height={200}
                  alt={marker.name}
                  onClick={() => handleClick(marker.id)}
                />
                <p className="text-sm text-gray-300 font-medium">Click image for details</p>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
}
