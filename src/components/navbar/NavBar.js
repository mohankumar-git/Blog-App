import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavBar.css'
import ThemeSwitch from '../themeSwitch/ThemeSwitch';
import useThemeContext from '../../hooks/useThemeContext';

function NavBar() {
  const { theme } = useThemeContext();

  return (
    <>
      <Navbar collapseOnSelect expand="lg"  bg={`${theme}`}>
      <Container>
      <Link className={`link-style text-${theme === 'light' ? 'dark' : 'light'}`} to="/"><h1>Blog</h1></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className={`link-style me-3 text-${theme === 'light' ? 'dark' : 'light'}`} to="/">Home</Link>
            <Link className={`link-style me-3 text-${theme === 'light' ? 'dark' : 'light'}`} to="/create">Create Post</Link>
            <ThemeSwitch/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;
