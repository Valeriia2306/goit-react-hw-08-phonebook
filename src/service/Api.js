import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const addContact = async contact => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};

export const deleteContactById = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data.id;
};
