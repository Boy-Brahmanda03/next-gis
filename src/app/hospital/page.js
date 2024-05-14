"use client";

import Card from "@/app/hospital/card";
import Button from "./button";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { getHospital } from "@/lib/api";

export default function Hospital() {
  const [token, setToken] = useState();
  const [hospitals, setHospitals] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    getHospital(token).then((data) => {
      console.log(data);
      setHospitals(data);
    });
  }, [token]);

  console.log(hospitals);

  return (
    <>
      <Navbar token={token} />
      <div className="flex flex-wrap">
        <h1 className="flex-1 px-24 p-8 font-bold text-3xl">Hospital List</h1>
        <div className="px-24 p-8">
          <Button className="w-20 h-11 shadow-sm rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-2xl" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-24 py-4">{hospitals && hospitals.success == true ? <Card data={hospitals} /> : <p>Salah cuy</p>}</div>
    </>
  );
}
