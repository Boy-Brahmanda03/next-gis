"use client";

import { useEffect, useState } from "react";
import Navbar from "../navbar";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";

const MyMap = dynamic(() => import("../map"), { ssr: false });

export default function MapPage() {
  const [data, setData] = useState(null);
  //get token
  const token = Cookies.get("token");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/hospital", {
      headers: {
        Authorization: "Bearer" + token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  return (
    <>
      <div>
        <Navbar />
        <div className="w-full h-screen p-20">
          <MyMap zoomSize={9.5} data={data} />
        </div>
      </div>
    </>
  );
}
