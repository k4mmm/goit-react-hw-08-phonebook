export const getContacts = (state) => state.items.contacts;

export const getFilter = (state) => state.items.filter;

export const getVisibleContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter((item) =>
    item.name.toLowerCase().includes(normalizedFilter)
  );
};
