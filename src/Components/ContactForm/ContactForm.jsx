import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
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
    const contactData = {
      name,
      number,
    };
    const findContacts = prevContacts.find((contact) => contact.name === name);
    !findContacts
      ? dispatch(addNewContact(contactData))
      : alert(`${name} is already in contact`);
    reset();
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <ContactPhoneIcon />
        </Avatar>
      </Box>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={addContact}
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          onChange={inputChange}
          value={name}
          placeholder="New contact name"
          required
        />
        <TextField
          id="outlined-basic"
          label="Number"
          variant="outlined"
          type="tel"
          name="number"
          value={number}
          placeholder="New contact number"
          onChange={inputChange}
          required
        />
        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </Box>
    </Box>
  );
}
