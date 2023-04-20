import AuthNav from 'components/AuthNav/AuthNav';
import { Container } from './AppBar.styled';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/hooks';

function AppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Container>
  );
}
export default AppBar;
