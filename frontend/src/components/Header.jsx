import { useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi"; // arrow icon

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="w-full bg-white shadow-sm border border-b-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-900 flex items-center gap-1">
          <img src="/logo.png" className="h-[80px]" alt="Logo" />
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex space-x-8 items-center font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href='/contact' className="hover:text-blue-600">Contact</Link>

          {/* Service dropdown */}
          <div
            className="relative flex items-center gap-1"
            onMouseEnter={() => setOpenDropdown("service")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center hover:text-blue-600">
              Service
              <FiChevronDown
                className={`ml-1 transition-transform duration-300 ${
                  openDropdown === "service" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openDropdown === "service" && (
              <div className="absolute left-0 top-3 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-20">
                <Link href="/service1" className="block px-4 py-2 hover:bg-gray-100">Service 1</Link>
                <Link href="/service2" className="block px-4 py-2 hover:bg-gray-100">Service 2</Link>
              </div>
            )}
          </div>

          {/* Pages dropdown */}
          <div
            className="relative flex items-center gap-1"
            onMouseEnter={() => setOpenDropdown("pages")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center hover:text-blue-600">
              Pages
              <FiChevronDown
                className={`ml-1 transition-transform duration-300 ${
                  openDropdown === "pages" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openDropdown === "pages" && (
              <div className="absolute left-0 top-3 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-20">
                <Link href="/blogs" className="block px-4 py-2 hover:bg-gray-100">Blogs</Link>
                <Link href="/book-appointment" className="block px-4 py-2 hover:bg-gray-100">Book Appointment</Link>
                <Link href="/404" className="block px-4 py-2 hover:bg-gray-100">404</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Auth buttons */}
        <div className="flex space-x-4 items-center">
          <Link href="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
          <Link
            href="/signup"
            className="border border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
