import Image from "next/image";
import React from "react";
import logoXL from "@/assets/logo-xl.png";
import Instagram from "@/assets/instagram.png";
import Facebook from "@/assets/facebook.png";
import Twitter from "@/assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-green-950 py-10 px-6 md:px-16 lg:px-24 space-y-8">
      
      {/* Logo */}
      <div className="flex justify-center">
        <Image src={logoXL} alt="Logo" width={180} height={180} />
      </div>

      {/* Description */}
      <p className="text-white text-center max-w-xl mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>

      {/* Social */}
      <div className="text-center space-y-3">
        <p className="text-white">Social Links</p>

        <div className="flex justify-center gap-4">
          <Image src={Instagram} alt="Instagram" width={40} height={40} />
          <Image src={Facebook} alt="Facebook" width={40} height={40} />
          <Image src={Twitter} alt="Twitter" width={40} height={40} />
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-600 pt-6 text-gray-400 text-sm">
        
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <ul className="flex gap-4">
          <li className="cursor-pointer hover:text-white">Privacy Policy</li>
          <li className="cursor-pointer hover:text-white">Terms of Service</li>
          <li className="cursor-pointer hover:text-white">Cookies</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;