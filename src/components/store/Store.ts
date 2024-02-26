import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import authorisationSlice from "./authorisationSlice/authorisationSlice";
import postSlice from './createPostSlice/CreatePostSlice'

const store = configureStore({
  reducer: {
    users: userSlice,
    auth: authorisationSlice,
    posts: postSlice
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;