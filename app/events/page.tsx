"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "@/store/store";
import { addBooking, clearBookings } from "@/store/slices/bookingSlice";
import { events as allEvents } from "@/data/data";
import { getRemainingSpots } from "@/utils/bookingUtils";
import { EventCard } from "@/components/EventCard";
import { SearchBar } from "@/components/SearchBar";
import toast from "react-hot-toast";

export default function EventsPage() {
  const bookings = useSelector((state: RootState) => state.bookings.bookings);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("bookings");
    if (stored) {
      const parsed = JSON.parse(stored);
      parsed.forEach((b: { userId: number; eventId: number }) =>
        dispatch(addBooking(b))
      );
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  const handleBook = async (eventId: number) => {
    const userId = 1;

    const res = await fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, eventId }),
    });

    const data = await res.json();

    if (data.success) {
      dispatch(addBooking({ userId, eventId }));
      toast.success("Booking successful!");
    } else {
      toast.error(data.message);
    }
  };

  const handleClear = () => {
    localStorage.removeItem("bookings");
    dispatch(clearBookings());
    toast.success("All bookings cleared!");
  };

  const filteredEvents = allEvents.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-center w-full">
          Explore Events
        </h1>
      </div>

      <div className="mb-6 flex justify-end">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <button
          onClick={handleClear}
          className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Clear Bookings
        </button>
      </div>

      {filteredEvents.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => {
            const isBooked = bookings.some(
              (b) => b.userId === 1 && b.eventId === event.id
            );
            const remaining = getRemainingSpots(event.id, bookings);

            return (
              <EventCard
                key={event.id}
                event={event}
                isBooked={isBooked}
                remaining={remaining}
                onBook={() => handleBook(event.id)}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-500">No events found.</p>
      )}
    </div>
  );
}
