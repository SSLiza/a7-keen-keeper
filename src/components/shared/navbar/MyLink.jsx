"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`font-semibold ${pathname === href ? "btn bg-green-900 text-white rounded-xl text-center" : "bg-white text-black flex gap-1 items-center justify-between"}`}
    >
      {children}
    </Link>
  );
};

export default MyLink;