import React, { Fragment, useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Form, Button, Container } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from '../../styles/RegisterForm.module.css';
import axiosInstance from '../../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegisterForm = () => {

  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [registerData, setRegisterData] = useState({
    full_name: "",
    email: "",
    password1: "",
    password2: "",
  })

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const jwt_token = localStorage.getItem('access');
    if (user && jwt_token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleOnChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value })
  }

  const validateFullName = (fullName) => {
    const fullNameRegex = /^[A-Za-z\s]{4,70}$/;
    return fullNameRegex.test(fullName);
  }

  const validatePassword = (password) => {
    return password.length >= 4 && password.length <= 40;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!registerData.full_name || !registerData.email || !registerData.password1 || !registerData.password2) {
      setError("Please fill all the fields, they are all required");
    } else if (!validateFullName(registerData.full_name)) {
      setError("Full name must be between 4 and 70 characters and can only contain letters and spaces.");
    } else if (!validatePassword(registerData.password1)) {
      setError("Password must be between 5 and 40 characters.");
    } else if (registerData.password1 !== registerData.password2) {
      setError("The password fields do not match. Please try again.");
    } else {
      try {
        const re = await axiosInstance.post("/auth/register/", registerData);
        const response = re.data;
        if (re.status === 201) {
          navigate("/otp/verify");
          toast.success(response.message);
        }
      } catch (error) {
        if (error.response && error.response.data && error.response.data.email) {
          setError("The email is already registered/used.");
        } else {
          setError("Registration failed. Please try again.");
        }
      }
    }
  };

  return (
    <HelmetProvider>
      <Fragment>
        <Helmet>
          <title>Register - TechPlaza Platform</title>
        </Helmet>
        <NavBar />
        <Container className={styles.FormContainer}>
          <Form onSubmit={handleSubmit} className={styles.TheForm}>
            <h2>Register</h2>
            {error && <p className={styles.ErrorMessage}>{error}</p>}
            <Form.Group className="mb-3">
              <Form.Label className={styles.FormLabel}>Full Name</Form.Label>
              <Form.Control
                className={styles.FormField}
                type="text"
                name='full_name'
                placeholder="Enter your fullname / username"
                value={registerData.full_name}
                onChange={handleOnChange} />
              <Form.Text className="text-muted">
                Please enter your full name to use as your username within the community.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className={styles.FormLabel}>Email address</Form.Label>
              <Form.Control
                className={styles.FormField}
                type="email"
                placeholder="Enter email"
                name='email'
                value={registerData.email}
                onChange={handleOnChange} />
              <Form.Text className="text-muted">
                Please register with an email address that can be contacted within our community.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className={styles.FormField}
                type="password"
                placeholder="Enter password"
                name='password1'
                value={registerData.password1}
                onChange={handleOnChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label>Password Confirm</Form.Label>
              <Form.Control
                className={styles.FormField}
                type="password"
                placeholder="Repeat the password"
                name='password2'
                value={registerData.password2}
                onChange={handleOnChange} />
            </Form.Group>
            <Button variant="primary" type="submit" className={styles.FormButton}>
              Register
            </Button>
          </Form>
        </Container>
        <Footer />
      </Fragment>
    </HelmetProvider>
  );
};

export default RegisterForm;