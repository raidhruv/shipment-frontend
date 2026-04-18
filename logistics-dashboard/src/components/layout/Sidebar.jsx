import { NavLink } from "react-router-dom";
import { Package, Truck, Search } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex h-screen flex-col border-r bg-background p-4">

      <div className="mb-6 text-lg font-semibold">
        Logistics
      </div>

      <nav className="flex flex-col gap-1">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
              isActive ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
            }`
          }
        >
          <Package size={16} /> Dashboard
        </NavLink>

        <NavLink
          to="/create"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
              isActive ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
            }`
          }
        >
          <Truck size={16} /> Create Shipment
        </NavLink>

        <NavLink
          to="/track"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
              isActive ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
            }`
          }
        >
          <Search size={16} /> Track Shipment
        </NavLink>

      </nav>

    </aside>
  );
}