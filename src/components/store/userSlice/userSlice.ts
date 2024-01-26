import { createSlice } from "@reduxjs/toolkit";

interface Users {
  id: string,
  name: string,
  username: string,
  email: string,
}

interface TodoState {
  list: Users[],
  loading: boolean,
  error: string | null
}

const initialState: TodoState = {
  list: [],
  loading: false,
  error: null
}

const userSlice = createSlice({
  name: 'users',

  initialState,

  reducers: {},
});