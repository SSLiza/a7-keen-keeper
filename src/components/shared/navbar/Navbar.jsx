"use client";

import MyLink from "./MyLink";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { path: "/", text: "Home", icon: <IoHomeOutline /> },
    { path: "/timeline", text: "Timeline", icon: <MdOutlineWatchLater /> },
    { path: "/stats", text: "Stats", icon: <BsGraphUp /> },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-10 lg:px-20 relative">
      
      {/* Logo */}
      <div className="flex-1">
        <Image src={logoImg} alt="logo" width={120} height={120} />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4">
        {navItems.map((item, index) => (
          <MyLink key={index} href={item.path}>
            {item.icon}
            {item.text}
          </MyLink>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-16 right-4 w-40 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3 md:hidden z-50">
          {navItems.map((item, index) => (
            <MyLink
              key={index}
              href={item.path}
              onClick={() => setOpen(false)}
            >
              {item.icon}
              {item.text}
            </MyLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;