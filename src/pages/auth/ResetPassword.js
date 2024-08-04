import React, { useState, Fragment } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from '../../styles/ResetPassword.module.css';
import axiosInstance from '../../utils/axiosInstance';
import { toast } from 'react-toastify';

const ResetPassword = () => {
    const navigate = useNavigate()
    const { uid, token } = useParams()
    const [newPasswords, setNewPasswords] = useState({
        password: "",
        confirm_password: "",
    })

    const handleChange = (e) => {
        setNewPasswords({ ...newPasswords, [e.target.name]: e.target.value })
    }

    const data = {
        "password": newPasswords.password,
        "confirm_password": newPasswords.confirm_password,
        "uidb64": uid,
        "token": token,
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axiosInstance.patch("/auth/new-password/", data)
        const result = response.data
        if (response.status === 200) {
            navigate('/login')
            toast.success(result.message)
        }
    }

    return (
        <Fragment>
            <NavBar />
            <Container className={styles.FormContainer}>
                <Form onSubmit={handleSubmit} className={styles.TheForm}>
                    <h2>Enter Your New Password</h2>
                    <Form.Group className="mb-3" controlId="formBasicPassword1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            className={styles.FormField}
                            type="password"
                            placeholder="Enter password"
                            name='password'
                            value={newPasswords.password}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword2">
                        <Form.Label>Password Confirm</Form.Label>
                        <Form.Control
                            className={styles.FormField}
                            type="password"
                            placeholder="Repeat the password"
                            name='confirm_password'
                            value={newPasswords.confirm_password}
                            onChange={handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className={styles.FormButton}>
                        Submit
                    </Button>
                </Form>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default ResetPassword