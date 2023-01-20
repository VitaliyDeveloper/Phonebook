import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selector';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = useSelector(selectToken);

  return token ? children : <Navigate to="/" />;
};

export default PrivateRoute;
