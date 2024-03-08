import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import './AdminNavbar.css'


function BasicExample() {
  const navigate = useNavigate();
  const { name } = useSelector((state) => state.auth_user);


  return (
    <>
      <Navbar expand="lg" className="header">
        <Container>
          <Navbar.Brand href="#home">{name}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate('/admin/home')}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate('/admin/create_user')}>Create User</Nav.Link>
            </Nav>
            <Button onClick={()=> navigate('/logout')} className='adminlogout'>logout</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;