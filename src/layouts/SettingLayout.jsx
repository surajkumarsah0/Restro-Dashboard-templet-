import { NavLink, Outlet } from 'react-router-dom';
import { 
  Heart, 
  Store, 
  Percent, 
  Bell, 
  ShieldCheck, 
  Info 
} from 'lucide-react';

export default function SettingsLayout() {
  const subTabs = [
    { path: "appearance", icon: <Heart size={18} />, title: "Appereance", desc: "Dark and Light mode, Font size" },
    { path: "restaurant", icon: <Store size={18} />, title: "Your Restaurant", desc: "Dark and Light mode, Font size" },
    { path: "products", icon: <Percent size={18} />, title: "Products Management", desc: "Manage your product, pricing, etc" },
    { path: "notifications", icon: <Bell size={18} />, title: "Notifications", desc: "Customize your notifications" },
    { path: "security", icon: <ShieldCheck size={18} />, title: "Security", desc: "Configure Password, PIN, etc" },
    { path: "about", icon: <Info size={18} />, title: "About Us", desc: "Find out more about Posly" },
  ];

  return (
    <div className="flex-1 bg-[#252836] p-6 overflow-hidden flex flex-col h-screen w-full">
      {/* Title Header */}
      <h1 className="text-3xl font-semibold text-white mb-6">Settings</h1>

      {/* Main Settings Split Wrapper */}
      <div className="flex flex-1 gap-6 overflow-hidden mb-6">
        
        {/* LEFT COLUMN: Inner Settings Sidebar Navigation */}
        <nav className="w-72 bg-[#1f1d2b] rounded-xl flex flex-col p-4 space-y-1 overflow-y-auto">
          {subTabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `flex items-start gap-3 p-4 rounded-xl transition-all duration-200 select-none border-r-4 ${
                  isActive
                    ? "bg-[#ea7c69]/10 border-[#ea7c69] text-[#ea7c69]"
                    : "border-transparent text-gray-400 hover:bg-[#252836]/40 hover:text-gray-200"
                }`
              }
            >
              {/* Dynamic Icon Wrapper */}
              <div className="mt-0.5 flex-shrink-0">{tab.icon}</div>
              
              {/* Meta Content Text */}
              <div className="min-w-0">
                <p className="font-semibold text-xs tracking-wide text-inherit">{tab.title}</p>
                <p className="text-[11px] text-gray-500 mt-1 truncate leading-tight">{tab.desc}</p>
              </div>
            </NavLink>
          ))}
        </nav>

        {/* RIGHT COLUMN: Nested Dashboard Dynamic Panel Display Viewport */}
        <div className="flex-1 bg-[#1f1d2b] border border-gray-800 rounded-xl p-6 flex overflow-y-auto  items-center justify-center text-2xl text-white">
          <Outlet />
        </div>

      </div>
    </div>
  );
}