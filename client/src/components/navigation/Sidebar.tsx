import React from "react";
import { NavLink } from "react-router-dom";
import {
  X,
  BookOpen,
  Lightbulb,
  Award,
  Newspaper,
  BrainCircuit,
  User,
  LayoutDashboard,
  ClipboardList,
  Wrench,
  Library,
  Gamepad2,
  GraduationCap,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const { theme } = useTheme();

  const menuItems = [
    { path: "/", name: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { path: "/documents", name: "Documents", icon: <BookOpen size={20} /> },
    {
      path: "/assignments",
      name: "Assignments",
      icon: <ClipboardList size={20} />,
    },
    { path: "/tools", name: "Academic Tools", icon: <Wrench size={20} /> },
    { path: "/library", name: "Library", icon: <Library size={20} /> },
    {
      path: "/relaxing-area",
      name: "Relaxing Area",
      icon: <Gamepad2 size={20} />,
    },
    { path: "/news", name: "Academic News", icon: <Newspaper size={20} /> },
    {
      path: "/ai-assistant",
      name: "AI Assistant",
      icon: <BrainCircuit size={20} />,
    },
    {
      path: "/opportunities",
      name: "Opportunities",
      icon: <Award size={20} />,
    },
    {
      path: "/teacher",
      name: "Teacher Dashboard",
      icon: <GraduationCap size={20} />,
    },
    { path: "/profile", name: "Profile", icon: <User size={20} /> },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 transition-transform duration-300 transform bg-primary-800 
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0`}
    >
      <div className="flex items-center justify-between h-16 px-4 bg-primary-900">
        <div className="flex items-center">
          <BookOpen className="h-8 w-8 text-accent-400" />
          <span className="ml-2 text-xl font-semibold text-white font-serif">
            Umuyoboro
          </span>
        </div>
        <button
          onClick={toggleSidebar}
          className="md:hidden text-white hover:text-accent-300 focus:outline-none"
        >
          <X size={24} />
        </button>
      </div>

      <div className="py-4">
        <nav className="mt-5 px-2 space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-sm font-medium transition-colors duration-150 rounded-md group
                ${
                  isActive
                    ? "bg-primary-700 text-white"
                    : "text-primary-100 hover:bg-primary-700 hover:text-white"
                }`
              }
              end={item.path === "/"}
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="bg-primary-700 rounded-md p-4 text-primary-100">
          <h4 className="text-sm font-medium mb-2 text-accent-300">
            Need Help?
          </h4>
          <p className="text-xs mb-3">
            Access tutorials and helpful resources for using ScholarHub
            effectively.
          </p>
          <button className="text-xs bg-primary-600 hover:bg-primary-500 text-white px-3 py-1.5 rounded-md w-full transition-colors">
            View Tutorials
          </button>
        </div>
      </div> */}
    </aside>
  );
};

export default Sidebar;
