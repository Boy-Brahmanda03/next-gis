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
  const url = "http://gis_2105551149.local.net/api";
  useEffect(() => {
    fetch(url + "/hospital", {
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
