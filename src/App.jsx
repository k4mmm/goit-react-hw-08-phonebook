import { useState, useEffect } from "react";
import { Filter } from "./Components/Filter/Filter";
import { ContactForm } from "./Components/ContactForm/ContactForm";
import { ContactList } from "./Components/ContactList/ContactList";
import { MainTitle, Title, PhonebookSection } from "./App.styled";

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ?? [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (data) => {
    setContacts(contacts.filter((contact) => contact.id !== data.id));
  };

  const addContact = (data) => {
    const findContact = contacts.find((contact) => {
      return contact.name === data.name;
    });
    !findContact
      ? setContacts((ps) => [data, ...ps])
      : alert(`${data.name} is already in contact`);
  };
  const filterChange = (e) => {
    setFilter(e.currentTarget.value);
  };

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
      <Filter filter={filter} change={filterChange} />
      <ContactList
        deleteContact={deleteContact}
        visibleContacts={visibleContacts()}
      />
    </PhonebookSection>
  );
};
