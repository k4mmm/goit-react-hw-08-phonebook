import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.items.contacts;

export const getFilter = (state) => state.items.filter;

export const getIsLoading = (state) => state.items.isLoading;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
