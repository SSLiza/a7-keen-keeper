import FriendCard from "./FriendCard";
import StatsCard from "./StatsCard";

const friendsPromise = async function () {
  const res = await fetch("https://a7-keen-keeper-tau.vercel.app/data.json", {
    cache: "no-store"
  });
  const data = await res.json();
  return data;
};

const FriendsPage = async () => {

  const friends = await friendsPromise();

  const stats = [
    { label: "Total Friends", value: friends.length },
    { label: "On Track", value: friends.filter(f => f.status === "on-track").length },
    { label: "Need Attention", value: friends.filter(f => f.status !== "on-track").length },
    { label: "Interactions This Month", value: 12 }
  ];


  return (
    <div className="px-15 md:30 lg:px-62 bg-white pt-4">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((item, i) => (
          <StatsCard key={i} {...item} />
        ))}
      </div>

      {/* Friends */}
      <h2 className="text-xl font-semibold mb-4 text-gray-900">Your Friends</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {friends.map((f) => (
          <FriendCard key={f.id} friend={f} />
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;