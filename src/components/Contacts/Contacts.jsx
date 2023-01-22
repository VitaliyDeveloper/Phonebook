import { useSelector, useDispatch } from 'react-redux';
import {
  selectVisibleContacts,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { deleteContacts } from 'redux/contacts/contacts-operations';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import Avatar from 'react-avatar';
import { useEffect, useState } from 'react';
import UpdateContactForm from 'components/UpdateContactForm/UpdateContactForm';
import {
  ContactsList,
  ContactItem,
  ContactContainer,
  FieldContact,
  FieldContactContainer,
} from 'components/Contacts/Contacts.styled';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
}));

const Contacts = () => {
  const [contactUpdate, setContactUpdate] = useState(null);
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const showUpdateForm = contactId => {
    const contact = contacts.find(({ id }) => id === contactId);
    setContactUpdate(contact);
  };

  const closeForm = () => {
    setContactUpdate(null);
  };

  return (
    <ContactsList>
      {contacts.map(({ name, number, id }) => (
        <ContactItem key={id}>
          <ContactContainer>
            <Avatar name={name} size="50" borderRadius="5" />
            <FieldContactContainer>
              <FieldContact>Name: {name}</FieldContact>
              <FieldContact>Number: {number}</FieldContact>
            </FieldContactContainer>
            <Root>
              <Button
                variant="outlined"
                onClick={() => dispatch(deleteContacts(id))}
              >
                {isLoading ? 'Deleting' : 'Delete'}
              </Button>
            </Root>
            <Root>
              <Button variant="outlined" onClick={() => showUpdateForm(id)}>
                Edit
              </Button>
            </Root>
          </ContactContainer>
          {contactUpdate && contactUpdate.id === id && (
            <UpdateContactForm
              contactUpdate={contactUpdate}
              closeForm={closeForm}
            />
          )}
        </ContactItem>
      ))}
    </ContactsList>
  );
};

export default Contacts;