import { useState } from "react";
import Link from "next/link";
import {
  FiChevronDown,
  FiMenu,
  FiX,
  FiChevronRight,
} from "react-icons/fi";
import { servicesData } from "../data/servicesData";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" className="h-[55px]" alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center font-medium text-gray-700">
          <Link href="/" className="hover:text-[#0089FF] transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#0089FF] transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#0089FF] transition">
            Contact
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative flex items-center gap-1 cursor-pointer"
            onMouseEnter={() => setOpenDropdown("service")}
            onMouseLeave={() => {
              setOpenDropdown(null);
              setOpenSubmenu(null);
            }}
          >
            <span className="hover:text-[#0089FF] transition flex items-center">
              Services
              <FiChevronDown
                className={`ml-1 transition-transform duration-300 ${
                  openDropdown === "service" ? "rotate-180" : "rotate-0"
                }`}
              />
            </span>
            {openDropdown === "service" && (
              <div className="absolute left-0 top-4 mt-2 bg-white shadow-lg rounded-xl py-2 z-20 border border-gray-100 animate-fadeIn w-64">
                {servicesData.map((category, i) => (
                  <div
                    key={i}
                    className="relative"
                    onMouseEnter={() => setOpenSubmenu(category.title)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    <div className="flex justify-between items-center px-4 py-2 hover:bg-[#F0F8FF] cursor-pointer">
                      {category.title}
                      <FiChevronRight />
                    </div>

                    {openSubmenu === category.title && (
                      <div className="absolute top-0 left-60 ml-2 bg-white shadow-lg rounded-xl py-2 w-64 border border-gray-100 animate-fadeIn">
                        {category.items.map((item, j) => (
                          <Link
                            key={j}
                            href={`/services/${item
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="block px-4 py-2 hover:bg-[#F0F8FF]"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pages Dropdown */}
          <div
            className="relative flex items-center gap-1 cursor-pointer"
            onMouseEnter={() => setOpenDropdown("pages")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <span className="flex items-center hover:text-[#0089FF] transition">
              Pages
              <FiChevronDown
                className={`ml-1 transition-transform duration-300 ${
                  openDropdown === "pages" ? "rotate-180" : "rotate-0"
                }`}
              />
            </span>
            {openDropdown === "pages" && (
              <div className="absolute left-0 top-4 mt-2 w-48 bg-white shadow-lg rounded-xl py-2 z-20 border border-gray-100 animate-fadeIn">
                <Link
                  href="/blogs"
                  className="block px-4 py-2 hover:bg-[#F0F8FF]"
                >
                  Blogs
                </Link>
                <Link
                  href="/book-appointment"
                  className="block px-4 py-2 hover:bg-[#F0F8FF]"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/gallery"
                  className="block px-4 py-2 hover:bg-[#F0F8FF]"
                >
                  Gallery & Media
                </Link>
                <Link
                  href="/404"
                  className="block px-4 py-2 hover:bg-[#F0F8FF]"
                >
                  404
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            href="/login"
            className="text-gray-700 hover:text-[#0089FF] hover:underline transition"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white px-5 py-2.5 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100 px-6 py-4 space-y-4 animate-slideDown">
          <Link
            href="/"
            className="block hover:bg-blue-50 rounded-md px-2 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block hover:bg-blue-50 rounded-md px-2 transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block hover:bg-blue-50 rounded-md px-2 transition"
          >
            Contact
          </Link>

          {/* Services Toggle (Mobile) */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex justify-between items-center w-full font-medium px-2 py-2 hover:bg-blue-50 rounded-md transition"
            >
              <span>Services</span>
              <FiChevronDown
                className={`transition-transform ${
                  mobileServicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="ml-4 mt-2 space-y-2">
                {servicesData.map((category, i) => (
                  <div key={i}>
                    <button
                      onClick={() =>
                        setMobileSubmenuOpen(
                          mobileSubmenuOpen === category.title
                            ? null
                            : category.title
                        )
                      }
                      className="flex justify-between items-center w-full text-left px-2 py-1 hover:bg-blue-50 rounded-md transition"
                    >
                      {category.title}
                      <FiChevronDown
                        className={`transition-transform ${
                          mobileSubmenuOpen === category.title
                            ? "rotate-180"
                            : "rotate-0"
                        }`}
                      />
                    </button>

                    {mobileSubmenuOpen === category.title && (
                      <div className="ml-4 mt-1 space-y-1">
                        {category.items.map((item, j) => (
                          <Link
                            key={j}
                            href={`/services/${item
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="block px-2 py-1 hover:bg-blue-50 rounded-md transition"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pages */}
          <div className="space-y-2">
            <p className="font-medium">Pages</p>
            <Link
              href="/blogs"
              className="block ml-4 hover:bg-blue-50 rounded-md px-2 transition"
            >
              Blogs
            </Link>
            <Link
              href="/book-appointment"
              className="block ml-4 hover:bg-blue-50 rounded-md px-2 transition"
            >
              Book Appointment
            </Link>
            <Link
              href="/404"
              className="block ml-4 hover:bg-blue-50 rounded-md px-2 transition"
            >
              404
            </Link>
          </div>

          {/* Login / Signup Buttons */}
          <div className="pt-2 flex gap-4">
            <Link
              href="/login"
              className="flex-1 text-center border border-gray-200 px-3 py-2 rounded-lg hover:bg-blue-50 transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="flex-1 text-center bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white px-3 py-2 rounded-lg hover:opacity-90 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
