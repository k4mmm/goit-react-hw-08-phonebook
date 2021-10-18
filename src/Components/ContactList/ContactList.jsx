import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { ButtonDelete, ContactItem, List } from "./ContactList.styled";
import {
  getVisibleContacts,
  getIsLoading,
} from "../../Redux/contacts/contactsSelectors";
import {
  fetchContacts,
  deleteContact,
} from "../../Redux/contacts/contactsOperations";

export default function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);
  const isLoading = useSelector(getIsLoading);
  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <List>
      {isLoading && <p>Loading...</p>}
      {visibleContacts.map((contact) => {
        return (
          <ContactItem key={contact.id}>
            {contact.name} : {contact.number}
            <ButtonDelete
              type="submit"
              onClick={() => {
                dispatch(deleteContact(contact.id));
              }}
            >
              Delete
            </ButtonDelete>
          </ContactItem>
        );
      })}
    </List>
  );
}
