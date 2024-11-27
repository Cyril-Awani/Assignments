import React from "react";

interface WelcomeCardProps {
  tenant: {
    name: string;
    rentedProperty: string;
    leaseStart: string;
    leaseEnd: string;
  };
}

const WelcomeCard = ({ tenant }: WelcomeCardProps) => {
  const { name, rentedProperty, leaseStart, leaseEnd } = tenant;

  const nextPaymentDate = new Date(leaseEnd);
  nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1); 
  const formattedNextPaymentDate = nextPaymentDate.toLocaleDateString();

  return (
    <div className="bg-white w-full p-6 rounded-lg space-y-2 shadow-lg mx-4 mt-8">
      {/* Welcome message */}
      <h1 className="text-2xl font-bold text-gray-800">
        Welcome back, {name}!
      </h1>

      {/* Overview of tenancy */}
      <p className="text-gray-600">Here`s an overview of your tenancy.</p>

      {/* Rent payment due date */}

      <p className="flex items-center justify-center text-gray-800 font-semibold mt-4">
        Your next rent payment is due on:
        <span>
          <p className="text-lg text-blue-600"> {formattedNextPaymentDate}</p>
        </span>
      </p>

      {/* Rented property details */}
      <div className="flex">
        <p className="text-gray-800 font-semibold">@</p>
        <p className="text-lg text-gray-700">{rentedProperty}</p>
      </div>

      {/* Payment button */}

      <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
        Make a Payment
      </button>
    </div>
  );
};

export default WelcomeCard;
