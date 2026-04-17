import Image from 'next/image';
import React from 'react';
import logoXL from "@/assets/logo-xl.png";
import Instagram from '@/assets/instagram.png'
import Facebook from '@/assets/facebook.png'
import Twitter from '@/assets/twitter.png'

const Footer = () => {
    return (
        <div className='bg-green-950 space-y-6 py-10 px-20 md:px-40 lg:px-62'>
            <div className='flex justify-center'>
            <Image
            src={logoXL}
            alt="Logo"
            width={200}
            height={200}/>
        </div>
        <p className='text-white text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        <p className='text-white text-center'>Social Links</p>
        <div className='flex justify-center gap-4'>
          <Image
            src={Instagram}
            alt="Logo"
            width={50}
            height={50}/>

            <Image
            src={Facebook}
            alt="Logo"
            width={50}
            height={50}/>

            <Image
            src={Twitter}
            alt="Logo"
            width={50}
            height={50}/>
        </div>
        <div className='flex justify-between  border-t border-gray-500 pt-4'>
            <p className='text-gray-500'>© 2026 KeenKeeper. All rights reserved.</p>
            <ul className='flex text-gray-500'>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookies</li>
            </ul>
        </div>
        </div>
    );
};

export default Footer;