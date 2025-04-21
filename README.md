# Event Booking

## Live Demo

- [https://event-booking-one.vercel.app](https://event-booking-one.vercel.app)

---

## 📋 Project Overview

This is a simple event booking platform built using **Next.js** and **TypeScript**, with a simulated backend using in-memory data structures. Using redux-toolkit

The project was built as part of a fullstack assignment and demonstrates both frontend and backend integration, with basic validation and user feedback.

---

## 🧰 Tech Stack

- **Next.js** (Fullstack React Framework)
- **TypeScript** (Strict typing & interfaces)
- **Vercel** (Deployment)

---

## ✅ Core Features

### Frontend (`/events`)

- Displays a list of all available events
- Shows:
  - Event title
  - Start time
  - Remaining capacity
  - "Book" button (disabled when event is full)
- On booking:
  - Sends request to backend API
  - Displays confirmation or error toast

### Backend (`/api/book`)

- Accepts POST requests with `{ userId, eventId }`
- Checks:
  - If the user already booked the event → returns error
  - If the event has reached full capacity → returns error
  - Else → registers the booking and returns success
- Implements constraints using logic and in-memory data
- Uses TypeScript interfaces for validation

---

## Database Schema (Design Only)

No real database was used, but here's the intended structure:

### `users`

| Field | Type   | Notes       |
| ----- | ------ | ----------- |
| id    | string | Primary Key |
| name  | string |             |
| email | string |             |

### `events`

| Field        | Type   | Notes         |
| ------------ | ------ | ------------- |
| id           | string | Primary Key   |
| title        | string |               |
| description  | string |               |
| start_time   | Date   |               |
| max_capacity | number | Booking limit |

### `bookings`

| Field    | Type   | Notes                     |
| -------- | ------ | ------------------------- |
| id       | string | Primary Key               |
| user_id  | string | Foreign key → `users.id`  |
| event_id | string | Foreign key → `events.id` |

Constraints:

- A user can only book an event once
- Events cannot exceed the maximum capacity

---

## How to Run Locally

1. **Clone the repository**

```bash
git clone https://github.com/Nikhil-gna/Event-Booking.git
cd Event-Booking
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the dev server**

```bash
npm run dev
```

4. Open [http://localhost:3000/events](http://localhost:3000/events) to view the app.

---

## 📌 Assumptions & Notes

- User login is out of scope — mock users are hardcoded.
- No real database — all bookings and data are stored in-memory.
- Data resets on each refresh (as expected).
- Minimal styling was used to keep focus on functionality.
- Vercel deployment uses serverless API routes.

---
