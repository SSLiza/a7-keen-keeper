import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import FriendActions from "../FriendActions";
import { LiaSnapchatGhost } from "react-icons/lia";
import { FaArchive } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import RecentInteractions from "../RecentInteraction";
// import FriendActions from "./FriendActions"; // 👈 new

const friendsPromise = async () => {
  const res = await fetch("https://a7-keen-keeper-tau.vercel.app/data.json", {
    cache: "no-store"
  });
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
  const statusStyles = {
    "overdue": "bg-red-100 text-red-600",
    "on-track": "bg-green-100 text-green-600",
    "almost due": "bg-yellow-100 text-yellow-600",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-5">

        {/* LEFT SIDEBAR */}
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center space-y-4">
            <Image
              src={friend.picture}
              alt={friend.name}
              width={96}
              height={96}
              className="rounded-full mx-auto mb-4 object-cover"
            />

            <h2 className="text-lg font-semibold text-gray-800">{friend.name}</h2>

            <div
              className={`w-fit mx-auto px-3 py-1 text-xs mt-2 font-semibold rounded-full ${statusStyles[friend.status]}`}
            >
              {friend.status}
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {friend.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 text-[11px] bg-green-200 text-green-700 text-gray-600 rounded-full"
                >
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-3">{friend.bio}</p>
            <p className="text-xs text-gray-400 mt-1">
              Preferred: {friend.email}
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <button className="w-full bg-white p-2.5 rounded-lg border border-gray-200 flex items-center justify-center gap-2 text-semibold text-gray-700 hover:bg-gray-50">
            <LiaSnapchatGhost /> Snooze 2 Weeks
          </button>

          <button className="w-full bg-white p-2.5 rounded-lg border border-gray-200 flex items-center justify-center gap-2 text-semibold text-gray-700 hover:bg-gray-50">
            <FaArchive /> Archive
          </button>

          <button className="w-full bg-white p-2.5 rounded-lg border border-red-200 text-red-500 flex items-center justify-center gap-2 text-semibold hover:bg-red-50">
            <AiOutlineDelete /> Delete
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-2 space-y-5">

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                {friend.days_since_contact}
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                {friend.goal}
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Goal (Days)
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <h2 className="text-sm font-semibold text-gray-800">
                {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Next Due
              </p>
            </div>
          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-sm font-medium text-gray-700">
                Relationship Goal
              </h1>
              <button className="text-xs bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">
                Edit
              </button>
            </div>

            <h2 className="text-lg font-semibold text-gray-800">
              Connect every {friend.goal} days
            </h2>
          </div>

          {/* QUICK CHECK-IN */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-semibold font-medium text-gray-700 mb-3">
              Quick Check-In
            </h2>

            <div className="grid grid-cols-3 gap-3">
              <FriendActions friend={friend} />
            </div>
          </div>

          {/* RECENT INTERACTIONS */}
          <div className="space-y-3">
            <RecentInteractions friendId={friend.id} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;