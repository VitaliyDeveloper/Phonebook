import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { selectName } from 'redux/auth/auth-selector';
import { NameText, Btn, UserMenuContainer } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);

  return (
    <UserMenuContainer>
      <NameText>{`Welcome, ${name}!`}</NameText>
      <Btn onClick={() => dispatch(logout())}>Logout</Btn>
    </UserMenuContainer>
  );
};

export default UserMenu;
