import { NavLink } from 'react-router-dom';
import { BiHome } from 'react-icons/bi';
import { FaStore } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { IoMailUnreadSharp, IoSettingsSharp } from 'react-icons/io5';
import { MdAttachMoney } from 'react-icons/md';
import { RiDashboardHorizontalLine } from 'react-icons/ri';

export default function Sidebar() {
  const menuItems = [
    { path: "/home", icon: <BiHome size={26} />, label: "Home" },
    { path: "/price", icon: <MdAttachMoney size={26} />, label: "Price" },
    { path: "/dashboard", icon: <RiDashboardHorizontalLine size={26} />, label: "Dashboard" },
    { path: "/mail",  icon: <IoMailUnreadSharp size={26} />, label: "Mail" },
    { path: "/notification", icon: <IoIosNotifications size={26} />, label: "Notifications" },
    { path: "/setting",    icon: <IoSettingsSharp size={26} />, label: "Settings" },
  ];

  return (
    <div className="w-24 bg-[#1f1d2b] min-h-screen flex flex-col items-center py-6 justify-between rounded-r-3xl z-10 select-none">
      <div className="flex flex-col items-center w-full">
        {/* Brand / Store Logo Header */}
        <div className="p-4 bg-[#ea7c69]/20 text-[#ea7c69] rounded-2xl mb-6 transition-all duration-300 hover:scale-105 cursor-pointer">
          <FaStore size={32} />
        </div>

        {/* Dynamic Nav Link Panel List */}
        <nav className="flex flex-col w-full pl-3 space-y-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `relative w-full py-4 flex justify-center items-center rounded-l-3xl transition-all duration-200 ${
                  isActive ? "bg-[#252836]" : "bg-transparent"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* --- Top Inverted Curve Accent --- */}
                  {isActive && (
                    <div className="absolute right-0 -top-4 w-4 h-4 bg-transparent rounded-br-2xl pointer-events-none shadow-[4px_4px_0_0_#252836]" />
                  )}

                  {/* --- Icon Box Wrapper --- */}
                  <div
                    className={`p-3.5 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-[#ea7c69] text-white shadow-lg shadow-[#ea7c69]/40 translate-x-[-4px]"
                        : "text-[#ea7c69] hover:bg-[#252836]/60 hover:text-[#f08b7a]"
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* --- Bottom Inverted Curve Accent --- */}
                  {isActive && (
                    <div className="absolute right-0 -bottom-4 w-4 h-4 bg-transparent rounded-tr-2xl pointer-events-none shadow-[4px_-4px_0_0_#252836]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}