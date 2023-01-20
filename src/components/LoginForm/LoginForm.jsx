import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import {
  Modal,
  ModalDialog,
  Form,
  Label,
  FieldName,
  Input,
  BtnContainer,
  BtnAdd,
} from './LoginForm.styled';

export const LoginForm = ({ closeForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
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
    dispatch(login({ email, password }));

    setEmail('');
    setPassword('');

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
            <BtnAdd>login</BtnAdd>
            <BtnAdd onClick={handleClose}>Cancel</BtnAdd>
          </BtnContainer>
        </Form>
      </ModalDialog>
    </Modal>
  );
};
