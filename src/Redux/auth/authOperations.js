import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
      return rejectWithValue();
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
      return rejectWithValue();
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
      rejectWithValue();
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
      rejectWithValue();
    }
  }
);
