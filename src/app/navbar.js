"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const ProfileButton = () => {
  return (
    <div className="flex justify-center items-center border border-black">
      <p>Username</p>
      <button className="w-11 h-11 shadow-sm rounded-full border border-gray-200 hover:shadow-lg cl" onClick={Cookies.remove("token")}></button>
    </div>
  );
};

const AuthButton = () => {
  return (
    <div>
      <Link href="/login">
        <button className="w-20 h-11 shadow-sm rounded-lg border border-gray-200 hover:shadow-lg cl"> Login </button>
      </Link>
      <Link href="/register">
        <button className="w-20 h-11 shadow-sm bg-blue-300 rounded-lg border border-gray-200"> Sign Up </button>
      </Link>
    </div>
  );
};
export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const token = Cookies.get("token");
  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [token]);
  return (
    <>
      <nav className="bg-white border-gray-200 pb-2 shadow-md">
        <div className="max-w-screen-xl h-20 flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Discover Hospitals</span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link href="/" className="block py-2 px-3 text-black hover:text-sky-800 md:p-0" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/hospital" className="block py-2 px-3 text-black hover:text-sky-800 md:p-0" aria-current="page">
                  Hospital
                </Link>
              </li>
              <li>
                <Link href="/map" className="block py-2 px-3 text-black hover:text-sky-800 md:p-0" aria-current="page">
                  Maps
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 px-3 text-black hover:text-sky-800 md:p-0" aria-current="page">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 px-3 text-black hover:text-sky-800 md:p-0" aria-current="page">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-x-3 font-medium text-sm">{loggedIn ? ProfileButton() : AuthButton()}</div>
        </div>
      </nav>
    </>
  );
}
