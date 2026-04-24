import { LayoutDashboard, Users, MessageSquare, Settings, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const links = [
  { name: "Dashboard", to: "/admin", icon: LayoutDashboard }
];

const AdminSidebar = () => {
  const { logout } = useAuthStore();

  return (
    <div className="h-full flex flex-col justify-between">
      {/* Top nav */}
      <div>
        <h2 className="text-xl font-bold mb-6 px-2">Admin Panel</h2>

        <nav className="flex flex-col gap-1">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.name}
                to={link.to}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition-all
                  ${
                    isActive
                      ? "bg-primary text-primary-content"
                      : "hover:bg-base-200"
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{link.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom logout */}
      <div className="border-t border-base-300 pt-3">
        <button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg border-2 border-primary text-white hover:bg-primary hover:text-slate-900 duration-300 transition" onClick={logout}>
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;