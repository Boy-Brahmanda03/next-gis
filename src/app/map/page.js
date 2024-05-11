"use client";

import { useEffect, useState } from "react";
import Navbar from "../navbar";
import dynamic from "next/dynamic";

const MyMap = dynamic(() => import("./map"), { ssr: false });

async function getData() {
  const url = process.env.NEXT_SERVER_PUBLIC_API_URL;
  const res = await fetch(url + "/hospital", {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error fetching data!");
  }
  return res.json();
}

export default function MapPage() {
  const [token, setToken] = useState();
  const [hospitals, setHospitals] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/hospital", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
      cache: "no-store",
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setHospitals(data);
      });
  }, [token]);

  return (
    <>
      <div>
        <Navbar />
        <div className="w-full h-screen p-20">{hospitals && hospitals.success ? <MyMap zoomSize={9.5} data={hospitals} /> : <p>salah cuy</p>}</div>
      </div>
    </>
  );
}
