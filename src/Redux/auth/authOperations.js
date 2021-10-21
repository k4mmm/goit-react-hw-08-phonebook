import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (cred, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/signup", cred);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error(
        "Failed to create account. Try another name, email or password"
      );

      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (cred, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", cred);

      token.set(data.token);
      return data;
    } catch (error) {
      toast.error("Failed to authorization. Try another email or password");
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/logout");
      token.unset();
      return data;
    } catch (error) {
      toast.error("Failed to refreshed");
      return rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  "auth/currentUser",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      toast.error("Failed to refreshed");
      return rejectWithValue(error.message);
    }
  }
);
