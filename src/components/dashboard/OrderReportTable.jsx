
export default function OrderReportTable() {
  const orders = [
    { id: 1, name: "Eren Jaeger", avatar: "https://i.pravatar.cc/100?img=33", dish: "Spicy seasoned seafood noodles", pay: "$125", status: "Completed" },
    { id: 2, name: "Reiner Braunn", avatar: "https://i.pravatar.cc/100?img=12", dish: "Salted Pasta with mushroom sauce", pay: "$145", status: "Preparing" },
    { id: 3, name: "Levi Ackerman", avatar: "https://i.pravatar.cc/100?img=60", dish: "Beef dumpling in hot and sour soup", pay: "$105", status: "Pending" },
    { id: 4, name: "Historia Reiss", avatar: "https://i.pravatar.cc/100?img=47", dish: "Hot spicy fried rice with omelet", pay: "$45", status: "Completed" },
    { id: 5, name: "Hanji Zoe", avatar: "https://i.pravatar.cc/100?img=53", dish: "Hot spicy fried rice with omelet", pay: "$245", status: "Completed" }
  ];

  const statusColors = {
    Completed: "bg-[#6be2be]/10 text-[#50d1aa]",
    Preparing: "bg-[#9290e9]/10 text-[#9290e9]",
    Pending: "bg-[#ffb572]/10 text-[#ffb572]"
  };

  return (
    <div className="bg-[#1f1d2b] border border-gray-800 rounded-xl p-6 flex-1 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">Order Report</h2>
        <button className="bg-transparent border border-gray-700 text-gray-300 text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-[#252836] transition-colors flex items-center gap-2">
          🎛️ Filter Order
        </button>
      </div>

      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700 text-gray-400 text-xs font-semibold pb-4">
              <th className="pb-3 font-medium">Customer</th>
              <th className="pb-3 font-medium">Menu</th>
              <th className="pb-3 font-medium">Total Payment</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800 text-xs">
            {orders.map((order) => (
              <tr key={order.id} className="text-gray-200 hover:bg-[#252836]/30 transition-colors">
                <td className="py-4 flex items-center gap-3">
                  <img src={order.avatar} className="w-8 h-8 rounded-full object-cover" alt="" />
                  <span className="font-medium">{order.name}</span>
                </td>
                <td className="py-4 text-gray-300 max-w-[200px] truncate">{order.dish}</td>
                <td className="py-4 font-semibold text-gray-300">{order.pay}</td>
                <td className="py-4">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide ${statusColors[order.status]}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}