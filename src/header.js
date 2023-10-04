import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginButton from './login';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './logout';


function Header() {
  let {isAuthenticated, user} = useAuth0()
  console.log(user)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="">My Title</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
         {isAuthenticated && <Nav.Link href="/favorites">Profile</Nav.Link>}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {isAuthenticated?
        <>
        <LogoutButton /> 
        <img src={user.picture} style={{width:"50px", height:"50px", margin:"0 10px 0 10px"}}/>
        <h4>{user.name}</h4> 
        </>
        :
         <LoginButton /> }   
         </Container>
    </Navbar>
    
  );
}

export default Header;