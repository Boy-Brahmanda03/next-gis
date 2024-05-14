"use client";

import Image from "next/image";
import mockupLogin from "/public/login-bro.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "@/lib/api";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const router = useRouter();

  const registerHandler = async (e) => {
    e.preventDefault();
    setErrEmail("");
    setErrPassword("");
    const registerData = await register(name, email, password);
    if (!registerData.success) {
      const { email = [], password = [] } = registerData.message;
      if (!email == []) {
        setErrEmail(email);
      }
      if (!password == []) {
        setErrPassword(password);
      }
      return false;
    }
    alert(registerData.message);
    router.push("/login");
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-3/5 grid lg:grid-cols-2 sm:grid-cols-1  gap-2 items-center justify-center bg-white shadow-lg border border-gray-200 rounded-2xl p-8">
          <div className="flex items-center justify-center">
            <Image src={mockupLogin} alt="mockup" width={400} className="hidden lg:block" />
          </div>
          <div className="content-center justify-center">
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
                {errEmail && <p className="text-red-500 text-sm font-medium">{errEmail}</p>}
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
                {errPassword && <p className="text-red-500 text-sm font-medium">{errPassword}</p>}
              </div>
              <button type="submit" className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
                Sign Up
              </button>
              <Link href="/login">
                <p className="pt-4 text-sm font-regular text hover:to-blue-500">Already have account?</p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
