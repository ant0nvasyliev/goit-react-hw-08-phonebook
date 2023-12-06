import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  RegisterFormContainer,
  RegisterFormItem,
  RegisterFormStyledFild,
  RegisterButton,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterFormContainer>
      <RegisterFormItem onSubmit={handleSubmit} autoComplete="off">
        <label>
          <RegisterFormStyledFild
            type="text"
            name="name"
            placeholder="enter user name here"
          />
        </label>
        <label>
          <RegisterFormStyledFild
            type="email"
            name="email"
            placeholder="enter email here"
          />
        </label>
        <label>
          <RegisterFormStyledFild
            type="password"
            name="password"
            placeholder="enter password here"
          />
        </label>
        <RegisterButton type="submit">register</RegisterButton>
      </RegisterFormItem>
    </RegisterFormContainer>
  );
};
