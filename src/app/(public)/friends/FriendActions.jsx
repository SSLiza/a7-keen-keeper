"use client";

import { Phone, MessageSquare, Video } from "lucide-react";
import toast from "react-hot-toast";
import { useFriend } from "@/context/FriendContext";

export default function FriendActions({ friend }) {
  const { addTimelineEntry } = useFriend();

  const handleInteraction = (type) => {
    addTimelineEntry(type, friend.name);

    const messages = {
      Call: `📞 Called ${friend.name}`,
      Text: `💬 Texted ${friend.name}`,
      Video: `🎥 Video call with ${friend.name}`,
    };

    toast.success(messages[type]);
  };

  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      <button onClick={() => handleInteraction("Call")}>
        <Phone /> Call
      </button>

      <button onClick={() => handleInteraction("Text")}>
        <MessageSquare /> Text
      </button>

      <button onClick={() => handleInteraction("Video")}>
        <Video /> Video
      </button>
    </div>
  );
}