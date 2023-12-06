import {
  StyledContactListText,
  StyledDeleteButton,
} from './ContactListItem.styled';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { DeleteContacts } from '../../redux/contactsOperations';

export const ContactListItem = ({ id, contact: { name, number } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <StyledContactListText>Name: {name}</StyledContactListText>
      <StyledContactListText>Number: {number}</StyledContactListText>
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
