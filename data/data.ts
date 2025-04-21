import { Event, User, Booking } from "@/interfaces/types";

export const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
  },
  {
    id: 2,
    name: "Alice Smith",
    email: "alice@gmail.com",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@gmail.com",
  },
];

export const events: Event[] = [
  {
    id: 1,
    title: "Tech Talk",
    description: "Latest in Tech",
    start_time: "2025-04-25T10:00:00",
    max_capacity: 2,
  },
  {
    id: 2,
    title: "Startup Pitch",
    description: "Pitch Night",
    start_time: "2025-04-27T18:00:00",
    max_capacity: 1,
  },
  {
    id: 3,
    title: "Startup Pitch",
    description: "Pitch Night",
    start_time: "2025-04-27T18:00:00",
    max_capacity: 0,
  },
];

export let bookings: Booking[] = [];
