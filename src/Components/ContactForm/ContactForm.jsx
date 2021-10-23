import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { addNewContact } from "../../Redux/contacts/contactsOperations";
import { getContacts } from "../../Redux/contacts/contactsSelectors";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const dispatch = useDispatch();
  const prevContacts = useSelector(getContacts);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addContact = (data) => {
    const findContacts = prevContacts.find(
      (contact) => contact.name === data.name
    );
    !findContacts
      ? dispatch(addNewContact(data))
      : alert(`${data.name} is already in contact`);
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
        onSubmit={handleSubmit(addContact)}
      >
        {errors.name ? (
          <TextField
            error
            id="outlined-error"
            label="Incorrect Name"
            variant="outlined"
            type="text"
            name="name"
            placeholder="New contact name"
            required
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            {...register("name", {
              required: true,
              pattern:
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            })}
          />
        ) : (
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            placeholder="New contact name"
            required
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            {...register("name", {
              required: true,
              pattern:
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            })}
          />
        )}
        {errors.number ? (
          <TextField
            error
            id="outlined-error"
            label="Incorrect Number"
            variant="outlined"
            type="tel"
            name="number"
            placeholder="New contact number"
            required
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            {...register("number", {
              required: true,
              pattern:
                /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
            })}
          />
        ) : (
          <TextField
            id="outlined-basic"
            label="Number"
            variant="outlined"
            type="tel"
            name="number"
            placeholder="New contact number"
            required
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            {...register("number", {
              required: true,
              pattern:
                /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
            })}
          />
        )}
        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </Box>
    </Box>
  );
}
