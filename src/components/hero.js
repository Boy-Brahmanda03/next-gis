import Image from "next/image";
import hospital from "/public/hospital.jpg";
import bimc from "/public/bimc.png";
import suryaHusada from "/public/surya-husada.png";
import siloam from "/public/siloam.png";
import kasiIbu from "/public/kasih-ibu.png";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="bg-white">
        <div className="grid max-w-screen-xl px-4 py-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-5 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Welcome to Discover Hospitals Bali!</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Find the nearest hospitals in Bali with ease. Search for locations, services, and other essential information for your and your family health needs.
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image src={hospital} alt="mockup" className="rounded-lg" />
          </div>
        </div>
      </section>
      <section className="p-8 mb-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h4 className="text-xl text-gray-400 text-center font-medium">Our Partners</h4>
          </div>
          <div className="grid grid-cols-2  justify-center  items-center  gap-12 md:grid-cols-3  xl:grid-cols-none xl:flex xl:justify-between">
            <Link href="#" className="flex justify-center items-center">
              <Image src={bimc} alt="BIMC Hospital" height={300} />
            </Link>
            <Link href="#" className="flex justify-center items-center">
              <Image src={suryaHusada} alt="Surya Husada Hospital" height={300} />
            </Link>
            <Link href="#" className="flex justify-center items-center">
              <Image src={siloam} alt="Siloam Hospital" height={300} />
            </Link>
            <Link href="#" className="flex justify-center items-center">
              <Image src={kasiIbu} alt="Kasih Ibu Hospital" height={300} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
