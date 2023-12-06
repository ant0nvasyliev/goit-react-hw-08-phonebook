import { NavLink } from 'react-router-dom';
import { AuthNavContainer } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <NavLink to="/register" style={{ textDecoration: `none` }}>
        Register
      </NavLink>
      <NavLink to="/login" style={{ textDecoration: `none` }}>
        Log In
      </NavLink>
    </AuthNavContainer>
  );
};
