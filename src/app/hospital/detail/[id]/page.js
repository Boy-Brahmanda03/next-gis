import Navbar from "@/app/navbar";
import Form from "./form";

async function getData(id) {
  const url = process.env.NEXT_SERVER_PUBLIC_API_URL;
  const res = await fetch(url + "/hospital/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function DetailPage({ params }) {
  const hospital = await getData(params.id);
  console.log(hospital);
  return (
    <div>
      <Navbar />
      <Form data={hospital.data}/>
    </div>
  );
}
