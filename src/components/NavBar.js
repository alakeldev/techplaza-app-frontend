import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
            <Nav.Link href="#home" className={`${styles.Nav_Anchor_Tag} ${styles.Active}`}>Home</Nav.Link>
            <Nav.Link href="#home" className={`${styles.Nav_Anchor_Tag}`}>About Us</Nav.Link>
            <Nav.Link href="#home" className={`${styles.Nav_Anchor_Tag}`}>Our Services</Nav.Link>
            <Nav.Link href="#link" className={styles.Nav_Anchor_Tag}>Contact us</Nav.Link>
            <Nav.Link href="#link">To Search</Nav.Link>
            <Nav.Link href="#link" className={`${styles.Nav_Anchor_Tag}`}>Sign in</Nav.Link>
            <Nav.Link href="#link" className={`${styles.Nav_Anchor_Tag}` }><button className={styles.NavButton}>Register  <i class="fa-solid fa-user-plus"></i></button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar