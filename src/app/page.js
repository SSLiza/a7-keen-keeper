import Banner from "@/components/homepage/Banner";
import FriendsPage from "@/components/homepage/Friends";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <FriendsPage/>
    </div>
  );
}
