
export default function MostOrdered() {
  const items = [
    { id: 1, name: "Spicy seasoned seafood noodles", count: "50 dishes ordered", img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=120&q=80" },
    { id: 2, name: "Salted Pasta with mushroom sauce", count: "120 dishes ordered", img: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=120&q=80" },
    { id: 3, name: "Beef dumpling in hot soup", count: "80 dishes ordered", img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=120&q=80" }
  ];

  return (
    <div className="bg-[#1f1d2b] border border-gray-800 rounded-xl p-6 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-base font-semibold text-white">Most Order</h2>
        <select className="bg-transparent border border-gray-700 text-gray-300 text-xs px-2 py-1.5 rounded-lg focus:outline-none">
       <option value="Today" className="bg-[#1f1d2b]">Today</option>
          <option value="Week" className="bg-[#1f1d2b]">Week</option>
          <option value="Month" className="bg-[#1f1d2b]">Month</option>
          <option value="This Week" className="bg-[#1f1d2b]">This Week</option>
        </select>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <img src={item.img} className="w-12 h-12 rounded-full object-cover" alt="" />
            <div className="min-w-0 flex-1">
              <p className="text-white text-xs font-medium truncate">{item.name}</p>
              <p className="text-gray-500 text-[11px] mt-0.5">{item.count}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full border border-[#ea7c69] text-[#ea7c69] hover:bg-[#ea7c69]/10 transition-colors py-2.5 rounded-xl text-xs font-semibold mt-6">
        View All
      </button>
    </div>
  );
}