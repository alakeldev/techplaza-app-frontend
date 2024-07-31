import React, { Fragment } from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from '../../styles/RegisterForm.module.css';

const RegisterForm = () => {
  return (
    <Fragment>
      <NavBar />
      <Container className={styles.FormContainer}>
        <Form className={styles.TheForm}>
          <h2>Register</h2>
          <Form.Group className="mb-3">
            <Form.Label className={styles.FormLabel}>Full Name</Form.Label>
            <Form.Control className={styles.FormField} type="text" placeholder="Enter your fullname / username" required />
            <Form.Text className="text-muted">
              Enter your full name so it will be your username on the platform.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className={styles.FormLabel}>Email address</Form.Label>
            <Form.Control className={styles.FormField} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className={styles.FormField} type="password" placeholder="Enter password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password Confirm</Form.Label>
            <Form.Control className={styles.FormField} type="password" placeholder="Repeat the password" />
          </Form.Group>
          <Button variant="primary" type="submit" className={styles.FormButton}>
            Register
          </Button>
        </Form>
      </Container>
      <Footer />
    </Fragment>
  )
}

export default RegisterForm