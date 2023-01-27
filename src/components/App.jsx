import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';
import PrivateRoute from 'HOCs/PrivateRoute';
// import RestrictedRoute from 'HOCs/RestrictedRoute';
import PublicRoute from 'HOCs/PublicRoute';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage';
import AddContactPage from 'pages/AddContactPage';
import ContactsPage from 'pages/ContactsPage';
import Loader from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route
              path="/add"
              element={
                <PrivateRoute redirectTo="/" component={<AddContactPage />} />
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/" component={<ContactsPage />} />
              }
            />

            {/* <Route element={<PrivateRoutes />}>
              <Route path="/add" element={<AddContactPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
            </Route> */}

            {/* <Route
              path="/add"
              element={
                <PrivateRoute>
                  <AddContactPage />
                </PrivateRoute>
              }
            /> */}
            {/* <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            /> */}
          </Route>
        </Routes>
      )}
    </>
  );
};
