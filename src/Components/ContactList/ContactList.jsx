import { useSelector, useDispatch } from "react-redux";
import { ButtonDelete, ContactItem, List } from "./ContactList.styled";
import * as actions from "../../Redux/action";
import { getVisibleContacts } from "../../Redux/selectors";

export default function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <List>
      {visibleContacts.map((contact) => {
        return (
          <ContactItem key={contact.id}>
            {contact.name} : {contact.number}
            <ButtonDelete
              type="submit"
              onClick={() => {
                dispatch(actions.deleteContact(contact));
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
