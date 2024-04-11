import Navbar from "../navbar";
import bimc from "/public/bimc.png";
import Image from "next/image";

export default function Hospital() {
  return (
    <>
      <Navbar />
      <h1 className="px-24 p-8 font-bold text-3xl">Hospital List</h1>
      <div className="grid grid-cols-4 mx-auto px-24 gap-5">
        <div className="h-fit grid grid-cols-1 p-8 shadow-md rounded-lg border border-gray-200 hover:shadow-lg">
          <Image src={bimc} height={200} alt="bimc" />
          <p className="mt-5 mb-3 text-xl font-semibold border border-black">Rumah Sakit BIMC</p>
          <p>Lokasi rumah sakit</p>
          <p>Nomor telp</p>
          <p>email</p>
        </div>
        <div className="h-fit grid grid-cols-1 p-8 shadow-md rounded-lg border border-gray-200 hover:shadow-lg">
          <Image src={bimc} height={200} alt="bimc" />
          <p className="mt-5 mb-3 text-xl font-semibold border border-black">Rumah Sakit BIMC</p>
          <p>Lokasi rumah sakit</p>
          <p>Nomor telp</p>
          <p>email</p>
        </div>
        <div className="h-fit grid grid-cols-1 p-8 shadow-md rounded-lg border border-gray-200 hover:shadow-lg">
          <Image src={bimc} height={200} alt="bimc" />
          <p className="mt-5 mb-3 text-xl font-semibold border border-black">Rumah Sakit BIMC</p>
          <p>Lokasi rumah sakit</p>
          <p>Nomor telp</p>
          <p>email</p>
        </div>
        <div className="h-fit grid grid-cols-1 p-8 shadow-md rounded-lg border border-gray-200 hover:shadow-lg">
          <Image src={bimc} height={200} alt="bimc" />
          <p className="mt-5 mb-3 text-xl font-semibold border border-black">Rumah Sakit BIMC</p>
          <p>Lokasi rumah sakit</p>
          <p>Nomor telp</p>
          <p>email</p>
        </div>
      </div>
    </>
  );
}
