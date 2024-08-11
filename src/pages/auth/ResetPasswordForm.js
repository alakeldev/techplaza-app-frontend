import React, { useState, Fragment, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from '../../styles/ResetPasswordForm.module.css';
import axiosInstance from '../../utils/axiosInstance';
import { toast } from 'react-toastify';

const ResetPasswordForm = () => {
    const navigate = useNavigate();
    const { uid, token } = useParams();
    const [newPasswords, setNewPasswords] = useState({
        password: "",
        confirm_password: "",
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        const jwt_token = localStorage.getItem('access');
        if (user && jwt_token) {
            navigate("/dashboard");
        }
    }, [navigate]);

    const handleChange = (e) => {
        setNewPasswords({ ...newPasswords, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPasswords.password === "" || newPasswords.confirm_password === "") {
            toast.error("Password fields cannot be empty.");
            return;
        }
        if (newPasswords.password !== newPasswords.confirm_password) {
            toast.error("Passwords do not match.");
            return;
        }
        const data = {
            "password": newPasswords.password,
            "password_confirm": newPasswords.confirm_password,
            "uidb64": uid,
            "token": token,
        };
        try {
            const response = await axiosInstance.patch("/auth/new-password/", data);
            const result = response.data;
            if (response.status === 200) {
                navigate('/login');
                toast.success(result.message);
            }
        } catch (error) {
            toast.error("Failed to reset password invalid link.");
        }
    };

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
    );
};

export default ResetPasswordForm;