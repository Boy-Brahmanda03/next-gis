"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import siloam from "/public/siloam.png";

async function processData(formData, url) {
  const res = await fetch(url + "/hospital/", {
    method: "POST",
    body: formData,
  });
  return res.json();
}

export default function AddHospitalPage() {
  const [hospitalName, setHospitalName] = useState(null);
  const [hospitalAddress, setHospitalAddress] = useState(null);
  const [hospitalType, setHospitalType] = useState(null);
  const [hospitalImage, setHospitalImage] = useState(null);
  const [hospitalImageFile, setHospitalImageFile] = useState(null);
  const [hospitalLat, setHospitalLat] = useState(null);
  const [hospitalLng, setHospitalLng] = useState(null);
  const fileInputRef = useRef(null);

  const cancelHandler = () => {
    setHospitalName(null);
    setHospitalAddress(null);
    setHospitalType(null);
    setHospitalImage(null);
    setHospitalLat(null);
    setHospitalLng(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const imageHandler = (e) => {
    const selectedFile = e.target.files[0];
    setHospitalImageFile(selectedFile);
    // Create a preview URL for the selected file
    const url = URL.createObjectURL(selectedFile);
    setHospitalImage(url);
  };

  const saveHandler = async () => {
    const formData = new FormData();
    const url = "http://localhost:8000/api";
    formData.append("h_name", hospitalName);
    formData.append("address", hospitalAddress);
    formData.append("lat", hospitalLat);
    formData.append("lng", hospitalLng);
    formData.append("type", hospitalType);
    formData.append("picture", hospitalImageFile);
    console.log("FormData in saveHandler:", formData);
    const res = await processData(formData, url);
    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="info">
      <div className="flex justify-between mx-16 my-11">
        <div className="flex w-1/2 h-auto container me-11 rounded-2xl shadow-sm">
          <Image className="aspect-video w-auto h-full rounded-2xl object-cover object-center" src={hospitalImage ? hospitalImage : siloam} height={300} width={200} alt="${data.nama}" />
        </div>
        <div className="bg-white shadow-lg rounded-lg flex-1 border border-gray-200">
          <div className="flex mb-3">
            <h2 className="flex-1 font-sans font-bold text-3xl ms-5 my-5 text-black">Hospital Data</h2>
            <button id="edit" className="me-8 justify-end items-end">
              <Image id="img_btn" src="" className="size-6" alt="" width={200} height={200} />
            </button>
          </div>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div className="sm:col-span-2 mx-5">
              <label className="block mb-2 text-lg font-medium">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border border-gray-300text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                value={hospitalName}
                onChange={(e) => {
                  setHospitalName(e.target.value);
                }}
                placeholder="Hospital Name"
                required=""
              />
            </div>
            <div className="sm:col-span-2 mx-5">
              <label className="block mb-2 text-lg font-medium">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                className="border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                value={hospitalAddress}
                onChange={(e) => {
                  setHospitalAddress(e.target.value);
                }}
                placeholder="Hospital Address"
                required=""
              />
            </div>
            <div className="sm:col-span-2 mx-5">
              <label className="block mb-2 text-lg font-medium">Type</label>
              <input
                type="text"
                name="tipe"
                id="tipe"
                className="border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                value={hospitalType}
                onChange={(e) => {
                  setHospitalType(e.target.value);
                }}
                placeholder="Hospital type"
                required=""
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mb-4 sm:mb-5">
            <div className="mx-5">
              <label className="block mb-2 text-lg font-medium">Lat</label>
              <input
                type="text"
                name="tipe"
                id="tipe"
                className="border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                value={hospitalLat}
                onChange={(e) => {
                  setHospitalLat(e.target.value);
                }}
                placeholder="Hospital Lattitude"
                required=""
              />
            </div>
            <div className="mx-5">
              <label className="block mb-2 text-lg font-medium">Longitude</label>
              <input
                type="text"
                name="tipe"
                id="tipe"
                className="border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                value={hospitalLng}
                onChange={(e) => {
                  setHospitalLng(e.target.value);
                }}
                placeholder="Hospital Longitude"
                required=""
              />
            </div>
          </div>
          <div className="sm:col-span-2 mx-5 mb-4 sm:mb-5">
            <label className="block mb-2 text-lg font-medium">Picture</label>
            <input
              type="file"
              className="border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              ref={fileInputRef}
              onChange={imageHandler}
              placeholder="Hospital Image"
              required=""
              accept="image/*"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 px-5 object-center mb-4 sm:mb-5">
            <button className="w-auto h-9 rounded-md bg-red-500 text-white font-semibold" onClick={cancelHandler}>
              Batal
            </button>
            <button className="w-auto h-9 rounded-md bg-green-500 text-white font-semibold" onClick={saveHandler}>
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}