import * as actions from "./contactsAction";
import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addNewContact,
  deleteContact,
} from "./contactsOperations";

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addNewContact.fulfilled]: (_, { payload }) => payload,
  [deleteContact.fulfilled]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const filter = createReducer("", {
  [actions.filterChange]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
  isLoading,
});
