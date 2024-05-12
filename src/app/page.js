"use client";

import Navbar from "./navbar";
import Hero from "./hero";
import Footer from "./footer";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";

const MyMap = dynamic(() => import("./map/map"), { ssr: false });

export default function Home() {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <>
      <Navbar token={token} />
      <Hero />
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="w-full h-96  lg:col-span-6 pr-5">
          <MyMap zoomSize={8} />
        </div>
        <div className="pl-5 place-self-center lg:col-span-6">
          <h2 className="max-w-2xl mb-5 text-xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl">Discover Hospitals Across the Island!</h2>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Find the nearest hospitals in Bali with ease. Search for locations, services, and other essential information for your and your family health needs.
          </p>
          <Link href={"/map"}>
            <button className="w-fit h-15 rounded-xl bg-blue-300 border border-gray-200 shadow-sm text-center p-3 hover:shadow-md">Start Exploring Now!</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
