"use client";

import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { useContext } from "react";
import { FriendContext } from "@/context/FriendContext";

const StatsPage = () => {
  const { timeline } = useContext(FriendContext); // ✅ FIXED

  // count interactions
  const callCount = timeline?.filter(t => t.type === "Call").length || 0;
  const textCount = timeline?.filter(t => t.type === "Text").length || 0;
  const videoCount = timeline?.filter(t => t.type === "Video").length || 0;

  const data = [
    { name: "Call", value: callCount, fill: "#0088FE" },
    { name: "Text", value: textCount, fill: "#FF8042" },
    { name: "Video", value: videoCount, fill: "#00C49F" },
  ];

  return (
    <div className="my-10 shadow p-10 rounded-md border container mx-auto">
      <h2 className="font-semibold text-3xl mb-16 text-center">
        Interaction Stats
      </h2>

      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          margin: "auto",
          aspectRatio: 1,
        }}
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          cornerRadius="50%"
          paddingAngle={5}
          dataKey="value"
        />

        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default StatsPage;