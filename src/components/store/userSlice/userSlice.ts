import { Action, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Users, TodoState } from "./userSliceTypes";

const initialState: TodoState = {
  list: [],
  loading: false,
  error: null
}

export const fetchUsers = createAsyncThunk<Users[], undefined, {rejectValue: string}>(
  'users/fetchUsers',
  async function(_, {rejectWithValue}) {
    
      const response = await fetch('http://localhost:5001/users');
      
      if (!response) {
        return rejectWithValue('Server Error!');
      }
      const data = await response.json();
      return data;
  }
);

export const fetchUser = createAsyncThunk<Users[], string, {rejectValue: string}>(
  'user/fetchUser',
  async function(id, {rejectWithValue}) {
    
      const response = await fetch(`http://localhost:5001/users/${id}`);
      
      if (!response) {
        return rejectWithValue('Server Error!');
      }
      const data = await response.json();
      return data;
  }
);

const userSlice = createSlice({
  name: 'users',

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      })
  }
});

export default userSlice.reducer;

function isError(action: Action) {
  return action.type.endsWith('rejected')
}