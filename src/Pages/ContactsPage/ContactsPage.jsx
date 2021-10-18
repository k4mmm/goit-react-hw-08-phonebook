import { MainTitle, Title, PhonebookSection } from "./ContactsPage.styled";
import Filter from "../../Components/Filter/Filter";
import ContactForm from "../../Components/ContactForm/ContactForm";
import ContactList from "../../Components/ContactList/ContactList";
export default function Contacts() {
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
