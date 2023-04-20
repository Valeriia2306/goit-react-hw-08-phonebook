import { List, Link } from './AuthNav.styled';

function AuthNav() {
  return (
    <List>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Log In</Link>
      </li>
    </List>
  );
}
export default AuthNav;
