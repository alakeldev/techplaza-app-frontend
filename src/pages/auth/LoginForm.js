import React, { Fragment, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from '../../styles/LoginForm.module.css';
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleOnChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
    setError("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      setError("Email and Password fields are required!")
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      setError("Please enter a valid email address!")
    } else {
      setIsLoading(true)
      try {
        const res = await axios.post("http://127.0.0.1:8000/api/auth/login/", loginData)
        const response = res.data
        console.log(response)
        setIsLoading(false)
        const user = {
          "email": response.email,
          "name": response.full_name
        }
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(user))
          localStorage.setItem("access", JSON.stringify(response.token))
          localStorage.setItem("refresh", JSON.stringify(response.refresh_token))
          navigate("/dashboard")
          toast.success("Login successful")
        }
      } catch (error) {
        setIsLoading(false)
        setError("Login failed. Please check your credentials and try again.")
      }
    }
  }

  return (
    <Fragment>
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
        </Form>
      </Container>
      <Footer />
    </Fragment>
  )
}

export default LoginForm