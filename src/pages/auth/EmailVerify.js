import React, { Fragment, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from '../../styles/EmailVerify.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EmailVerify = () => {

  const navigate = useNavigate()
  const [otp, setOtp] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp && email) {
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/auth/email-verify/", { 'otp': otp, 'email': email });
        if (response.status === 200) {
          navigate("/login");
          toast.success(response.data.message);
        }
      } catch (error) {
        console.error("There was an error verifying the OTP:", error);
        toast.error("Failed to verify OTP. Please try again.");
      }
    } else {
      toast.error("Please provide both OTP and email.");
    }
  }

  return (
    <Fragment>
      <NavBar />
      <Container className={styles.FormContainer}>
        <Form onSubmit={handleSubmit} className={styles.TheForm}>
          <Form.Group className="mb-3">
            <Form.Label className={styles.FormLabel}>Enter your email:</Form.Label>
            <Form.Control
              className={styles.FormField}
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className={styles.FormLabel}>Enter your OTP code:</Form.Label>
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