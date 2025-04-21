import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to the Event Booking App
      </h1>
      <p className="mb-6">Explore and book your favorite events in seconds.</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        <Link href="/events">Events</Link>
      </button>
    </div>
  );
}
