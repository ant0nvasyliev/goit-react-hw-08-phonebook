import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';
import { MainTitle, SecondaryTitle } from './App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/contactsSlice';
import { fetchContacts } from '../redux/contactsOperations';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Toaster />
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      {contacts && contacts.length !== 0 && (
        <div>
          <SecondaryTitle>Contacts</SecondaryTitle>
          <Filter />
          <ContactList />
        </div>
      )}
    </>
  );
};
export default App;
