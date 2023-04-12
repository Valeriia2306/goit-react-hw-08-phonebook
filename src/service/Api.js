import axios from 'axios';
axios.defaults.baseURL = 'https://640dadb71a18a5db837c96a6.mockapi.io';

//642d7ab9bf8cbecdb4076786.mockapi.io

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
