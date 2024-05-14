"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import dynamic from "next/dynamic";
import { getHospital } from "@/lib/api";
import { useRouter } from "next/navigation";

const MyMap = dynamic(() => import("../../components/map"), { ssr: false });

export default function MapPage() {
  const [token, setToken] = useState();
  const [hospitals, setHospitals] = useState();
  const r = useRouter();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    getHospital(token)
      .then((data) => {
        console.log(data);
        setHospitals(data);
      })
      .catch(() => {
        r.push("/");
      });
  }, [token, r]);

  return (
    <>
      <div>
        <Navbar token={token} />
        <div className="w-full h-screen">{hospitals && hospitals.success ? <MyMap zoomSize={9.5} data={hospitals} /> : <p className="px-24 py-9">Login dulu cuy</p>}</div>
      </div>
    </>
  );
}
