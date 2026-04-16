import { AiOutlineDelete } from "react-icons/ai";
import { FaArchive } from "react-icons/fa";
import { LiaSnapchatGhost } from "react-icons/lia";

const friendsPromise = async () => {
  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch friends");
  }

  return res.json();
};

const FriendDetails = async ({ params }) => {
  const { id } = await params;

  const friends = await friendsPromise();
  const friend = friends.find((f) => String(f.id) === String(id));

  if (!friend) {
    return <div className="text-center mt-10">Friend not found</div>;
  }

  const {
    picture,
    name,
    email,
    bio,
    status,
    tags,
    goal,
    days_since_contact,
    next_due_date,
  } = friend;

  const statusStyles = {
    "on-track": "bg-green-100 text-green-700",
    "almost due": "bg-yellow-100 text-yellow-700",
    overdue: "bg-red-100 text-red-600",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-5">

        {/* LEFT SIDEBAR */}
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center">
            <img
              src={picture}
              alt={name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />

            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>

            <div
              className={`w-fit mx-auto px-3 py-1 text-xs mt-2 font-semibold rounded-full ${statusStyles[status]}`}
            >
              {status}
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 text-[11px] bg-gray-100 text-gray-600 rounded-full"
                >
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-3 italic">{bio}</p>
            <p className="text-xs text-gray-400 mt-1">
              Preferred: {email}
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <button className="w-full bg-white p-2.5 rounded-lg border border-gray-200 flex items-center justify-center gap-2 text-sm text-gray-700 hover:bg-gray-50">
            <LiaSnapchatGhost /> Snooze 2 Weeks
          </button>

          <button className="w-full bg-white p-2.5 rounded-lg border border-gray-200 flex items-center justify-center gap-2 text-sm text-gray-700 hover:bg-gray-50">
            <FaArchive /> Archive
          </button>

          <button className="w-full bg-white p-2.5 rounded-lg border border-red-200 text-red-500 flex items-center justify-center gap-2 text-sm hover:bg-red-50">
            <AiOutlineDelete /> Delete
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-2 space-y-5">

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                {days_since_contact}
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                {goal}
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Goal (Days)
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <h2 className="text-sm font-semibold text-gray-800">
                {new Date(next_due_date).toLocaleDateString("en-US", {
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
              Connect every {goal} days
            </h2>
          </div>

          {/* QUICK CHECK-IN */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-sm font-medium text-gray-700 mb-3">
              Quick Check-In
            </h2>

            <div className="grid grid-cols-3 gap-3">
              {["Call", "Text", "Video"].map((item) => (
                <button
                  key={item}
                  className="border border-gray-200 rounded-lg py-3 text-sm text-gray-600 hover:bg-gray-50"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* RECENT INTERACTIONS */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-sm font-medium text-gray-700">
                Recent Interactions
              </h2>
              <button className="text-xs text-gray-400 hover:text-gray-600">
                Full History
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm border-b pb-2">
                <span className="text-gray-600">Text</span>
                <span className="text-gray-400">Jan 28, 2026</span>
              </div>

              <div className="flex justify-between text-sm border-b pb-2">
                <span className="text-gray-600">Meetup</span>
                <span className="text-gray-400">Jan 28, 2026</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Video</span>
                <span className="text-gray-400">Jan 28, 2026</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;