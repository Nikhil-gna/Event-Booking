import { events, bookings } from "../data/data";

export function hasAlreadyBooked(userId: number, eventId: number): boolean {
  return bookings.some((b) => b.userId === userId && b.eventId === eventId);
}

export function isEventFull(eventId: number): boolean {
  const total = bookings.filter((b) => b.eventId === eventId).length;
  const event = events.find((e) => e.id === eventId);
  return !!event && total >= event.max_capacity;
}

export function getRemainingSpots(
  eventId: number,
  bookings: { userId: number; eventId: number }[]
): number {
  const total = bookings.filter((b) => b.eventId === eventId).length;
  const event = events.find((e) => e.id === eventId);
  return event ? event.max_capacity - total : 0;
}
