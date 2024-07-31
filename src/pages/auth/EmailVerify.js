import React, { Fragment, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from '../../styles/EmailVerify.module.css';

const EmailVerify = () => {
  const [otp, setOtp] = useState("")

  return (
    <Fragment>
      <NavBar />
      <Container className={styles.FormContainer}>
        <Form className={styles.TheForm}>
          <Form.Group className="mb-3">
            <Form.Label className={styles.FormLabel}>Enter OTP code below:</Form.Label>
            <Form.Control 
            className={styles.FormField} 
            type="text"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className={styles.FormButton}>
            Send
          </Button>
        </Form>
      </Container>
      <Footer />
    </Fragment>
  )
}

export default EmailVerify