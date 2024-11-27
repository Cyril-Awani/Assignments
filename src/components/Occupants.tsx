"use client"; // Ensure this is used in a client-side component
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// Sample data for occupancy rates
const occupancyData = [
  { name: "Property A Occupied", value: 10, fill: "#48BB78" },
  { name: "Property A Vacant", value: 2, fill: "#E2E8F0" },
  { name: "Property B Occupied", value: 8, fill: "#4299E1" },
  { name: "Property B Vacant", value: 4, fill: "#CBD5E0" },
  { name: "Property C Occupied", value: 15, fill: "#F56565" },
  { name: "Property C Vacant", value: 5, fill: "#EDF2F7" },
  // Add more data as needed
];

const Occupants: React.FC = () => {
  return (
    <div className="bg-white shadow-2xl rounded-lg w-full h-full relative">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Tenant Occupancy Rates
      </h2>

      {/* ResponsiveContainer for the PieChart */}
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={occupancyData}
            dataKey="value"
            nameKey="name"
            outerRadius="80%"
            label
            labelLine={false}
            isAnimationActive={true}
            style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }} // Add shadow to the chart
          >
            {/* Custom color for each segment */}
            {occupancyData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.fill}
                style={{
                  filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))", // Add shadow effect to each slice
                }}
              />
            ))}
          </Pie>

          {/* Tooltip to show on hover */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              color: "#fff",
              borderRadius: "5px",
              padding: "10px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Occupants;
