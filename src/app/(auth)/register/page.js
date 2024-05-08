"use client";

import Image from "next/image";
import mockupLogin from "/public/login-bro.png";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const registerHandler = (e) => {
    e.preventDefault();
    const url = process.env.NEXT_PUBLIC_API_URL;
    fetch(url + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        if (!data.success) {
          console.log("Login Gagal");
        }
        console.log(data);
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-7/12 h-4/6 bg-white shadow-lg border border-gray-200 rounded-lg">
          <div className="grid grid-cols-2 h-full items-center justify-center p-7">
            <div className="h-full mx-auto">
              <Image src={mockupLogin} alt="mockup" width={400} />
            </div>
            <div className="p-3 h-full content-center justify-center">
              <h1 className="text-center max-w-sm mx-auto text-4xl font-semibold text-black">Sign Up</h1>
              <form className="p-3 max-w-sm mx-auto mt-2" onSubmit={registerHandler}>
                <div className="mb-5">
                  <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="name"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="name@gmail.com"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                    Your password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="********"
                    required
                  />
                </div>
                <button type="submit" className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
