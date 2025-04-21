"use client";

import { Event } from "@/interfaces/types";

interface Props {
  event: Event;
  isBooked: boolean;
  remaining: number;
  onBook: () => void;
}

export const EventCard = ({ event, isBooked, remaining, onBook }: Props) => {
  return (
    <div className="border border-gray-200 p-5 rounded-2xl shadow-sm bg-white hover:shadow-lg transition-shadow duration-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        {event.title}
      </h2>
      <p className="text-gray-600 mb-2">{event.description}</p>

      <div className="text-sm text-gray-500 mb-2">
        Start:{" "}
        <span className="text-gray-800">
          {new Date(event.start_time).toLocaleString()}
        </span>
      </div>

      <p className="text-sm font-medium text-blue-600 mb-4">
        Remaining Spots: {remaining}
      </p>

      <button
        onClick={onBook}
        disabled={isBooked || remaining === 0}
        className={`w-full py-2 px-4 rounded-lg text-white font-medium transition-colors ${
          isBooked || remaining === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isBooked ? "Booked" : remaining === 0 ? "Fully Booked" : "Book Now"}
      </button>
    </div>
  );
};
