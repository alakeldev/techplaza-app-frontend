import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">TechPlaza</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Our Story</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Our Mission and Vision</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Why Choose Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">FAQ's</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Our Applications</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">IT Support Service</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contact us</Nav.Link>
            <Nav.Link href="#link">To Search</Nav.Link>
            <Nav.Link href="#link">Sign in</Nav.Link>
            <Nav.Link href="#link">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar