import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: {
    name: null,
  },
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
      loginReducer: (state, action) => {
        const { name } = action.payload;
        state.user = { name };
        state.isLoggedIn = true;
      },
      logoutReducer: (state, _) => {
        state.user = initialState.user;
        state.isLoggedIn = false;
      },
  },
});

export const { loginReducer, logoutReducer } = authSlice.actions;

export default authSlice.reducer;