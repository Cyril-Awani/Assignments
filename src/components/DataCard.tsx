import React from "react";

const formatNaira = (value: number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(value);
};

const DataCard = ({ type }: { type: string }) => {
  return (
    <div className="bg-white text-black rounded-lg p-4 flex-1 min-w-[150px] shadow-md transition-all duration-800 hover:bg-blue-900 hover:text-white hover:shadow-lg hover:scale-105 relative">
      <p className="capitalize text-base font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
        Total Properties
      </p>
      <h5 className="text-lg md:text-xl font-bold mt-2 whitespace-nowrap">
        {formatNaira(4562000)}
      </h5>
      <p className="text-xs  text-gray-500 capitalize hover:text-white mt-1 whitespace-nowrap">
        300k short from last year
      </p>
      <div className="absolute top-0 right-0 bg-blue-500 h-10 w-10 rounded-bl-full opacity-10"></div>
      <div className="absolute bottom-0 left-0 bg-blue-500 h-10 w-10 rounded-tr-full opacity-10"></div>
    </div>
  );
};

export default DataCard;
