import Breakdown from "@/components/BreakDown";
import DataCard from "@/components/DataCard";
import Demographics from "@/components/Timeline";
import Occupants from "@/components/Occupants";
import React from "react";
import Calender from "@/components/AppointmentScheduler";
import Notifications from "@/components/Notification";

const notifications = [
  {
    id: 1,
    title: "Rent Payment Received",
    description:
      "Tenant John Doe has successfully paid the rent for January 2025.",
    date: "2025-01-01",
    type: "rent",
  },
  {
    id: 2,
    title: "Maintenance Request Submitted",
    description:
      "Tenant Jane Smith reported a plumbing issue in Apartment 302.",
    date: "2025-01-02",
    type: "maintenance",
  },
  {
    id: 3,
    title: "Lease Expiring Soon",
    description:
      "The lease for Tenant Alice Johnson is set to expire on 2025-02-01.",
    date: "2025-01-03",
    type: "lease",
  },
];

const Landlord = () => {
  return (
    <div className="p-4 lg:p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto flex gap-6 flex-col md:flex-row">
        {/* Left Panel */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          {/* Data Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <DataCard type="total" />
            <DataCard type="onSale" />
            <DataCard type="forRent" />
          </div>

          {/* Breakdown and Occupants Section */}
          <div className="flex gap-6 flex-col lg:flex-row">
            <div className="w-full lg:w-2/3 bg-white shadow-md rounded-lg p-4 h-[320px]">
              <Breakdown />
            </div>
            <div className="w-full lg:w-1/3 h-[320px]">
              <Occupants />{" "}
            </div>
          </div>

          {/* Demographics Section */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <Demographics />
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          {/* Calendar Section */}
          <div className="bg-white shadow-md rounded-lg p-2">
            <h2 className="text-lg font-semibold text-gray-700">
              Appointment Scheduler
            </h2>
            <Calender />
          </div>

          {/* Notifications Section */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Notifications
            </h2>
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landlord;
