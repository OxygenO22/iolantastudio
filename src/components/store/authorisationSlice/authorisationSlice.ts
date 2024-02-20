import { createSlice } from "@reduxjs/toolkit";

interface ISetUser {
  email: string | null,
  token: string | null,
  id: string | null,
}

const initialState: ISetUser = {
  email: null,
  token: null,
  id: null,
};

const authorisationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    }
  },
});

export const {setUser, removeUser} = authorisationSlice.actions;

export default authorisationSlice.reducer;