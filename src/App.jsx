import { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./Redux/action";
import Filter from "./Components/Filter/Filter";
import { ContactForm } from "./Components/ContactForm/ContactForm";
import { ContactList } from "./Components/ContactList/ContactList";
import { MainTitle, Title, PhonebookSection } from "./App.styled";

const App = ({ contacts, filter, addContact, deleteContact }) => {
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <PhonebookSection>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm submit={addContact} />
      <Title>Contacts</Title>
      <Filter />
      <ContactList
        deleteContact={deleteContact}
        visibleContacts={visibleContacts()}
      />
    </PhonebookSection>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.items.contacts,
    filter: state.items.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (data) => dispatch(actions.addContact(data)),
    deleteContact: (data) => dispatch(actions.deleteContact(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
