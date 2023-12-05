import { Formik, ErrorMessage } from 'formik';
import { StyledForm, StyledFild, AddButton } from './ContactForm.styled';
import * as Yup from 'yup';
// import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/contactsSlice';
import { AddContacts } from '../../redux/contactsOperations';

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁё\s]+$/, 'Invalid name')
    .required('This is required!')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  number: Yup.string()
    .matches(/^\+?[0-9]{1,3}-?[0-9]/, 'Invalid number')
    .required('This is required!')
    .min(6, 'Too Short!')
    .max(20, 'Too Long!'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        const checkName = values.name;

        if (
          contacts.some(
            contact => contact.name.toLowerCase() === checkName.toLowerCase()
          )
        ) {
          alert(`${checkName} already recorded in the directory`);
          return;
        }
        dispatch(AddContacts({ ...values }));
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label>
          <StyledFild name="name" placeholder="entert name here" />
          <ErrorMessage name="name" />
        </label>
        <label>
          <StyledFild name="number" placeholder="entert number here" />
          <ErrorMessage name="number" />
        </label>
        <AddButton type="submit">add contact</AddButton>
      </StyledForm>
    </Formik>
  );
};
