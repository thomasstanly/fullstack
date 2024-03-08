import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from '../../../axios'
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const { name, isAuthenticated } = useSelector((state) => state.auth_user);

  const logout = async () => {
    const refresh_token = JSON.parse(localStorage.getItem('refresh'))
    const token = JSON.parse(localStorage.getItem('access'))

    try {
      console.log(token)
      const res = await axios.post('logout/', { refresh_token: refresh_token }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log(res.status)
      localStorage.clear();
      axios.defaults.headers.common['Authorization'] = null;
      window.location.href = '/'
    } catch (e) {
      console.log('logout not working', e)
    }
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary header">
      <Container>
        <Navbar.Brand href="#home">Welcome {name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            {isAuthenticated ? <Nav.Link onClick={() => navigate('/profile')}>Profile</Nav.Link> : ''}
            {isAuthenticated ? (
              <Button onClick={() => logout()} className="loginlogut">
                Logout
              </Button>
            ) : (
              <Button onClick={() => navigate('/login')} className="loginlogut">
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
