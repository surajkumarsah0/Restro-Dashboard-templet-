import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dishes/Sidebar';

export default function RootLayout() {
  return (
    <div className="flex h-screen w-screen bg-[#252836] font-sans overflow-hidden">
      {/* Fixed Sidebar panel on the far left */}
      <Sidebar />

      {/* Viewport content window matching nested child targets */}
      <div className="flex-1 flex overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}