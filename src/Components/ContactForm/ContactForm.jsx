import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Form, Input, Label, ButtonAdd } from "./ContactForm.styled";
import { addNewContact } from "../../Redux/contacts/contactsOperations";
import { getContacts } from "../../Redux/contacts/contactsSelectors";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const prevContacts = useSelector(getContacts);

  const reset = () => {
    setName("");
    setNumber("");
  };

  const inputChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const addContact = (e) => {
    e.preventDefault();
    let id = uuidv4();
    const contactData = {
      name,
      id,
      number,
    };
    const findContacts = prevContacts.find((contact) => contact.name === name);
    !findContacts
      ? dispatch(addNewContact(contactData))
      : alert(`${name} is already in contact`);
    reset();
  };

  return (
    <Form onSubmit={addContact}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          onChange={inputChange}
          value={name}
          placeholder="New contact name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Label>
      <Label>
        Tel:
        <Input
          type="tel"
          name="number"
          value={number}
          placeholder="New contact number"
          onChange={inputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </Label>
      <ButtonAdd type="submit">Add contact</ButtonAdd>
    </Form>
  );
}
