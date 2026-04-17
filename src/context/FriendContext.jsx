"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);

 const [timeline, setTimeline] = useState([]);
const [loaded, setLoaded] = useState(false);

  return (
    <FriendContext.Provider
      value={{
        friends,
        setFriends,
        timeline,
        setTimeline,
      }}
    >
      {children}
    </FriendContext.Provider>
  );
};
export default FriendProvider;