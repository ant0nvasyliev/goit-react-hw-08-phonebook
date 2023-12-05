// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactsList/ContactList';
// import { Filter } from './Filter/Filter';
// import { MainTitle, SecondaryTitle } from './App.styled';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getContacts } from '../redux/contactsSlice';
// import { fetchContacts } from '../redux/contactsOperations';
// import { Toaster } from 'react-hot-toast';

// export const App = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(getContacts);
//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
//   return (
//     <div>
//       <Toaster />
//       <MainTitle>Phonebook</MainTitle>
//       <ContactForm />
//       {contacts && contacts.length !== 0 && (
//         <div>
//           <SecondaryTitle>Contacts</SecondaryTitle>
//           <Filter />
//           <ContactList />
//         </div>
//       )}
//     </div>
//   );
// };
// export default App;

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return  isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
