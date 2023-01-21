import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { selectName } from 'redux/auth/auth-selector';
import { NameText, UserMenuContainer } from './UserMenu.styled';
import { Button } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <UserMenuContainer>
      <NameText>{`Welcome, ${name}!`}</NameText>
      <Button variant="outlined" onClick={handleLogout}>
        Logout
      </Button>
    </UserMenuContainer>
  );
};

export default UserMenu;
