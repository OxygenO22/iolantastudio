import { Action, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

export const fetchUsers = createAsyncThunk<Users[], undefined, {rejectValue: string}>(
  'todos/fetchTodos',
  async function(_, {rejectWithValue}) {
    
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      console.log(response)
  
      if (!response.ok) {
        return rejectWithValue('Server Error!');
      }
      const data = await response.json();
      console.log('work');
      console.log(data);
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