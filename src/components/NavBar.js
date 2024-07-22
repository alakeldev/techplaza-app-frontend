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
          <Nav className={styles.MarginNavLinks}>
            <Nav.Link href="#home" className={`${styles.Nav_Anchor_Tag} ${styles.Active}`}><i class="fa-solid fa-house"></i> Home</Nav.Link>
            <Nav.Link href="#home" className={`${styles.Nav_Anchor_Tag}`}><i class="fa-solid fa-circle-info"></i> About</Nav.Link>
            <Nav.Link href="#home" className={`${styles.Nav_Anchor_Tag}`}><i class="fa-solid fa-computer-mouse"></i> Services</Nav.Link>
            <Nav.Link href="#link" className={styles.Nav_Anchor_Tag}><i class="fa-solid fa-paper-plane"></i> Contact</Nav.Link>
            <Nav.Link href="#link" className={`${styles.Nav_Anchor_Tag}`}><i class="fa-solid fa-arrow-right-to-bracket"></i> Login</Nav.Link>
            <Nav.Link href="#link" className={`${styles.Nav_Anchor_Tag}`}><button className={styles.NavButton}><i class="fa-solid fa-user-plus"></i> Register</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar