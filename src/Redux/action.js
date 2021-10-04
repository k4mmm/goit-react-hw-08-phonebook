export const deleteContact = (data) => ({
  type: "deleteContact",
  payload: data,
});

export const addContact = (data) => ({
  type: "addContact",
  payload: data,
});

export const filterChange = (value) => ({
  type: "filterChange",
  payload: value,
});
