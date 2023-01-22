import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { selectEmail } from 'redux/auth/auth-selector';
import { NameText, UserMenuContainer, Shadow } from './UserMenu.styled';
import { Button } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <UserMenuContainer>
      <Shadow></Shadow>
      <NameText>{`${email}`}</NameText>
      <Button variant="outlined" onClick={handleLogout}>
        Logout
      </Button>
    </UserMenuContainer>
  );
};

export default UserMenu;
