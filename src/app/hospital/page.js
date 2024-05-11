import Navbar from "../navbar";
import Card from "@/app/hospital/card";
import Button from "./button";

async function getData() {
  try {
    const url = process.env.NEXT_SERVER_PUBLIC_API_URL;
    const res = await fetch(url + "/hospital", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Error fetching data!");
    }
    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

export default async function Hospital() {
  const hospitals = await getData();
  console.log(hospitals);
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        <h1 className="flex-1 px-24 p-8 font-bold text-3xl">Hospital List</h1>
        <div className="px-24 p-8">
          <Button className="w-20 h-11 shadow-sm rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-2xl" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-24 py-4">
        <Card data={hospitals} />
      </div>
    </>
  );
}
