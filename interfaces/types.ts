export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  start_time: string;
  max_capacity: number;
}

export interface Booking {
  userId: number;
  eventId: number;
}
