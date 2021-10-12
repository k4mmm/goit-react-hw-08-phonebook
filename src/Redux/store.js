import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsReducer";

const store = configureStore({
  reducer: {
    items: contactsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
