"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`font-semibold ${pathname === href ? "btn bg-green-950 text-white rounded-xl text-center" : "btn"}`}
    >
      {children}
    </Link>
  );
};

export default MyLink;