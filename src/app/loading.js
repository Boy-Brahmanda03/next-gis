"use client";
import { useEffect } from "react";

export default function Loading() {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); // delay selama 2 detik

    return () => clearTimeout(timer);
  }, []);
  // You can add any UI inside Loading, including a Skeleton.
  return <p>Loading..</p>;
}
