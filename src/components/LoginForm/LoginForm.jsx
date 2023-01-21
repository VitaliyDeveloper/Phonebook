import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import {
  Modal,
  ModalDialog,
  Form,
  Label,
  BtnContainer,
} from './LoginForm.styled';
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

//Styles///////////////////////////////////////////

const Root = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
}));

/////////////////////////////////////////////////////

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
              helperText="Please enter your e-mail"
              label="E-mail:"
              type="mailto"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </Label>
          <Label>
            <TextField
              helperText="Please enter your password"
              label="Password:"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </Label>
          <BtnContainer>
            <Root>
              <Button type="submit" variant="outlined">
                login
              </Button>
            </Root>
            <Root>
              <Button onClick={handleClose} variant="outlined">
                Cancel
              </Button>
            </Root>
          </BtnContainer>
        </Form>
      </ModalDialog>
    </Modal>
  );
};
