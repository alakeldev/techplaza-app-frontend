import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "../styles/NavBarLogout.module.css";
import Logo from "../assets/logo.png";
import LogoutAccount from './Logout';

const NavBar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const location = useLocation();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className={styles.Nav} fixed="top">
        <Container>
          <Navbar.Brand>
            <Nav.Link as={Link} to="/">
              <img src={Logo} alt="website logo" className={styles.Logo} />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.MarginNavLinks}>
              <Nav.Link as={Link} to="/home" className={`${styles.Nav_Anchor_Tag} ${(location.pathname === '/' || location.pathname === '/home') ? styles.Active : ''}`}><i className="fa-solid fa-house"></i> Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className={`${styles.Nav_Anchor_Tag} ${location.pathname === '/about' ? styles.Active : ''}`}><i className="fa-solid fa-circle-info"></i> About</Nav.Link>
              <Nav.Link as={Link} to="/services" className={`${styles.Nav_Anchor_Tag} ${location.pathname === '/services' ? styles.Active : ''}`}><i className="fa-solid fa-gear"></i> Services</Nav.Link>
              <Nav.Link as={Link} to="/contact" className={`${styles.Nav_Anchor_Tag} ${location.pathname === '/contact' ? styles.Active : ''}`}><i className="fa-solid fa-paper-plane"></i> Contact</Nav.Link>
              {user ? (
                <>
                  <Nav.Link as={Link} to="/dashboard" className={`${styles.Nav_Anchor_Tag} ${location.pathname === '/dashboard' ? styles.Active : ''}`}><i className="fa-solid fa-tachometer-alt"></i> Dashboard</Nav.Link>
                  <Nav.Link onClick={handleShow} className={`${styles.Nav_Anchor_Tag}`}><i className="fa-solid fa-sign-out-alt"></i> Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login" className={`${styles.Nav_Anchor_Tag} ${location.pathname === '/login' ? styles.Active : ''}`}><i className="fa-solid fa-arrow-right-to-bracket"></i> Login</Nav.Link>
                  <Nav.Link as={Link} to="/register" className={`${styles.Nav_Anchor_Tag} ${location.pathname === '/register' ? styles.Active : ''}`}><i className="fa-solid fa-user-plus"></i> Register</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LogoutAccount show={show} handleClose={handleClose} />
    </>
  );
};

export default NavBar;