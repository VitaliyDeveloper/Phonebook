import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selector';
import UserMenu from 'components/UserMenu/UserMenu';
// import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Button } from '@mui/material';
import {
  NavLinkStyle,
  NavStyle,
  ListStyle,
  ItemStyle,
  LogoContainer,
  Logo,
  Logotext,
} from './Navigation.styled';
import AddContactFormModal from 'components/AddContactFormModal/AddContactFormModal';
// import { LoginForm } from 'components/LoginForm/LoginForm';
// import { register } from 'redux/auth/auth-operations';

const Navigation = () => {
  const [login, setLogin] = useState(false);
  // const [register, setRegister] = useState(false);

  const token = useSelector(selectToken);

  // const showUpdateFormRegister = () => {
  //   setRegister(true);
  // };
  const showUpdateForm = () => {
    setLogin(true);
  };

  const closeForm = () => {
    setLogin(false);
  };

  return (
    <NavStyle>
      <ListStyle>
        <ItemStyle>
          <LogoContainer>
            <Logo size="2em" />
            <Logotext>PhoneBook</Logotext>
          </LogoContainer>
        </ItemStyle>
        {token && (
          <ItemStyle>
            <UserMenu />
          </ItemStyle>
        )}
        {/* {!token && (
          <ItemStyle>
            <Btn onClick={() => showUpdateFormRegister()} type="button">
              Register
            </Btn>

            <Btn onClick={() => showUpdateFormLogin()} type="button">
              Login
            </Btn>
          </ItemStyle>
        )} */}

        {/* {register && <RegisterForm closeForm={closeForm} />}
        {login && <LoginForm closeForm={closeForm} />} */}

        <ItemStyle>
          <NavLinkStyle to="/">Home</NavLinkStyle>
        </ItemStyle>

        {token && (
          <>
            {/* <ItemStyle>
              <NavLinkStyle to="add">Add contact</NavLinkStyle>
            </ItemStyle> */}
            <ItemStyle>
              <NavLinkStyle to="contacts">Contacts</NavLinkStyle>
            </ItemStyle>
          </>
        )}

        {token && (
          <Button onClick={() => showUpdateForm()} variant="outlined">
            Add Contact
          </Button>
        )}

        {login && (
          <>
            <AddContactFormModal closeForm={closeForm} />
          </>
        )}
      </ListStyle>
    </NavStyle>
  );
};

export default Navigation;
