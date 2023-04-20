import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredContact,
  selectLoading,
  selectError,
} from 'Redux/phonebook/selectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'Redux/phonebook/operations';

import { List, Item, Button } from './ContactsList.styled';
import { ThreeDots } from 'react-loader-spinner';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContact);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const delContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && !error && (
        <ThreeDots
          height="40"
          width="40"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )}
      {/* {isLoading && !error && <div>Loading...</div>} */}
      <List>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <span>{name}:</span>
              <span>{number}</span>
              <Button type="button" onClick={() => delContact(id)}>
                Delete
              </Button>
            </Item>
          );
        })}
      </List>
    </>
  );
};

export { ContactList };
