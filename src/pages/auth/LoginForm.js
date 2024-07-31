import React, { Fragment } from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from '../../styles/LoginForm.module.css';

const LoginForm = () => {
  return (
    <Fragment>
      <NavBar />
      <Container className={styles.FormContainer}>
        <Form className={styles.TheForm}>
          <h2>Login</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className={styles.FormLabel}>Enter Your Email Address</Form.Label>
            <Form.Control className={styles.FormField} type="email" placeholder="Enter your registered email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Your Password</Form.Label>
            <Form.Control className={styles.FormField} type="password" placeholder="Enter your password" />
          </Form.Group>
          <Button variant="primary" type="submit" className={styles.FormButton}>
            Login
          </Button>
        </Form>
      </Container>
      <Footer />
    </Fragment>
  )
}

export default LoginForm