import React, { Fragment, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Form, Button, Container } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from '../../styles/EmailVerifyForm.module.css';
import axiosInstance from '../../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EmailVerifyForm = () => {

  const navigate = useNavigate()
  const [otp, setOtp] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const jwt_token = localStorage.getItem('access');
    if (user && jwt_token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp && email) {
      try {
        const response = await axiosInstance.post("/auth/email-verify/", { 'otp': otp, 'email': email });
        if (response.status === 200) {
          navigate("/login");
          toast.success(response.data.message);
        }
      } catch (error) {
        toast.error("Failed to verify OTP. Please try again.");
      }
    } else {
      toast.error("Please provide both OTP and email.");
    }
  }

  return (
    <Fragment>
      <Helmet>
        <title>Email Verification - TechPlaza Platform</title>
      </Helmet>
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
  );
};

export default EmailVerifyForm;