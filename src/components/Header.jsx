import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Css/Header.css"


const Header = () => {
  return (
    <Navbar bg="secondary" expand="lg" >
    <Container>
      <Navbar.Brand href="#home"  className='header'>GORILA TECH</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="http://localhost:3000/#home">Home</Nav.Link>
          <Nav.Link href="http://localhost:3000/About">About</Nav.Link>   
          <Nav.Link href="http://localhost:3000/Contact">Contact</Nav.Link>      
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header