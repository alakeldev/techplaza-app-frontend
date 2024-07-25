import React, { Fragment } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';

const Contact = () => {
    return (
        <Fragment>
            <NavBar />
            <Container className={styles.FormContainer}>
                <Form className={styles.TheForm}>
                    <h2>Contact Form</h2>
                    <Form.Group className="mb-3">
                        <Form.Label className={styles.FormLabel}>Full Name</Form.Label>
                        <Form.Control className={styles.FormField} type="text" placeholder="Enter your name" required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className={styles.FormLabel}>Email Address</Form.Label>
                        <Form.Control className={styles.FormField} type="email" placeholder="Enter your email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className={styles.FormLabel}>Message</Form.Label>
                        <Form.Control className={`${styles.FormField} ${styles.TextAreaField}`} as="textarea" rows={3} placeholder="Enter your message" required/>
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

export default Contact;