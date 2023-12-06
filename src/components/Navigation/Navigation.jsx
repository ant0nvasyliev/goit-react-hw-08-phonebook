import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { NavigationContainer } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" style={{ textDecoration: 'none' }}>
          Contacts
        </NavLink>
      )}
    </NavigationContainer>
  );
};
