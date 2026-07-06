
export default function OrderSidebar({ orderItems, onUpdateQty, onDeleteItem, orderType, setOrderType }) {
  
  const subTotal = orderItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = 0.00; // Hardcoded static example rule matching original screenshot 

  return (
    <div className="w-96 bg-[#1f1d2b] border-l border-gray-800 p-6 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Orders #34562</h2>
        
        {/* Order Type Selectors */}
        <div className="flex gap-2 mb-6">
          {["Dine In", "To Go", "Delivery"].map((type) => (
            <button
              key={type}
              onClick={() => setOrderType(type)}
              className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all ${
                orderType === type 
                  ? "bg-[#ea7c69] text-white" 
                  : "bg-transparent border border-gray-700 text-[#ea7c69] hover:bg-[#252836]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Item headers */}
        <div className="grid grid-cols-5 text-xs font-semibold text-gray-400 border-b border-gray-700 pb-3 mb-4">
          <span className="col-span-3">Item</span>
          <span className="text-center">Qty</span>
          <span className="text-right">Price</span>
        </div>

        {/* Dynamic Items List Container */}
        <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-1">
          {orderItems.length === 0 ? (
            <p className="text-gray-500 text-center text-sm py-8">Select dishes to start your order.</p>
          ) : (
            orderItems.map((item) => (
              <div key={item.id} className="space-y-2">
                <div className="grid grid-cols-5 items-center gap-2">
                  {/* Name and Image info combo */}
                  <div className="col-span-3 flex items-center gap-2">
                    <img src={item.image} alt="" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="text-white text-xs font-medium truncate max-w-[120px]">{item.name}</p>
                      <p className="text-gray-500 text-[10px]">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  {/* Qty input box */}
                  <input 
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => onUpdateQty(item.id, parseInt(e.target.value) || 1)}
                    className="w-12 bg-[#2d303e] border border-gray-700 text-white rounded-lg p-2 text-center text-xs focus:outline-none"
                  />
                  {/* Action delete and aggregated single total */}
                  <span className="text-right text-white text-xs font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>

                {/* Sub-row for Order Notes & Delete Trigger */}
                <div className="grid grid-cols-5 gap-2 items-center">
                  <input 
                    type="text" 
                    placeholder="Order Note..." 
                    className="col-span-4 bg-[#2d303e] text-gray-300 text-xs rounded-lg p-3 border border-gray-700 focus:outline-none"
                  />
                  <button 
                    onClick={() => onDeleteItem(item.id)}
                    className="border border-[#ea7c69] text-[#ea7c69] rounded-lg p-2 hover:bg-[#ea7c69]/10 transition-colors text-center text-sm"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Bill Calculation Block */}
      <div className="border-t border-gray-700 pt-4 mt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Discount</span>
          <span className="text-white font-medium">${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Sub Total</span>
          <span className="text-white font-medium">${subTotal.toFixed(2)}</span>
        </div>
        
        <button className="w-full bg-[#ea7c69] text-white py-3 rounded-xl font-semibold shadow-lg shadow-[#ea7c69]/30 hover:bg-[#f08b7a] transition-colors mt-2">
          Continue to Payment
        </button>
      </div>
    </div>
  );
}