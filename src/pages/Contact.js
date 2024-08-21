import React, { Fragment, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Form, Button, Container } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateName = (name) => {
        const nameRegex = /^[A-Za-z\s]{4,50}$/;
        if (!nameRegex.test(name)) {
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateName(formData.name)) {
            toast.error('Name must be between 4 and 50 characters and contain only letters.');
            return;
        }
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
            .then((result) => {
                toast.success('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            }, (error) => {
                toast.error('Failed to send message. Please try again.');
            });
    };

    return (
        <HelmetProvider>
            <Fragment>
                <Helmet>
                    <title>Contact Us - TechPlaza Platform</title>
                </Helmet>
                <NavBar />
                <Container className={styles.FormContainer}>
                    <Form className={styles.TheForm} onSubmit={handleSubmit}>
                        <h2>Contact Form</h2>
                        <Form.Group className="mb-3">
                            <Form.Label className={styles.FormLabel}>Full Name</Form.Label>
                            <Form.Control
                                className={styles.FormField}
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className={styles.FormLabel}>Email Address</Form.Label>
                            <Form.Control
                                className={styles.FormField}
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className={styles.FormLabel}>Message</Form.Label>
                            <Form.Control
                                className={`${styles.FormField} ${styles.TextAreaField}`}
                                as="textarea"
                                rows={3}
                                placeholder="Enter your message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className={styles.FormButton}>
                            Send
                        </Button>
                    </Form>
                </Container>
                <Footer />
            </Fragment>
        </HelmetProvider>
    );
};

export default Contact;