import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsReducer";

const store = configureStore({
  reducer: {
    items: contactsReducer,
  },
  middleware: [logger],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
