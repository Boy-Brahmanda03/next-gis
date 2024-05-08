import Navbar from "../navbar";
import Image from "next/image";

export default function Hospital() {
  let datas = null;
  fetch(url + "/hospital")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      datas = data;
      console.log(data.data);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <>
      <Navbar />
      <h1 className="px-24 p-8 font-bold text-3xl">Hospital List</h1>
      <div className="grid grid-cols-4 mx-auto px-24 gap-5">
        {datas.map((data) => (
          <div key={data.id}>
            <div className="h-fit grid grid-cols-1 p-8 shadow-md rounded-lg border border-gray-200 hover:shadow-lg">
              <Image src={bimc} height={200} alt="bimc" />
              <p className="mt-5 mb-3 text-xl font-semibold border border-black">{data.name}</p>
              <p>{data.alamat}</p>
              <p>{data.lat}</p>
              <p>{data.lng}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
