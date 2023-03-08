import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 email: "",
 isAuthorized: false
}

export const AuthSlice = createSlice({
 name: "auth",
 initialState,
 reducers: {
 authLogin(state, action){
   state.email = action.payload;
   state.isAuthorized = true
 },
 logOut(state, action){
  state.email = "";
  state.isAuthorized = false
 }
 }
})
export const authAction = AuthSlice.actions