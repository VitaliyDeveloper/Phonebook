import { useDispatch } from 'react-redux';
import { updateContacts } from 'redux/contacts/contacts-operations';
import { useState } from 'react';
import {
  Input,
  Label,
  BtnAdd,
  Form,
  FieldName,
  Modal,
  ModalDialog,
  Close,
} from './UpdateContactForm.styled';
import { Notify } from 'notiflix';

const UpdateContactForm = ({ closeForm, contactUpdate }) => {
  const [name, setName] = useState(contactUpdate.name);
  const [number, setNumber] = useState(contactUpdate.number);
  const [mail, setMail] = useState(contactUpdate.mail);

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

      case 'mail':
        setMail(value);
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
        mail,
        number,
      })
    );
    Notify.success('Contact update');
    closeForm();
  };

  const handleClose = () => {
    closeForm();
  };

  return (
    <Modal>
      <ModalDialog>
        <Form onSubmit={handleSubmit}>
          <Label>
            <FieldName>Name:</FieldName>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
          </Label>

          <Label>
            <FieldName>Number:</FieldName>
            <Input
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            />
          </Label>

          <Label>
            <FieldName>E-mail:</FieldName>
            <Input
              type="mailto"
              name="mail"
              value={mail}
              onChange={handleChange}
            />
          </Label>

          <BtnAdd>Save</BtnAdd>
          <Close onClick={handleClose} size="30" />
        </Form>
      </ModalDialog>
    </Modal>
  );
};

export default UpdateContactForm;
