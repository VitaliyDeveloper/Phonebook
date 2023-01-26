import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage';
import AddContactPage from 'pages/AddContactPage';
import ContactsPage from 'pages/ContactsPage';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import PrivateRoute from 'HOCs/PrivateRoute';
import { RestrictedRoute } from 'HOCs/RestrictedRoute';
import PublicRoute from 'HOCs/PublicRoute';
import { selectIsFetchingCurrentUser } from 'redux/auth/auth-selector';
import Loader from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />

            <Route
              path="/add"
              element={
                <PrivateRoute
                  redirectTo="/add"
                  component={<AddContactPage />}
                />
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/contacts"
                  component={<ContactsPage />}
                />
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
