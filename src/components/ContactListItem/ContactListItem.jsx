import {
  StyledContactListText,
  StyledDeleteButton,
} from './ContactListItem.styled';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { DeleteContacts } from '../../redux/contactsOperations';

export const ContactListItem = ({ id, contact: { name, phone } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <StyledContactListText>Name: {name}</StyledContactListText>
      <StyledContactListText>Number: {phone}</StyledContactListText>
      <StyledDeleteButton
        type="button"
        onClick={() => {
          dispatch(DeleteContacts(id));
        }}
      >
        <MdOutlineDeleteForever />
      </StyledDeleteButton>
    </>
  );
};
