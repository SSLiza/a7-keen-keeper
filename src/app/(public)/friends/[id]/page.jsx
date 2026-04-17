import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import FriendActions from "../FriendActions";
// import FriendActions from "./FriendActions"; // 👈 new

const friendsPromise = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  return res.json();
};

export async function generateMetadata({ params }) {
  const { id } = await params;

  console.log(params)

  const friends = await friendsPromise();
  const friend = friends.find((f) => String(f.id) === id);

  if (!friend) {
    return { title: "Not found - friend" };
  }

  return {
    title: `${friend.name} - details`,
  };
}

const FriendDetailsPage = async ({ params }) => {
  const { id } = await params;

  console.log(params)

  const friends = await friendsPromise();
  const friend = friends.find((f) => String(f.id) === id);

  if (!friend) notFound();

  return (
    <main>
      <h1>{friend.name}</h1>

      {/* ✅ Client Component */}
      <FriendActions friend={friend} />
    </main>
  );
};

export default FriendDetailsPage;