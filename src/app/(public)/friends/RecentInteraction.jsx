"use client";

import { useEffect, useState } from "react";
import { BsChatSquareText } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { RiVideoOnFill } from "react-icons/ri";

const RecentInteractions = ({ friendId }) => {
  const [interactions, setInteractions] = useState([]);

  // ✅ store components, not <Component />
  const iconMap = {
    Text: BsChatSquareText,
    Call: LuPhoneCall,
    Video: RiVideoOnFill,
  };

  const loadData = () => {
    const stored = JSON.parse(localStorage.getItem("interactions")) || {};
    setInteractions(stored[friendId] || []);
  };

  useEffect(() => {
    loadData();

    window.addEventListener("interactionUpdated", loadData);
    return () => {
      window.removeEventListener("interactionUpdated", loadData);
    };
  }, [friendId]);

  return (
    <div className="space-y-4">
      {interactions.length === 0 ? (
        <p className="text-sm text-gray-400">No interactions yet</p>
      ) : (
        interactions.map((item, index) => {
          const Icon = iconMap[item.type] || BsChatSquareText; // ✅ fallback

          return (
            <div key={index} className="flex items-center justify-between">
              
              <div className="flex items-start gap-3">
                <div className="mt-1 text-gray-500">
                  <Icon size={18} /> {/* ✅ now works */}
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {item.type}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.note || "Asked for career advice"}
                  </p>
                </div>
              </div>

              <span className="text-sm text-gray-400">
                {new Date(item.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          );
        })
      )}
    </div>
  );
};

export default RecentInteractions;