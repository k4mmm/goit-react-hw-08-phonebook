import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export async function getContacts() {
  const res = await axios.get("/contacts");
  return res.data;
}

export async function addContact(newContact) {
  const res = await axios.post("/contacts", newContact);
  return res;
}

export async function deleteOldContact(id) {
  const res = await axios.delete(`/contacts/${id}`);
  return res;
}
