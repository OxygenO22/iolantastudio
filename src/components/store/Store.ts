import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import authorisationSlice from "./authorisationSlice/authorisationSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
    auth: authorisationSlice
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;