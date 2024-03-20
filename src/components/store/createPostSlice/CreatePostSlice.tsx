import { Action, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type Post = {
  id: string;
  title: string;
  text: string;
};

type PostState = {
  list: Post[];
  loading: boolean;
  error: string | null;
};

export const fetchPosts = createAsyncThunk<Post[], undefined, {rejectValue: string}>(
  'posts/fetchPosts',
  async function(_, {rejectWithValue}) {
    const response = await fetch("http://localhost:5001/posts");

    if(!response.ok) {
      return rejectWithValue('Server Error!')
    }
    const data = await response.json();
    return data;
  }
);

export const addNewPost = createAsyncThunk<Post, {title: string, text: string}, { rejectValue: string }>(
  'posts/addNewPost',
  async function(props, {rejectWithValue}) {
    const post = {
      id: new Date().toISOString(),
      title: props.title,
      text: props.text,
    };

  const response = await fetch("http://localhost:5001/posts", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  if (!response.ok) {
    return rejectWithValue("Can\'t add post. Server Error!");
  }
  return (await response.json()) as Post;
  }
);

export const deleteTodo = createAsyncThunk<string, string, { rejectValue: string }>(
  "posts/deleteTodo",
  async function (id, { rejectWithValue }) {
    const response = await fetch("http://localhost:5001/posts" + `/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      return rejectWithValue("Can\'t delete task. Server error!");
    }
    return id;
  }
);

const initialState: PostState = {
  list: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(addNewPost.pending, (state) => {
        state.error = null;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.list = state.list.filter((todo) => todo.id !== action.payload);
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  }
});

export default postSlice.reducer;

function isError(action: Action) {
  return action.type.endsWith("rejected");
}