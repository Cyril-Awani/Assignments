import { FaSearch, FaRegEnvelope, FaBell } from "react-icons/fa"; // Importing icons from React Icons
import { MdAccountCircle } from "react-icons/md"; // User Avatar Icon
import { IoIosArrowDown } from "react-icons/io"; // Arrow icon

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white text-gray-800 shadow-lg">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded ring-gray-300 px-3 py-1 bg-gray-100 hover:ring-gray-500 transition-all duration-200">
        <input
          type="text"
          placeholder="Search..."
          className="w-[250px] p-2 bg-transparent outline-none text-gray-800 placeholder-gray-500"
        />
        <FaSearch size={16} color="gray" />
      </div>

      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        {/* Message Icon */}
        <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all">
          <FaRegEnvelope size={20} color="gray" />
        </div>

        {/* Notification Icon */}
        <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer relative hover:bg-gray-200 transition-all">
          <FaBell size={20} color="gray" />
          <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs font-semibold">
            1
          </div>
        </div>

        {/* User Info and Dropdown */}
        <div className="flex items-center gap-2 relative group">
          <div className="flex flex-col text-right">
            <span className="text-sm font-medium text-gray-800">John Doe</span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            {/* Animated Arrow */}
            <MdAccountCircle size={30} color="gray" className="rounded-full" />
            <IoIosArrowDown
              size={16}
              className="text-gray-600 transition-transform duration-300 transform group-hover:rotate-180"
            />
          </div>

          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-40 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto">
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Profile
            </div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Settings
            </div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
