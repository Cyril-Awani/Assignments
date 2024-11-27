import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaBuilding,
  FaClipboardList,
  FaCalendarAlt,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
  FaChartLine,
  FaUsers,
  FaKey,
  FaTools,
  FaHandshake,
  FaClipboardCheck,
  FaTags,
  FaQuestionCircle, // New icon for Help & Support
} from "react-icons/fa"; // Import additional icons

// Import the role from lib/data.ts
import { role } from "../lib/data";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <FaHome />,
        label: "Home",
        href: "/",
        visible: ["landlord", "tenant", "agent", "contractor"],
      },
      {
        icon: <FaUser />,
        label: "Profile",
        href: "/profile",
        visible: ["landlord", "tenant", "agent", "contractor"],
      },
      {
        icon: <FaBuilding />,
        label: "Properties",
        href: "/properties",
        visible: ["landlord", "agent"],
      },
      {
        icon: <FaClipboardList />,
        label: "Lease Agreements",
        href: "/lease-agreements",
        visible: ["landlord", "tenant", "agent"],
      },
      {
        icon: <FaKey />,
        label: "Manage Keys",
        href: "/manage-keys",
        visible: ["landlord", "agent"],
      },
      {
        icon: <FaCalendarAlt />,
        label: "Appointments",
        href: "/appointments",
        visible: ["landlord", "tenant", "agent", "contractor"],
      },
      {
        icon: <FaEnvelope />,
        label: "Messages",
        href: "/messages",
        visible: ["landlord", "tenant", "agent", "contractor"],
      },
      {
        icon: <FaChartLine />,
        label: "Analytics",
        href: "/analytics",
        visible: ["landlord", "agent"],
      },
      {
        icon: <FaClipboardCheck />,
        label: "Contracts & Agreements",
        href: "/contracts",
        visible: ["landlord", "tenant", "agent"],
      },
      {
        icon: <FaTags />,
        label: "Pricing & Offers",
        href: "/pricing-offers",
        visible: ["landlord", "agent"],
      },
      {
        icon: <FaUsers />,
        label: "Tenants & Clients",
        href: "/tenants-clients",
        visible: ["landlord", "agent"],
      },
      {
        icon: <FaTools />,
        label: "Maintenance Requests",
        href: "/maintenance",
        visible: ["tenant", "contractor"],
      },
      {
        icon: <FaHandshake />,
        label: "Contracts Negotiation",
        href: "/negotiations",
        visible: ["landlord", "tenant", "agent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <FaCog />,
        label: "Settings",
        href: "/settings",
        visible: ["landlord", "tenant", "agent", "contractor"],
      },
      {
        icon: <FaQuestionCircle />, // Updated icon for Help & Support
        label: "Help & Support",
        href: "/Support",
        visible: ["landlord", "tenant", "agent", "contractor"],
      },
      {
        icon: <FaSignOutAlt />,
        label: "Logout",
        href: "/logout",
        visible: ["landlord", "tenant", "agent", "contractor"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="flex flex-col mt-10 text-xs">
      {/* MENU items at the top */}
      <div className="flex flex-col gap-2">
        {menuItems[0].items.map((item) => {
          if (item.visible.includes(role)) {
            return (
              <Link
                href={item.href}
                key={item.label}
                className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-1 md:px-4 rounded-md transition-all duration-300 ease-in-out hover:text-gray-700 hover:bg-gray-200 hover:scale-95"
              >
                <span className="text-sm">{item.icon}</span>
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            );
          }
          return null;
        })}
      </div>

      {/* Horizontal line after MENU items */}
      <hr className="border-gray-300 mt-6" />

      {/* OTHER items at the bottom */}
      <div className="flex flex-col gap-2 mt-auto">
        {" "}
        {/* Added mt-auto to push this to the bottom */}
        {menuItems[1].items.map((item) => {
          if (item.visible.includes(role)) {
            return (
              <Link
                href={item.href}
                key={item.label}
                className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-1 md:px-4 rounded-md transition-all duration-300 ease-in-out hover:text-gray-700 hover:bg-gray-200 hover:scale-95"
              >
                <span className="text-sm">{item.icon}</span>
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Menu;
