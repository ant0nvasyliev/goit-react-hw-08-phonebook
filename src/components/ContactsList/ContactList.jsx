import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';
// import { selectAllContacts } from '../../redux/contactSelectors';
import { selectContacts, selectFilter } from '../../redux/auth/selectors';
import { StyledContactList, StyledListItem } from './ContactList.styled';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const getFiltered = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  const filteredContacts = getFiltered();
  return (
    <StyledContactList>
      {filteredContacts.map(({ id, ...contact }) => (
        <StyledListItem key={id}>
          <ContactListItem id={id} contact={contact} />
        </StyledListItem>
      ))}
    </StyledContactList>
  );
};
