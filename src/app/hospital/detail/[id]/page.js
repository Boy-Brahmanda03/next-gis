"use client";

import Navbar from "@/components/navbar";
import Form from "./form";
import { useEffect, useState } from "react";
import { getHospitalById } from "@/lib/api";

export default function DetailPage({ params }) {
  const [token, setToken] = useState();
  const [hospital, setHospital] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    const id = params.id;
    getHospitalById(id, token).then((data) => {
      setHospital(data);
      // console.log(data);
    });
  }, [token, params.id]);

  console.log(hospital);
  return (
    <div>
      <Navbar token={token} />
      {hospital && hospital.success == true ? <Form data={hospital.data} /> : <p>Salah cuy</p>}
    </div>
  );
}
