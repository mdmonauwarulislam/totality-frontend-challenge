import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for user authentication
const initialState = {
  user: null,
};

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to log in the user
    login: (state, action) => {
      const { name, avatar } = action.payload; 
      state.user = {
        name,
        avatar,
      };
    },
    // Action to log out the user
    logout: (state) => {
      state.user = null;
    },
  },
});

// Export the action creators
export const { login, logout } = authSlice.actions;

// Export the reducer to be used in the store
export default authSlice.reducer;
