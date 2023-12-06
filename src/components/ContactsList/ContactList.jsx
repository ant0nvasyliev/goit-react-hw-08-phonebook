import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';
// import { selectAllContacts } from '../../redux/contactSelectors';
import { selectContacts, selectFilter } from '../../redux/auth/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const getFiltered = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  const filteredContacts = getFiltered();
  return (
    <ul>
      {filteredContacts.map(({ id, ...contact }) => (
        <li key={id}>
          <ContactListItem id={id} contact={contact} />
        </li>
      ))}
    </ul>
  );
};
