import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
// import css from './UserMenu.module.css';
import { UserMenuContainer, LogOutButton } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <p>Welcome, {user.name}!</p>
      <LogOutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogOutButton>
    </UserMenuContainer>
  );
};
