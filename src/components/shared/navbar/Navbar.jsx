import MyLink from './MyLink';
import Image from 'next/image';
import logoImg from "@/assets/logo.png";
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineWatchLater } from 'react-icons/md';
import { BsGraphUp } from 'react-icons/bs';
const Navbar = () => {

  const navItems = [
    {
      path: "/",
      text: "Home",
      icon:<IoHomeOutline/>
    },
    {
      path: "/timeline",
      text: "Timeline",
      icon: <MdOutlineWatchLater/>
    },
    {
      path: "/stats",
      text: "Stats",
      icon: <BsGraphUp/>
    }
  ];
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">

<Image
  src={logoImg}
  alt="logo"
  width={150}
  height={150}
/>
    </div>
      <div className="flex gap-2">
        <div className="dropdown dropdown-end flex gap-10">
          {navItems.map((item, index) => (
            // Client component
            <MyLink key={index} href={item.path}>
              {item.icon}
              {item.text}
            </MyLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;