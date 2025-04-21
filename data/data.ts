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
    title: "Tech Talk: AI Trends",
    description:
      "Exploring the latest advancements in Artificial Intelligence.",
    start_time: "2025-04-25T10:00:00",
    max_capacity: 2,
  },
  {
    id: 2,
    title: "Startup Pitch Competition",
    description: "Exciting night showcasing innovative startup ideas.",
    start_time: "2025-04-27T18:00:00",
    max_capacity: 1,
  },
  {
    id: 3,
    title: "Web Development Workshop",
    description: "Hands-on workshop on modern web development techniques.",
    start_time: "2025-05-02T14:00:00",
    max_capacity: 0,
  },
  {
    id: 4,
    title: "Data Science Seminar",
    description: "Insightful seminar on the applications of data science.",
    start_time: "2025-05-10T11:00:00",
    max_capacity: 4,
  },
  {
    id: 5,
    title: "Mobile App Development Meetup",
    description: "Networking event for mobile app developers.",
    start_time: "2025-05-15T19:00:00",
    max_capacity: 5,
  },
  {
    id: 6,
    title: "Cybersecurity Conference",
    description: "Learn about the latest trends and threats in cybersecurity.",
    start_time: "2025-05-20T09:00:00",
    max_capacity: 2,
  },
];

export let bookings: Booking[] = [];
