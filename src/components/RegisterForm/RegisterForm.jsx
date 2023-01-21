import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import {
  Modal,
  ModalDialog,
  Form,
  Label,
  FieldName,
  Input,
  BtnContainer,
  BtnAdd,
} from './RegisterForm.styled';

export const RegisterForm = ({ closeForm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');

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
            <FieldName>Name:</FieldName>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </Label>
          <Label>
            <FieldName>E-mail:</FieldName>
            <Input
              type="mailto"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </Label>
          <Label>
            <FieldName>Password:</FieldName>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </Label>
          <BtnContainer>
            <BtnAdd>Register</BtnAdd>
            <BtnAdd onClick={handleClose}>Cancel</BtnAdd>
          </BtnContainer>
        </Form>
      </ModalDialog>
    </Modal>
  );
};
