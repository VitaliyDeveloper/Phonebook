import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { UserMenuContainer } from './UserMenuHome.styled';
import { Button } from '@mui/material';

const UserMenuHome = () => {
  const dispatch = useDispatch();
  //   const name = useSelector(selectName);
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <UserMenuContainer>
      <Button variant="outlined" onClick={handleLogout}>
        Logout
      </Button>
    </UserMenuContainer>
  );
};

export default UserMenuHome;
