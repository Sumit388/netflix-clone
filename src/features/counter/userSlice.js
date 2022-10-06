import {  createSlice } from '@reduxjs/toolkit';

//defined initial state
const initialState = {
user: null,
};

//creating a user slice defining user state
export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
   login: (state, action)=>{
    state.user =action.payload;
   },
   logout: (state) =>{
    state.user=null;
   },
  },
});

export const {login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
