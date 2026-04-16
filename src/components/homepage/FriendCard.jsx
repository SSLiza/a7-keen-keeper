import Image from "next/image";
import Link from "next/link";

const FriendCard = ({ friend }) => {
    return (
        <Link href={`/friends/${friend.id}`}>
            <div className="bg-white shadow rounded-xl p-4 text-center items-center space-y-4">

            {/* Avatar */}
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center mx-auto mb-3">
                <Image
                    src={friend.picture}
                    alt={friend.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Name */}
            <h3 className="font-semibold text-gray-900">
                {friend.name}
            </h3>

            <p className="text-gray-700">{friend.days_since_contact} days ago</p>

            {/* Tags (FIXED) */}
            <div className="text-sm text-gray-600 flex flex-wrap gap-1 justify-center">
                {friend.tags?.map((tag, i) => (
                    <span
                        key={i}
                        className="px-2 py-1 text-xs bg-green-200 text-green-800 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Status */}
            <span
                className={`inline-block mt-2 text-xs px-2 py-1 rounded text-white ${friend.status === "on-track"
                    ? "bg-green-600"
                    : friend.status === "almost due"
                        ? "bg-yellow-500"
                        : "bg-red-600"
                    }`}
            >
                {friend.status}
            </span>

        </div>
        </Link>
    );
};

export default FriendCard;