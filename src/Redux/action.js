import { createAction } from "@reduxjs/toolkit";

export const deleteContact = createAction("deleteContact");
export const addContact = createAction("addContact");
export const filterChange = createAction("filterChange");
