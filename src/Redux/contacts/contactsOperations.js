import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getContacts,
  addContact,
  deleteOldContact,
} from "../../API/contactsApi";

export const fetchContacts = createAsyncThunk(
  "fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      return await getContacts();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addNewContact = createAsyncThunk(
  "addNewContact",
  async (newContact, { rejectWithValue }) => {
    try {
      const res = await addContact(newContact);
      if (res.status !== 201) {
        throw new Error(res.message);
      }
      return await getContacts();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      const res = await deleteOldContact(id);
      if (res.status !== 200) {
        throw new Error(res.message);
      }
      return await getContacts();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
