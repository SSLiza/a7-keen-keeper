const StatsCard = ({ label, value }) => {
  return (
    <div className="bg-white shadow rounded-xl p-4 text-center">
      <h2 className="text-2xl font-bold text-black">{value}</h2>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
};

export default StatsCard;