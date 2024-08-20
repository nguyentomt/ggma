'use client'
import Link from "next/link";
import Image from "next/legacy/image";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  const toggleMobileMenu = () => {
    setOpen(!isOpen);
  };

  // hide NavBar on scroll down
  if (typeof window !== 'undefined') {
    let pos1 = window.scrollY;
    window.onscroll = function () {
      let pos2s = window.scrollY;
      const navElement = document.getElementById("nav")
      if (navElement && pos1 > pos2s) {
        navElement.classList.remove("nav-hidden");
      } else if (navElement) {
        navElement.classList.add("nav-hidden");
      }
      pos1 = pos2s;
    };
  }

  return (
    <div id="nav" className={`z-50 sticky flex justify-around items-center top-0 text-base md:text-2xl ${isOpen ? `bg-yellow-100` : `bg-gold`}`}>

      <div id="logo" className="w-36">
        <Link href="/"><Image src="/logo.png" layout="responsive" className="image" height={258} width={368} alt="main-image" /></Link>
      </div>


      {/* Hamburger menu */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          {isOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>


      {/* Menu Items */}
      <div className="bg-transparent hidden md:block transition duration-400">
        <div className="flex flex-col md:flex-row items-center">
          <Link
            id="navHome"
            href="/"
            className="px-5 py-2 mx-1 rounded-full transition duration-500 hover:bg-blue-100 hover:text-blue-900"
          >
            Home
          </Link>
          <Link
            id="navContact"
            href="/contact"
            className="px-5 py-2 mx-1 rounded-full transition duration-500 hover:bg-blue-100 hover:text-blue-900"
          >
            Contact
          </Link>
          <Link
            id="navGallery"
            href="/gallery"
            className="px-5 py-2 mx-1 rounded-full transition duration-500 hover:bg-blue-100 hover:text-blue-900"
          >
            Gallery
          </Link>
        </div>
      </div>

      {/* When menu toggled open */}
      {isOpen && (
        <div className="opacity-90 fixed w-screen h-screen text-3xl top-24 z-40 left-1/2 transform -translate-x-1/2 bg-yellow-100 md:hidden">
          <div className="flex flex-col items-center">
            <Link
              id="navHome"
              href="/"
              onClick={toggleMobileMenu}
              className="px-5 py-2 mx-1 rounded-full transition duration-500 hover:bg-blue-100 hover:text-blue-900"
            >
              Home
            </Link>
            <Link
              id="navArchive"
              href="/archive"
              onClick={toggleMobileMenu}
              className="px-5 py-2 mx-1 rounded-full transition duration-500 hover:bg-blue-100 hover:text-blue-900"
            >
              Archive
            </Link>
            <Link
              id="navAffiliate"
              href="/affiliate"
              onClick={toggleMobileMenu}
              className="px-5 py-2 mx-1 rounded-full transition duration-500 hover:bg-blue-100 hover:text-blue-900"
            >
              Affiliate
            </Link>
            <Link
              id="navGear"
              href="/#merch"
              onClick={toggleMobileMenu}
              className="px-5 py-2 mx-1 rounded-full transition duration-500 hover:bg-blue-100 hover:text-blue-900"
            >
              Gear
            </Link>
            <Link
              id="navMap"
              href="/map"
              onClick={toggleMobileMenu}
              className="border border-white rounded-full px-5 py-2 mx-1 transition duration-500 hover:bg-blue-100 hover:text-blue-900"
            >
              Map
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
