import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Redux/contacts/contactsAction";
import { getFilter } from "../../Redux/contacts/contactsSelectors";
import TextField from "@mui/material/TextField";
import { getContacts } from "../../Redux/contacts/contactsSelectors";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filterChange = (e) => dispatch(actions.filterChange(e.target.value));
  return contacts.length > 0 ? (
    <TextField
      id="outlined-helperText"
      label="Search"
      value={filter}
      helperText="Input the contact name"
      onChange={filterChange}
    />
  ) : null;
}
