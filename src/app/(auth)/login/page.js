"use client";

import Image from "next/image";
import mockupLogin from "/public/login-bro.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showErr, setErr] = useState(false);
  const router = useRouter();

  const loginHandler = async (e) => {
    e.preventDefault();
    setErr(false);
    const loginData = await login(email, password);
    console.log(loginData);
    if (!loginData.success) {
      setErrMsg(loginData.message);
      setErr(true);
    } else {
      alert(loginData.message);
      localStorage.setItem("token", loginData.data.token);
      window.location.href = "/";
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-7/12 h-4/6 bg-white shadow-lg border border-gray-200 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center justify-center p-7">
            <div className="h-full mx-auto hidden lg:block">
              <Image src={mockupLogin} alt="mockup" width={400} priority={true} />
            </div>
            <div className="p-3 h-full content-center justify-center">
              <h1 className="text-center max-w-sm mx-auto text-4xl font-semibold text-black">Login</h1>
              <form className="p-3 max-w-sm mx-auto mt-2" onSubmit={loginHandler}>
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
                {showErr && <p className="text-red-500 text-sm font-medium">{errMsg}</p>}
                <button type="submit" className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
