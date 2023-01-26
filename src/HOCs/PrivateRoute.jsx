import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

// import { useSelector } from 'react-redux';
// import { selectToken, selectIsLoginIn } from 'redux/auth/auth-selector';
// import { Route } from 'react-router-dom';

// const PrivateRoute = ({ children }) => {
//   const token = useSelector(selectToken);
//   return token ? children : <Navigate to="/" />;
// };

// const PrivateRoutes = () => {
//   const token = useSelector(selectToken);
//   const isLogin = useSelector(selectIsLoginIn);

//   return isLogin ? <Outlet /> : <Navigate to="/" />;
// };

// export default PrivateRoutes;

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
