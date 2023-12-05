import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { selectAllContacts } from '../../redux/contactSelectors';

export const ContactsList = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    <ul>
      {contacts.map(({ id, ...contact }) => (
        <li key={id}>
          <ContactListItem id={id} contact={contact} />
        </li>
      ))}
    </ul>
  );
};
