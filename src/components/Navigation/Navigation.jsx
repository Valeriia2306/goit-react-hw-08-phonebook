import { useAuth } from 'hooks/hooks';
import { List, Link } from './Navigation.styled';

function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        )}
      </List>
    </nav>
  );
}
export default Navigation;
