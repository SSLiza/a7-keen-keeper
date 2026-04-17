"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MyLink = ({ href, children, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition
        
        ${isActive
          ? "bg-green-900 text-white"
          : "text-gray-800 hover:bg-gray-100"}
      `}
    >
      {children}
    </Link>
  );
};

export default MyLink;