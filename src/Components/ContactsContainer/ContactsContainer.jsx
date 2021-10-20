import Box from "@mui/material/Box";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";

export default function ContactsContainer() {
  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Filter />
      <ContactList />
    </Box>
  );
}
