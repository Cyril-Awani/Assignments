import WelcomeCard from "@/components/WelcomeCard";
import React from "react";
import { tenantData } from "@/lib/data";

const Tenant = () => {
  const tenant = tenantData[0];
  return (
    <div className="flex flex-col lg:flex-row w-full gap-6">
      {/* Left Section */}
      <div className="w-full lg:w-1/2">
        <WelcomeCard tenant={tenant} />
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 p-4">
        <h2 className="text-xl font-semibold text-gray-800">Right Section</h2>
        <p className="text-gray-600">This is the right section content.</p>
      </div>
    </div>
  );
};

export default Tenant;
