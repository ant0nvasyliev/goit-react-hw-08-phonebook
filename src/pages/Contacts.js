import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactsList } from 'components/ContactsList/ContactList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contactsOperations';
import { selectLoading } from '../redux/contactSelectors';

export default function Contacts () {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
      <ContactForm />
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
    </>
  );
}
