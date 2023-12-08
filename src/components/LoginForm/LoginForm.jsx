import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  LoginFormContainer,
  LoginFormItem,
  LogInButton,
  LoginFormStyledFild,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };

  return (
    <LoginFormContainer>
      <LoginFormItem onSubmit={handleSubmit} autoComplete="off">
        <label>
          <LoginFormStyledFild
            type="email"
            name="email"
            placeholder="enter email here"
          />
        </label>
        <label>
          <LoginFormStyledFild
            type="password"
            name="password"
            placeholder="enter password here"
          />
        </label>
        <LogInButton type="submit">log In</LogInButton>
      </LoginFormItem>
    </LoginFormContainer>
  );
};
