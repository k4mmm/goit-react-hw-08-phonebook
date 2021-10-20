import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  getVisibleContacts,
  getIsLoading,
} from "../../Redux/contacts/contactsSelectors";
import {
  fetchContacts,
  deleteContact,
} from "../../Redux/contacts/contactsOperations";
import { ContactItem, StyledList } from "./ContactList.styled";

export default function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);
  const isLoading = useSelector(getIsLoading);
  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <>
      <StyledList>
        {isLoading && <p>Loading...</p>}
        {visibleContacts.map((contact) => {
          return (
            <ContactItem key={contact.id}>
              {contact.name} : {contact.number}
              <IconButton
                edge="end"
                aria-label="delete"
                type="submit"
                onClick={() => {
                  dispatch(deleteContact(contact.id));
                }}
              >
                <DeleteIcon />
              </IconButton>
            </ContactItem>
          );
        })}
      </StyledList>
    </>
  );
}
