"use client";

import Navbar from "../navbar";
import dynamic from "next/dynamic";

const MyMap = dynamic(() => import("../map"), { ssr: false });

export default function MapPage() {
  return (
    <>
      <div>
        <Navbar />
        <div className="w-full h-screen p-20">
          <MyMap zoomSize={9.5} />
        </div>
      </div>
    </>
  );
}
