"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);

  // ✅ INIT FROM LOCALSTORAGE ON FIRST LOAD ONLY
  const [timeline, setTimeline] = useState(() => {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem("timeline") || "[]");
  });

  // ✅ SAVE EVERY CHANGE
  useEffect(() => {
    localStorage.setItem("timeline", JSON.stringify(timeline));
  }, [timeline]);

  // ✅ ADD ENTRY (IMPORTANT FIX HERE)
  const addTimelineEntry = (type, name) => {
    const newEntry = {
      id: crypto.randomUUID(), // better than Date.now()
      type,
      title: `${type} with ${name}`,
      date: new Date().toISOString(),
    };

    setTimeline((prev) => {
      const updated = [newEntry, ...prev];
      return updated;
    });
  };

  return (
    <FriendContext.Provider
      value={{
        friends,
        setFriends,
        timeline,
        addTimelineEntry,
      }}
    >
      {children}
    </FriendContext.Provider>
  );
};

export const useFriend = () => useContext(FriendContext);