import { useState } from 'react';
import UserMenu from 'components/UserMenu/UserMenu';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import {
  NavLinkStyle,
  NavStyle,
  ListStyle,
  ItemStyle,
  LogoContainer,
  Logo,
  Logotext,
  Btn,
} from './Navigation.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';
// import { register } from 'redux/auth/auth-operations';

const Navigation = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const showUpdateFormRegister = () => {
    setRegister(true);
  };
  const showUpdateFormLogin = () => {
    setLogin(true);
  };

  const closeForm = () => {
    setLogin(false);
    setRegister(false);
  };

  return (
    <NavStyle>
      <ListStyle>
        <LogoContainer>
          <Logo size="2em" />
          <Logotext>PhoneBook</Logotext>
        </LogoContainer>
        <UserMenu />
        <Btn onClick={() => showUpdateFormRegister()} type="button">
          Register
        </Btn>

        <Btn onClick={() => showUpdateFormLogin()} type="button">
          Login
        </Btn>
        {register && <RegisterForm closeForm={closeForm} />}
        {login && <LoginForm closeForm={closeForm} />}
        <ItemStyle>
          <NavLinkStyle to="/">Home</NavLinkStyle>
        </ItemStyle>
        <ItemStyle>
          <NavLinkStyle to="add">Add contact</NavLinkStyle>
        </ItemStyle>
        <ItemStyle>
          <NavLinkStyle to="contacts">Contacts</NavLinkStyle>
        </ItemStyle>
      </ListStyle>
    </NavStyle>
  );
};

export default Navigation;
