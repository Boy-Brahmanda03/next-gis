"use client";

import Card from "@/app/hospital/card";
import Button from "./button";
import { useEffect, useState } from "react";
import Navbar from "../navbar";

export default function Hospital() {
  const [token, setToken] = useState();
  const [hospitals, setHospitals] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  console.log(token);
  useEffect(() => {
    fetch("http://localhost:8000/api/hospital", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      cache: "no-store",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setHospitals(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
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
