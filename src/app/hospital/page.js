import Navbar from "../navbar";
import Image from "next/image";

async function getData() {
  const url = "http://gis_2105551149.local.net/api";
  let data;
  try {
    const response = await fetch(url + "/hospital");
    if (!response.ok) {
      throw new Error("Terjadi kesalahan saat memuat data");
    }
    data = await response.json();
    console.log(data.data);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
  return data;
}

export default function Hospital() {
  const hospital = getData();
  console.log(hospital);
  return (
    <>
      <Navbar />
      <h1 className="px-24 p-8 font-bold text-3xl">Hospital List</h1>
    </>
  );
}
