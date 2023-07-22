import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: localStorage.getItem("email"),
  idToken: null,
  email: localStorage.getItem("email"),

};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login(state, actions) {
      state.isAuthenticated = true;
      state.email= actions.payload.email;
      state.idToken = actions.payload.idToken;
      localStorage.setItem("idToken", actions.payload.idToken);
      localStorage.setItem("email", actions.payload.email);
    
    },
    logout(state) {
      state.isAuthenticated = false;
      state.idToken = null;
      state.email=null;
      localStorage.removeItem("idToken");
      localStorage.removeItem("email");
       localStorage.clear();
    },
  },
});

export default authSlice.reducer;

export const authActions = authSlice.actions;
