import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
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
      toast.error("Contacts undefinded");
      return rejectWithValue(error.message);
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
      toast.error("Error creating contact. Missing required fields.");
      return rejectWithValue(error.message);
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
      toast.error("Server error");
      return rejectWithValue(error.message);
    }
  }
);
