"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import dynamic from "next/dynamic";
import { getHospital } from "@/lib/api";

const MyMap = dynamic(() => import("../../components/map"), { ssr: false });

export default function MapPage() {
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

  return (
    <>
      <div>
        <Navbar token={token} />
        <div className="w-full h-screen">{hospitals && hospitals.success ? <MyMap zoomSize={9.5} data={hospitals} /> : <p>salah cuy</p>}</div>
      </div>
    </>
  );
}
