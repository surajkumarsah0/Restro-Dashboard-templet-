import { BiDollar } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';

export default function StatCards() {
  const stats = [
    { id: 1, title: "Total Revenue", value: "$10,243", change: "+32.4%", isPositive: true, icon: <BiDollar size={20} className="text-[#9288e0]" />, iconBg: "bg-[#9288e0]/10" },
    { id: 2, title: "Total Dish Ordered", value: "23,456", change: "-12.4%", isPositive: false, icon: "🔖", iconBg: "bg-[#ffb572]/10" },
    { id: 3, title: "Total Customer", value: "1,234", change: "+2.4%", isPositive: true, icon: <FiUsers size={18} className="text-[#65b0f6]" />, iconBg: "bg-[#65b0f6]/10" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <div key={stat.id} className="bg-[#1f1d2b] border border-gray-800 p-4 rounded-xl relative flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${stat.iconBg} text-xl flex items-center justify-center w-9 h-9`}>
              {stat.icon}
            </div>
            <span className={`text-xs font-medium absolute top-4 right-4 flex items-center gap-0.5 ${stat.isPositive ? 'text-[#50d1aa]' : 'text-[#ff7ca3]'}`}>
              {stat.change} {stat.isPositive ? '↑' : '↓'}
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-white tracking-wide">{stat.value}</h3>
            <p className="text-gray-400 text-xs mt-1 font-medium">{stat.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}