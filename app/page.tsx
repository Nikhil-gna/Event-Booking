import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center  px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Welcome to the Event Booking App
        </h1>
        <p className="mb-6 text-gray-400 text-lg">
          Explore and book your favorite events in seconds.
        </p>
        <Link href="/events">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-base font-medium transition-all shadow-md hover:shadow-lg">
            View Events
          </button>
        </Link>
      </div>
    </div>
  );
}
