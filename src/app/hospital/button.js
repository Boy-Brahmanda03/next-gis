"use client";

import { useRouter } from "next/navigation";

export default function Button({ className }) {
  const r = useRouter();
  const clickHandler = () => {
    r.push("/hospital/add");
  };
  return (
    <button className={className} onClick={clickHandler}>
      + Add
    </button>
  );
}
