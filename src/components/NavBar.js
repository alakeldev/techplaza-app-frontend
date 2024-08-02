import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "../styles/NavBar.module.css";
import Logo from "../assets/logo.png";

const NavBar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    navigate("/logout-confirmation");
  };

  return (
    <Navbar expand="lg" className={styles.Nav} fixed="top">
      <Container>
        <Navbar.Brand>
          <img src={Logo} alt="website logo" className={styles.Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.MarginNavLinks}>
            <Nav.Link as={Link} to="/home" className={`${styles.Nav_Anchor_Tag}`}><i className="fa-solid fa-house"></i> Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className={`${styles.Nav_Anchor_Tag}`}><i className="fa-solid fa-circle-info"></i> About</Nav.Link>
            <Nav.Link as={Link} to="/services" className={`${styles.Nav_Anchor_Tag}`}><i className="fa-solid fa-gear"></i> Services</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={`${styles.Nav_Anchor_Tag}`}><i className="fa-solid fa-paper-plane"></i> Contact</Nav.Link>
            {user ? (
              <>
              <Nav.Link as={Link} to="/dashboard" className={`${styles.Nav_Anchor_Tag}`}><i className="fa-solid fa-tachometer-alt"></i> Dashboard</Nav.Link>
              <Nav.Link onClick={handleLogout} className={`${styles.Nav_Anchor_Tag}`}><i className="fa-solid fa-sign-out-alt"></i> Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" className={`${styles.Nav_Anchor_Tag}`}><i className="fa-solid fa-arrow-right-to-bracket"></i> Login</Nav.Link>
                <Nav.Link as={Link} to="/register" className={`${styles.Nav_Anchor_Tag}`}><button className={styles.NavButton}><i className="fa-solid fa-user-plus"></i> Register</button></Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;