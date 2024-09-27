import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to create a booking (already exists)
export const createBooking = createAsyncThunk('booking/createBooking', async (bookingData, { rejectWithValue }) => {
  try {
    const response = await axios.post('/api/bookings', bookingData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Thunk to fetch user bookings (already exists)
export const fetchUserBookings = createAsyncThunk('booking/fetchUserBookings', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('/api/bookings');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    bookings: [],
    billingAddress: {},
    loading: false,
    error: null,
  },
  reducers: {
    clearBookingError: (state) => {
      state.error = null;
    },
    resetBookings: (state) => {
      state.bookings = [];
    },
    saveBillingAddress: (state, action) => {
      state.billingAddress = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.bookings.push(action.payload);
        state.loading = false;
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserBookings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserBookings.fulfilled, (state, action) => {
        state.bookings = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserBookings.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

// Export actions to be used in components
export const { clearBookingError, resetBookings, saveBillingAddress } = bookingSlice.actions;

export default bookingSlice.reducer;
