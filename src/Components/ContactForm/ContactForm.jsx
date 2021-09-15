import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { Form, Input, Label, ButtonAdd } from "./ContactForm.styled";

export const ContactForm = ({ submit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

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
    submit(contactData);
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
};

ContactForm.propTypes = {
  Submit: PropTypes.func,
};
