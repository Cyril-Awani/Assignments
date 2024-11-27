"use client";
import { Chart } from "react-google-charts";

const Timeline: React.FC = () => {
  const data = [
    ["Tenant", "Start Date", "End Date", "Description"], // Header Row
    ["John Doe", new Date(2023, 0, 1), new Date(2023, 11, 31), "Lease Period"], // Tenant name as string, start and end dates as Date objects, description as string
    ["Jane Smith", new Date(2023, 6, 1), new Date(2024, 5, 30), "Lease Period"], // Same structure
    ["Tom Brown", new Date(2024, 0, 1), new Date(2024, 11, 31), "Lease Period"], // Same structure
  ];

  const options = {
    timeline: { showRowLabels: true },
    avoidOverlappingGridLines: true,
    tooltip: { isHtml: true },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Tenant Lease Timeline</h2>
      <Chart
        chartType="Timeline"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default Timeline;
