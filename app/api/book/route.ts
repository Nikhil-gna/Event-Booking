import { NextResponse } from "next/server";
import { bookings } from "@/data/data";
import { hasAlreadyBooked, isEventFull } from "@/utils/bookingUtils";

export async function POST(req: Request) {
  const { userId, eventId } = await req.json();

  console.log(userId, eventId);

  if (hasAlreadyBooked(userId, eventId)) {
    return NextResponse.json(
      { success: false, message: "You already booked this event." },
      { status: 400 }
    );
  }

  if (isEventFull(eventId)) {
    return NextResponse.json(
      { success: false, message: "Event is fully booked." },
      { status: 400 }
    );
  }

  bookings.push({ userId, eventId });
  console.log(bookings);
  return NextResponse.json({ success: true, message: "Booking successful!" });
}

export async function GET() {
  return NextResponse.json({ message: "Hello, Testing Book API route" });
}
