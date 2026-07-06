import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Dashboard from './pages/Dashboard';
import PricePage from './pages/PricePage';

import Notification from './pages/Notification';
import Mailpage from './pages/Mailpage';
import Home from './pages/Home';
import SettingsLayout from './layouts/SettingLayout';
import EmptyFallback from './components/settings/EmptyFallback';
import AppearanceSettings from './components/settings/AppearanceSettings';
import ProductManagement from './components/settings/ProductManagement';

// Define the route array map schema
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div className="p-6 text-white bg-[#252836] h-screen">Route Error or Page Not Found.</div>,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "price",
        element: <PricePage />
      },
      {
        path: "setting",
        element: <SettingsLayout />,
        children: [
          { index: true, element: <EmptyFallback /> }, // Shows "Empty" by default
          { path: "appearance", element: <AppearanceSettings /> },
          { path: "products", element: <ProductManagement /> },
          { path: "*", element: <EmptyFallback /> },
        ]
      },
      {
        path: "mail",
        element: <Mailpage />
      },
      {
        path: "notification",
        element: <Notification />
      },
      {
        path: "*",
        element: <div className="p-6 text-white">Component Coming Soon...</div>
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}