"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Default calendar styles
import { IoIosArrowDown } from "react-icons/io";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const AppointmentScheduler = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  // Function to add dots for specific dates
  const getTileContent = ({ date }: { date: Date }) => {
    const dots: Record<string, string> = {
      "2024-01-05": "bg-red-500", // Report
      "2024-01-10": "bg-green-500", // Check
      "2024-01-15": "bg-blue-500", // Visit
      "2024-01-20": "bg-yellow-500", // Meeting
    };

    const dateString = date.toISOString().split("T")[0];
    return dots[dateString] ? (
      <div className={`w-2 h-2 rounded-full mx-auto ${dots[dateString]}`}></div>
    ) : null;
  };

  const toggleEvents = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="max-w-md mx-auto py-4 font-sans">
        <div className="bg-white shadow-lg rounded-lg">
          {/* Calendar Header */}
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileContent={getTileContent}
            prevLabel="<"
            nextLabel=">"
            formatMonthYear={(locale, date) =>
              date.toLocaleDateString(locale, {
                month: "long",
                year: "numeric",
              })
            }
            className="react-calendar border-none"
          />
        </div>
        <div className="mt-4 flex justify-center items-center space-x-4 text-sm">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>Reports</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Checks</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>Visits</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span>Meetings</span>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleEvents}
      >
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <IoIosArrowDown
          size={16}
          className={`text-gray-600 transition-transform duration-300 transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="flex flex-col gap-4">
          {events.map((event) => (
            <div
              className="p-5 rounded-md border-2 border-blue-100 border-t-4 "
              key={event.id}
            >
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-600">{event.title}</h1>
                <span className="text-gray-300 text-xs">{event.time}</span>
              </div>
              <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentScheduler;
