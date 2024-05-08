"use client";
import Navbar from "../navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import bimc from "/public/bimc.png";

export default function Hospital() {
  const [data, setData] = useState(null);
  const url = process.env.NEXT_PUBLIC_API_URL;
  useEffect(() => {
    fetch(url + "/hospital")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.data);
        if (data == null) {
          console.log("data kosong");
        }
        console.log(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Navbar />
      <h1 className="px-24 p-8 font-bold text-3xl">Hospital List</h1>
      <div className="grid grid-cols-4 mx-auto px-24 gap-5">
        {data &&
          data.map((data) => (
            <div key={data.id}>
              <div className="h-fit grid grid-cols-1 p-8 shadow-md rounded-lg border border-gray-200 hover:shadow-lg">
                <Image src={data.gambar ? data.gambar : bimc} height={200} alt="bimc" />
                <p className="mt-5 mb-3 text-xl font-semibold">{data.name}</p>
                <p>{data.alamat}</p>
                <p>{data.lat}</p>
                <p>{data.lng}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
