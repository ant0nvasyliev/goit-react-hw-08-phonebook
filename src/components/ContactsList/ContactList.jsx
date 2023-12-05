import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { StyledContactList, StyledListItem } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/filterSlice';
import { getContacts } from '../../redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFiltered = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  const filteredContacts = getFiltered();
  return (
    <>
      <StyledContactList>
        {filteredContacts.map(contact => (
          <StyledListItem key={contact.id}>
            <ContactListItem contact={contact} />
          </StyledListItem>
        ))}
      </StyledContactList>
    </>
  );
};
