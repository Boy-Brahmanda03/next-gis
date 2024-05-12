"use client";

import Navbar from "@/app/navbar";
import Form from "./form";
import { useEffect, useState } from "react";

export default function DetailPage({ params }) {
  const [token, setToken] = useState();
  const [hospital, setHospital] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    const id = params.id;
    fetch("http://gis_2105551149.local.net/api/hospital/" + id, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
      cache: "no-store",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setHospital(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
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
