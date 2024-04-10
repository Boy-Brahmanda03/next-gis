import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white border-gray-200 pb-2 shadow-md">
        <div className="max-w-screen-xl h-20 flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Discover Hospitals</span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a href="/" className="block py-2 px-3 text-black hover:text-sky-800 md:p-0" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-black hover:text-sky-800 md:p-0" aria-current="page">
                  Hospital
                </a>
              </li>
              <li>
                <a href="/map" className="block py-2 px-3 text-black hover:text-sky-800 md:p-0" aria-current="page">
                  Maps
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-black hover:text-sky-800 md:p-0" aria-current="page">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-black hover:text-sky-800 md:p-0" aria-current="page">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="space-x-3 font-medium text-sm">
            <Link href="/login">
              <button className="w-20 h-11 shadow-sm rounded-lg border border-gray-200 hover:shadow-lg cl"> Login </button>
            </Link>
            <button className="w-20 h-11 shadow-sm bg-blue-300 rounded-lg border border-gray-200"> Sign Up </button>
          </div>
        </div>
      </nav>
    </>
  );
}