import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from "../styles/NavBar.module.css";
import Logo from "../assets/logo.png";

const NavBar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <>
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
                  <Nav.Link onClick={handleShow} className={`${styles.Nav_Anchor_Tag}`}><i className="fa-solid fa-sign-out-alt"></i> Logout</Nav.Link>
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

      <Modal show={show} onHide={handleClose} centered className={styles.modalDialog}>
        <Modal.Header closeButton className={styles.modalHeader}>
          <Modal.Title>Logout Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className={styles.btnSecondary}>
            No
          </Button>
          <Button variant="primary" onClick={handleLogout} className={styles.btnPrimary}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavBar;