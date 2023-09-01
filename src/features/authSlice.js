// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { loginAPI } from './api'; // Import your API request function

const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  isError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.isError = null;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.isLoading = false;
      state.isError = null;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;

// Thunk action for login
export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const user = await loginAPI(credentials); // Replace with your API request
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
