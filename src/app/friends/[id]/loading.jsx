import React from "react";
// import { HashLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex justify-center items-center bg-blue-200 h-screen font-bold text-5xl">
      Application details loading......
      {/* <HashLoader color="#ad46ff" /> */}
    </div>
  );
};

export default loading;
