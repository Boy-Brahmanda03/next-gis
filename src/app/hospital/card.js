"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Card({ data }) {
  const router = useRouter();
  const hospitals = data;
  const handleClick = (id) => {
    router.push("hospital/detail/" + id);
  };

  return (
    hospitals &&
    hospitals.data.map((data) => (
      <div key={data.id} onClick={() => handleClick(data.id)}>
        <div className="flex flex-col w-60 justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60 hover:shadow-2xl">
          <Image className="aspect-video w-auto rounded-t-2xl object-cover object-center" src={data.gambar ? `data:image/jpeg;base64,${data.gambar}` : bimc} height={300} width={200} alt="${data.nama}" />
          <div class="h-40 p-4">
            <small class="text-blue-400 text-xs">{data.tipe ? "Tipe " + data.tipe : "Tipe"}</small>
            <h1 class="text-2xl font-medium text-slate-600 pb-2">{data.name}</h1>
            <p class="text-sm tracking-tight font-light text-slate-400 leading-6 truncate">{data.alamat}</p>
          </div>
        </div>
      </div>
    ))
  );
}
