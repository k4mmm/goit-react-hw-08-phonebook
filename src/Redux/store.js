import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
const initialState = {
  items: {
    contacts: JSON.parse(localStorage.getItem("contacts")) ?? [],
    filter: "",
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "deleteContact":
      return {
        ...state,
        items: {
          ...state.items,
          contacts: state.items.contacts.filter(
            (contact) => contact.id !== payload.id
          ),
        },
      };

    case "addContact":
      const findContact = state.items.contacts.find((contact) => {
        return contact.name === payload.name;
      });
      return !findContact
        ? {
            ...state,
            items: {
              ...state.items,
              contacts: [payload, ...state.items.contacts],
            },
          }
        : alert(`${payload.name} is already in contact`);

    case "filterChange":
      return {
        ...state,
        items: {
          ...state.items,
          filter: payload,
        },
      };

    default:
      return state;
  }
};
const store = createStore(reducer, composeWithDevTools());

export default store;
