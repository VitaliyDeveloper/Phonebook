import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { addContacts } from 'redux/contacts/contacts-operations';
// import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import {
  FormContainer,
  Label,
  Form,
  Title,
  ShiftRight,
  ShiftLeft,
  Modal,
  ModalDialog,
} from './AddContactFormModal.styled';
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
}));

const AddContactFormModal = ({ closeForm }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const contact = { name, number };

    const isExist = contacts.find(
      contact => contact.name === name || contact.number === number
    );
    // console.log(isExist);

    if (isExist) {
      resetFields();

      return Notify.failure(`This contact is alredy in contacts.`);
    }

    dispatch(addContacts(contact));
    // console.log(contact);
    closeForm();

    resetFields();
  };

  const resetFields = () => {
    setName('');
    setNumber('');
  };

  const handleClose = () => {
    closeForm();
  };

  const handleCloseBg = e => {
    if (e.target === e.currentTarget) {
      closeForm();
    }
  };

  return (
    <Modal onClick={handleCloseBg}>
      <ModalDialog>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Title>
              <ShiftLeft>Add</ShiftLeft> <ShiftRight>contact</ShiftRight>
            </Title>
            <Label>
              <Root>
                <TextField
                  label="Name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  required
                />
              </Root>
            </Label>

            <Label>
              <TextField
                label="Number"
                type="tel"
                name="number"
                value={number}
                onChange={handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                required
              />
            </Label>
            <Root>
              <Button variant="outlined" type="submit">
                save
              </Button>
            </Root>
            <Root>
              <Button variant="outlined" onClick={handleClose}>
                cancel
              </Button>
            </Root>
          </Form>
        </FormContainer>
      </ModalDialog>
    </Modal>
  );
};

export default AddContactFormModal;
