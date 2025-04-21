import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Booking } from "@/interfaces/types";

interface BookingState {
  bookings: Booking[];
}

const initialState: BookingState = {
  bookings: [],
};

const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<Booking>) => {
      state.bookings.push(action.payload);
    },
    clearBookings: (state) => {
      state.bookings = [];
    },
  },
});

export const { addBooking, clearBookings } = bookingSlice.actions;
export default bookingSlice.reducer;
