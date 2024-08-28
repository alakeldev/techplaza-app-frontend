import React, { Fragment, useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Form, Button, Container } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from '../../styles/LoginForm.module.css';
import axiosInstance from '../../utils/axiosInstance';
import { toast } from "react-toastify";
import { useNavigate, Link } from 'react-router-dom';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const jwt_token = localStorage.getItem('access');
    if (user && jwt_token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleOnChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
    setError("");
  }

  const validatePassword = (password) => {
    return password.length >= 4 && password.length <= 40;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      setError("To Login Email and Password fields are required!");
    } else if (!validatePassword(loginData.password)) {
      setError("Password must be between 4 and 40 characters.");
    } else {
      setIsLoading(true);
      try {
        const res = await axiosInstance.post("/auth/login/", loginData);
        const response = res.data;
        setIsLoading(false);
        const user = {
          "email": response.email,
          "name": response.full_name
        };
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(user))
          localStorage.setItem("access", JSON.stringify(response.token))
          localStorage.setItem("refresh", JSON.stringify(response.refresh_token))
          navigate("/dashboard");
          toast.success("Login successful");
        }
      } catch (error) {
        setIsLoading(false);
        if (error.response && error.response.status === 401) {
          setError("Invalid credentials. Please check your email and password and try again.");
        } else if (error.response && error.response.status === 400) {
          setError("Validation error. Please check your input and try again.");
        } else {
          setError("Login failed. Please check your credentials and try again.");
        }
      }
    }
  };

  return (
    <HelmetProvider>
      <Fragment>
        <Helmet>
          <title>Login - TechPlaza Platform</title>
        </Helmet>
        <NavBar />
        <Container className={styles.FormContainer}>
          <Form onSubmit={handleSubmit} className={styles.TheForm}>
            {isLoading && (<h6>Loading.....</h6>)}
            <h2>Login</h2>
            {error && <p className={styles.ErrorMessage}>{error}</p>}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className={styles.FormLabel}>Enter Your Email Address</Form.Label>
              <Form.Control
                className={styles.FormField}
                type="email"
                placeholder="Enter your registered email"
                name="email"
                value={loginData.email}
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter Your Password</Form.Label>
              <Form.Control
                className={styles.FormField}
                type="password"
                placeholder="Enter your password"
                name="password"
                value={loginData.password}
                onChange={handleOnChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className={styles.FormButton}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
            <div className={styles.ForgetPasswordContainer}>
              <Link to={"/forget_password"} className={styles.ForgetPasswordLink}>Forgot Password?</Link>
            </div>
          </Form>
        </Container>
        <Footer />
      </Fragment>
    </HelmetProvider>
  );
};

export default LoginForm;