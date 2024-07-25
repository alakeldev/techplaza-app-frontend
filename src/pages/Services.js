import React, { Fragment } from 'react';
import { Container, Row, Col, Image, Accordion } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from '../styles/Services.module.css'
import ServicesImage from '../assets/services.jpg'

const Services = () => {
    return (
        <Fragment>
            < NavBar />
            <Container className={styles.ServicesContainer}>
                <Row className="justify-content-md-center align-items-md-center">
                    <Col md={6} order={1}>
                        <Image src={ServicesImage} alt='IT community' className={styles.ServicesImage} />
                    </Col>
                    <Col md={6} order={2} className="d-flex justify-content-md-center align-items-md-center">
                        <Accordion defaultActiveKey="0" className={styles.ServicesAccordion}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Community Applications</Accordion.Header>
                                <Accordion.Body>
                                    As a registered user, enjoy free access to our suite of applications. These tools, including a weather app, task manager, and notes app, are designed to simplify your daily tasks and boost productivity. We’re always working to add more features to help make your life easier and more organized.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>IT Support Service</Accordion.Header>
                                <Accordion.Body>
                                    We offer expert assistance for hardware and software issues. Registered users can submit a request for help from our professionals or find solutions within our community. We also provide a library of resources for self-guided help. Join us today and let us simplify your IT experience.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Community Chat Service</Accordion.Header>
                                <Accordion.Body>
                                    Exclusive platform for registered users to connect, share, and learn. Stay updated with the latest news on software and hardware, get answers to your queries, and engage in enriching discussions. It’s not just a chat service, it’s a community that grows together.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default Services