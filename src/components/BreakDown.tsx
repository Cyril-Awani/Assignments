"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { IoIosArrowDown } from "react-icons/io";

// Sample data for the Line Chart
const chartData = [
  { month: "Jan", revenue: 400, maintenance: 120, profit: 280 },
  { month: "Feb", revenue: 300, maintenance: 150, profit: 150 },
  { month: "Mar", revenue: 500, maintenance: 200, profit: 300 },
  { month: "Apr", revenue: 700, maintenance: 250, profit: 450 },
  // Adding December with Naira formatted data
  { month: "Dec", revenue: 800, maintenance: 300, profit: 500 },
];

const lineConfig = [
  { key: "revenue", label: "Revenue", color: "#4299E1", alwaysVisible: true },
  { key: "maintenance", label: "Maintenance and Repairs", color: "#48BB78" },
  { key: "profit", label: "Profit", color: "#F56565" },
];

const Breakdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleLines, setVisibleLines] = useState({
    maintenance: true,
    profit: true,
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle checkbox changes
  const handleCheckboxChange = (key: string) => {
    setVisibleLines((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Custom tick formatter to display values as Naira
  const formatNaira = (value: number) => {
    return `₦${value.toLocaleString()}`;
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg w-full h-full relative">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <p className="font-semibold text-lg">Expenses Breakdown</p>
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={toggleDropdown}
            aria-expanded={isOpen}
          >
            <p>Month</p>
            <IoIosArrowDown
              size={16}
              className={`text-gray-600 transition-transform duration-300 transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {isOpen && (
            <div className="absolute text-xs top-8 right-0 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <ul className="py-2">
                {["January", "February", "March", "April", "December"].map(
                  (month) => (
                    <li
                      key={month}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {month}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Chart Section */}
      <div className="mt-4" style={{ height: "200px" }}>
        {" "}
        {/* Reduced height */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={formatNaira} />
            <Tooltip formatter={(value: any) => `₦${value.toLocaleString()}`} />
            {/* Render Lines Dynamically */}
            {lineConfig.map(
              ({ key, color, alwaysVisible }) =>
                (alwaysVisible || visibleLines[key]) && (
                  <Line
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stroke={color}
                    dot={false}
                  />
                )
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Checkbox Section */}
      <div className="flex justify-end space-x-4">
        {lineConfig.map(({ key, label, color, alwaysVisible }) => (
          <div key={key} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={key}
              className={`cursor-${alwaysVisible ? "not-allowed" : "pointer"}`}
              checked={alwaysVisible || visibleLines[key]}
              disabled={alwaysVisible}
              onChange={() => !alwaysVisible && handleCheckboxChange(key)}
              style={{ accentColor: color }}
            />
            <label htmlFor={key} className="text-sm">
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breakdown;
