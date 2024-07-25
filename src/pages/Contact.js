import React, { Fragment } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';

const Contact = () => {
    return (
        <Fragment>
            <NavBar />
            <Container className={styles.FormStyle}>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
            <Footer />
        </Fragment>
    );
};

export default Contact;