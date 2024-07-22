import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "../styles/NavBar.module.css";
import Logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <Navbar expand="lg" className={styles.Nav} fixed="top">
      <Container>
        <Navbar.Brand>
          <img src={Logo} alt="website logo" className={styles.Logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home" className={styles.Nav_Anchor_Tag}>Home</Nav.Link>
            <NavDropdown title={<span className={styles.Nav_Anchor_Tag}>About</span>} id="basic-nav-dropdown" className={styles.Nav_Anchor_Tag}>
              <NavDropdown.Item href="#action/3.1" className={styles.Nav_Anchor_Tag}>About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" className={styles.Nav_Anchor_Tag}>Our Story</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" className={styles.Nav_Anchor_Tag}>Our Mission and Vision</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" className={styles.Nav_Anchor_Tag}>Why Choose Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" className={styles.Nav_Anchor_Tag}>FAQ's</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<span className={styles.Nav_Anchor_Tag}>Services</span>} id="basic-nav-dropdown" className={styles.Nav_Anchor_Tag}>
              <NavDropdown.Item href="#action/3.1" className={styles.Nav_Anchor_Tag}>Our Applications</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" className={styles.Nav_Anchor_Tag}>IT Support Service</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className={styles.Nav_Anchor_Tag}>Contact us</Nav.Link>
            <Nav.Link href="#link">To Search</Nav.Link>
            <Nav.Link href="#link" className={styles.Nav_Anchor_Tag}>Sign in</Nav.Link>
            <Nav.Link href="#link" className={styles.Nav_Anchor_Tag}>Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar