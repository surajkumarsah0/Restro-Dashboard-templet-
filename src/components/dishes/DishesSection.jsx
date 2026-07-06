import { Search } from 'lucide-react';
import { categories } from '../../data/mockData';

export default function DishesSection({ dishes, selectedCategory, setSelectedCategory, onAddToOrder, searchQuery, setSearchQuery }) {
    console.log(dishes)
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      {/* Header element */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-semibold text-white">Jaegar Resto</h1>
          <p className="text-gray-400 text-sm mt-1">Monday, 6 Jul 2026</p>
        </div>
        <div className="relative w-72">
          <input 
            type="text" 
            placeholder="Search for food, coffee, etc..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#2d303e] text-gray-200 pl-10 pr-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:border-[#ea7c69]"
          />
          <span className="absolute left-3 top-3.5 text-gray-400"><Search/></span>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-6 border-b border-gray-700 mb-6 text-sm font-medium">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`pb-3 transition-all ${
              selectedCategory === cat 
                ? "text-[#ea7c69] border-b-2 border-[#ea7c69]" 
                : "text-gray-400 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Headline Row */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-xl font-semibold text-white">Choose Dishes</h2>
        <select className="bg-[#1f1d2b] border border-gray-700 text-white px-4 py-2 rounded-xl focus:outline-none">
          <option>Dine In</option>
          <option>To Go</option>
          <option>Delivery</option>
        </select>
      </div>

      {/* Dishes Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16">
        {dishes.map((dish) => (
          <div 
            key={dish.id}
            onClick={() => onAddToOrder(dish)}
            className="bg-[#1f1d2b] rounded-2xl p-4 text-center relative pt-24 flex flex-col items-center justify-between border border-transparent hover:border-[#ea7c69] transition-all cursor-pointer group"
          >
            {/* Absolute floating circle image */}
            <div className="absolute -top-12 w-28 h-28 rounded-full overflow-hidden shadow-xl group-hover:scale-105 transition-transform duration-300">
              <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
            </div>
            
            <h3 className="text-white font-medium text-sm px-2 line-clamp-2 min-h-[40px]">{dish.name}</h3>
            <p className="text-gray-200 font-semibold mt-2">${dish.price.toFixed(2)}</p>
            <p className="text-gray-500 text-xs mt-1">{dish.available} Bowls available</p>
          </div>
        ))}
      </div>
    </div>
  );
}