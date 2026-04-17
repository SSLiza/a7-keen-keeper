import { FriendProvider } from "@/context/FriendContext";

const PublicLayout = ({ children }) => {
  return <FriendProvider>
    {children}
  </FriendProvider>;
};

export default PublicLayout;