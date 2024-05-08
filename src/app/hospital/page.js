import Navbar from "../navbar";
import Image from "next/image";

async function getData() {
  if (typeof window !== "undefined") {
    // Client-side-only code
    const token = localStorage.getItem("token");
    console.log(token);
  }
  const url = "http://gis_2105551149.local.net/api";
  const response = await fetch(url + "/hospital", {
    headers: {
      Authorization: "Bearer",
    },
  });
  const data = await response.json();
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
