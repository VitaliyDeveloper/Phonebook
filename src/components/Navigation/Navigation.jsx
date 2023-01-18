import {
  NavLinkStyle,
  NavStyle,
  ListStyle,
  ItemStyle,
  LogoContainer,
  Logo,
  Logotext,
} from './Navigation.styled';

const Navigation = () => {
  return (
    <NavStyle>
      <ListStyle>
        <LogoContainer>
          <Logo size="2em" />
          <Logotext>PhoneBook</Logotext>
        </LogoContainer>
        <ItemStyle>
          <NavLinkStyle to="/">Home</NavLinkStyle>
        </ItemStyle>
        <ItemStyle>
          <NavLinkStyle to="add">Add contact</NavLinkStyle>
        </ItemStyle>
      </ListStyle>
    </NavStyle>
  );
};

export default Navigation;
