import Navbar from "../navbar";
import dynamic from "next/dynamic";

const MyMap = dynamic(() => import("./map"), { ssr: false });

async function getData() {
  const url = process.env.NEXT_SERVER_PUBLIC_API_URL;
  const res = await fetch(url + "/hospital", {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error fetching data!");
  }
  return res.json();
}

export default async function MapPage() {
  const data = await getData();
  console.log(data);
  return (
    <>
      <div>
        <Navbar />
        <div className="w-full h-screen p-20">
          <MyMap zoomSize={9.5} data={data} />
        </div>
      </div>
    </>
  );
}
