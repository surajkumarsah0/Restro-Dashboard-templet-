import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register ChartJS modules
ChartJS.register(ArcElement, Tooltip, Legend);

// Mock data structured by filter timeframe
const dataByTimeframe = {
  Today: { dineIn: 200, toGo: 122, delivery: 264 },
  Week: { dineIn: 1420, toGo: 850, delivery: 1890 },
  Month: { dineIn: 5800, toGo: 3400, delivery: 7200 },
  "This Week": { dineIn: 1200, toGo: 790, delivery: 1650 },
};

export default function MostTypeOfOrder() {
  const [timeframe, setTimeframe] = useState('Today');
  
  // Extract active dataset based on selected filter option
  const currentData = dataByTimeframe[timeframe];
  
  // Calculate percentages for accurate visual sizing representation
  const total = currentData.dineIn + currentData.toGo + currentData.delivery;
  const pDineIn = ((currentData.dineIn / total) * 100).toFixed(0);
  const pToGo = ((currentData.toGo / total) * 100).toFixed(0);
  const pDelivery = ((currentData.delivery / total) * 100).toFixed(0);

  // Configuration setup rendering 3 nested concentric rings instead of single flat slices
 const chartData = {
    datasets: [
      {
        // Inner Ring: Dine In (Pink)
        data: [pDineIn, 100 - pDineIn],
        backgroundColor: ['#ff7ca3', '#252836'],
        borderWidth: 0.01,             // 👈 Separates it from the middle ring
        borderColor: '#1f1d2b',     // 👈 Card background color acts as the gap separator
        weight: 1,
      },
      {
        // Middle Ring: To Go (Orange)
        data: [pToGo, 100 - pToGo],
        backgroundColor: ['#ffb572', '#252836'],
        borderWidth: 0.5,             // 👈 Separates it from inner & outer rings
        borderColor: '#1f1d2b',     // 👈 Card background color acts as the gap separator
        weight: 1,
      },
      {
        // Outer Ring: Delivery (Blue)
        data: [pDelivery, 100 - pDelivery],
        backgroundColor: ['#65b0f6', '#252836'],
        borderWidth: 0.9,             // 👈 Separates it from the middle ring
        borderColor: '#1f1d2b',     // 👈 Card background color acts as the gap separator
        weight: 1,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%', // Creates the hollow inner circle shape
    plugins: {
      legend: { display: false }, // Hiding standard charts legend to use our pristine custom UI text list
      tooltip: { enabled: false }, 
    },
  };

  return (
    <div className="bg-[#1f1d2b] border border-gray-800 rounded-xl p-6 flex flex-col w-full select-none">
      {/* Header section with filter control dropdown */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-base font-semibold text-white">Most Type of Order</h2>
        <select 
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="bg-transparent border border-gray-700 text-white text-xs px-2 py-1.5 rounded-lg focus:outline-none cursor-pointer"
        >
          <option value="Today" className="bg-[#1f1d2b]">Today</option>
          <option value="Week" className="bg-[#1f1d2b]">Week</option>
          <option value="Month" className="bg-[#1f1d2b]">Month</option>
          <option value="This Week" className="bg-[#1f1d2b]">This Week</option>
        </select>
      </div>

      <div className="flex items-center justify-between gap-4 mt-2">
        {/* Dynamic Multi-Ring Concentric Donut Canvas */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          <Doughnut data={chartData} options={chartOptions} />
        </div>

        {/* Dynamic Legend Panel List */}
        <div className="flex flex-col gap-3 text-xs min-w-[120px]">
          {/* Dine In */}
          <div className="flex gap-2.5">
            <span className="w-3 h-3 rounded-full bg-[#ff7ca3] block mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-white font-medium">Dine In</p>
              <p className="text-gray-500 text-[10px] mt-0.5">{currentData.dineIn} customers</p>
            </div>
          </div>
          
          {/* To Go */}
          <div className="flex gap-2.5">
            <span className="w-3 h-3 rounded-full bg-[#ffb572] block mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-white font-medium">To Go</p>
              <p className="text-gray-500 text-[10px] mt-0.5">{currentData.toGo} customers</p>
            </div>
          </div>
          
          {/* Delivery */}
          <div className="flex gap-2.5">
            <span className="w-3 h-3 rounded-full bg-[#65b0f6] block mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-white font-medium">Delivery</p>
              <p className="text-gray-500 text-[10px] mt-0.5">{currentData.delivery} customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}