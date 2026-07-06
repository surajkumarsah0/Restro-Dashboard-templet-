import StatCards from '../components/dashboard/StatCards';
import OrderReportTable from '../components/dashboard/OrderReportTable';
import MostOrdered from '../components/dashboard/MostOrdered';
import MostTypeOfOrder from '../components/dashboard/MostTypeOfOrder';

export default function AnalyticsPage() {
  return (
    <div className="flex-1 bg-[#252836] p-6 overflow-y-auto flex flex-col lg:flex-row gap-6 min-h-screen">
      {/* Left Column: Metrics & Detailed Data Tables */}
      <div className="flex-1 flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
          <p className="text-gray-400 text-sm mt-1">Monday, 6 Jul 2026</p>
        </div>

        {/* Top Numeric Metric Blocks */}
        <StatCards />

        {/* Detailed Customer Logs */}
        <OrderReportTable />
      </div>

      {/* Right Column: Mini Sidebar Breakdown Widgets */}
      <div className="w-full lg:w-96 flex flex-col gap-6">
        <MostOrdered />
        <MostTypeOfOrder />
      </div>
    </div>
  );
}