"use client";
import Link from "next/link";
import Image from "next/legacy/image";
import { useState } from "react";

export default function AltNav() {
  const [isOpen, setOpen] = useState(false);
  const [item, setItem] = useState(0);

  const toggleMobileMenu = () => {
    setOpen(!isOpen);
  };

  const navItems = [
    {
      title: "HOME",
      href: "/",
    },
    {
      title: "PROGRAM",
      href: "#program",
    },
    {
      title: "CONTACT",
      href: "/contact",
    },
    {
      title: "GALLERY",
      href: "/gallery",
    },
  ];

  // hide NavBar on scroll down
  if (typeof window !== "undefined") {
    let pos1 = window.scrollY;
    window.onscroll = function () {
      let pos2s = window.scrollY;
      const navElement = document.getElementById("nav");
      if (navElement && pos1 > pos2s) {
        navElement.classList.remove("nav-hidden");
      } else if (navElement) {
        navElement.classList.add("nav-hidden");
      }
      pos1 = pos2s;
    };
  }

  return (
    
    <div id="nav"
      className={`z-50 flex justify-around items-center top-0 text-base md:text-lg ${
        isOpen ? `` : ``
      }`}
    >
      {/* Hamburger menu */}
      <div className="w-full flex justify-center gap-8 items-center md:hidden">
        <Image src="/logo.png" width="120" height="90" alt="Montessori Logo" />
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
      <div className="hidden md:block transition duration-400">
      <Link href="/" onClick={()=>setItem(0)} ><Image src="/h_banner.png" height="144" width="930" alt="banner" /></Link>
        
        <div id="nav" className="flex flex-col md:flex-row items-center sticky justify-center">
          {navItems.map((e, i) => {
            return (
                
                <Link key={i} id={e.title} href={e.href} onMouseDown={()=>setItem(i)}
                className={`px-10 py-1 text-white font-extrabold transition bg-blue-300 duration-500 ${
                    item == i ? "bg-blue-700" : "bg-blue-500"
                  } hover:bg-blue-100 hover:text-blue-900`}>
                  {e.title}
                </Link>
              
            );
          })}
        </div>
      </div>

      {/* When menu toggled open */}
      {isOpen && (
        <div className="opacity-90 fixed w-screen h-screen text-3xl top-24 z-40 left-1/2 transform -translate-x-1/2 bg-yellow-100 md:hidden">
          <div className="flex flex-col items-center">
          {navItems.map((e, i) => {
            return (
                
                <Link key={i} id={e.title} href={e.href} onClick={toggleMobileMenu}
                className={`px-10 py-1 text-gray-700 font-extrabold  duration-500 ${
                    item == i ? "underline" : ""
                  } hover:bg-blue-100 hover:text-blue-900`}>
                  {e.title}
                </Link>
              
            );
          })}
          </div>
        </div>
      )}
    </div>
    
  );
}
