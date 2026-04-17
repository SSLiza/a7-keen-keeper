"use client";

import { FriendContext, useFriend } from "@/context/FriendContext";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { BsChatSquareText } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { RiVideoOnFill } from "react-icons/ri";

const FriendActions = ({ friend }) => {

  // const { addTimelineEntry } = useFriend();
  const {timeline,setTimeline}= useContext(FriendContext)
  console.log(timeline,"timeline")

 const handleAction = (type) => {
  console.log("Handle install now");
  setTimeline([...timeline,friend])

  toast.success(`${type} with ${friend.name}`);
};

  return (
    <>
      <button
        onClick={() => handleAction("Call")}
        className="bg-white rounded-2xl p-4 border border-gray-200 flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition"
      >
        <LuPhoneCall className="text-lg text-gray-600" />
        <span className="text-sm text-gray-700">Call</span>
      </button>

      <button
        onClick={() => handleAction("Text")}
        className="bg-white rounded-2xl p-4 border border-gray-200 flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition"
      >
        <BsChatSquareText className="text-lg text-gray-600" />
        <span className="text-sm text-gray-700">Text</span>
      </button>

      <button
        onClick={() => handleAction("Video")}
        className="bg-white rounded-2xl p-4 border border-gray-200 flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition"
      >
        <RiVideoOnFill className="text-lg text-gray-600" />
        <span className="text-sm text-gray-700">Video</span>
      </button>
    </>
  );
};

export default FriendActions;