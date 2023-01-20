import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { selectName } from 'redux/auth/auth-selector';
import { NameText, Btn, UserMenuContainer } from './UserMenu.styled';
import { Navigate } from 'react-router-dom';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <UserMenuContainer>
      <NameText>{`Welcome, ${name}!`}</NameText>
      <Btn onClick={handleLogout}>Logout</Btn>
    </UserMenuContainer>
  );
};

export default UserMenu;
