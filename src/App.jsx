import { useEffect } from "react";
import { useSelector } from "react-redux";
import Filter from "./Components/Filter/Filter";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import { MainTitle, Title, PhonebookSection } from "./App.styled";
import { getContacts } from "./Redux/selectors";

export default function App() {
  const contacts = useSelector(getContacts);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <PhonebookSection>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </PhonebookSection>
  );
}
