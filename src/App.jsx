import Filter from "./Components/Filter/Filter";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import { MainTitle, Title, PhonebookSection } from "./App.styled";

export default function App() {
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
