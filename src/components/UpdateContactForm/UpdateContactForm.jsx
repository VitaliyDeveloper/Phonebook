import { useDispatch } from 'react-redux';
import { updateContacts } from 'redux/contacts/contacts-operations';
import { useState } from 'react';
import {
  Label,
  Form,
  Modal,
  ModalDialog,
  Close,
} from './UpdateContactForm.styled';
import { Notify } from 'notiflix';
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

//Styles///////////////////////////////////////////

const Root = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
}));

/////////////////////////////////////////////////////

const UpdateContactForm = ({ closeForm, contactUpdate }) => {
  const [name, setName] = useState(contactUpdate.name);
  const [number, setNumber] = useState(contactUpdate.number);

  const dispatch = useDispatch();

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

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      updateContacts({
        ...contactUpdate,
        name,
        number,
      })
    );
    Notify.success('Contact update');
    closeForm();
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
        <Form onSubmit={handleSubmit}>
          <Label>
            <TextField
              rText="Please enter Name"
              label="Name:"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
          </Label>

          <Label>
            <TextField
              helperText="Please enter e-mail"
              label="E-mail:"
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            />
          </Label>

          <Button type="submit" variant="outlined">
            Save
          </Button>
          <Close onClick={handleClose} size="30" />
        </Form>
      </ModalDialog>
    </Modal>
  );
};

export default UpdateContactForm;
