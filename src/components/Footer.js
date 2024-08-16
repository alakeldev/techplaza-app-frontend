import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from "../assets/logo.png";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    const year = new Date().getFullYear();
    
    useEffect(() => {
    }, []);

    return (
        <Container className="py-5 mt-5 text-light text-center">
            <Row>
                <Col className="display-6 mb-3">
                    <img src={Logo} alt="website logo" className={styles.Logo} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6 className='text-black'>IT Support & Innovative Applications</h6>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col>
                    <span className={`m-2 bg-dark btn btn-outline-black ${styles.icon}`}><a href="https://twitter.com/" rel="noopener noreferrer"
                        target="_blank" aria-label="Twitter - Opens in a new tab"><i
                            className="fa-brands fa-x-twitter text-white fa-2x"></i></a></span>
                    <span className={`m-2 bg-dark btn btn-outline-black ${styles.icon}`}><a href="https://hashnode.com/" rel="noopener noreferrer"
                        target="_blank" aria-label="Hashnode - Opens in a new tab"><i
                            className="fa-brands fa-hashnode text-white fa-2x"></i></a></span>
                    <span className={`m-2 bg-dark btn btn-outline-black ${styles.icon}`}><a href="https://www.reddit.com/" rel="noopener noreferrer"
                        target="_blank" aria-label="Instagram - Opens in a new tab"><i
                            className="fa-brands fa-reddit text-white fa-2x"></i></a></span>
                    <span className={`m-2 bg-dark btn btn-outline-black ${styles.icon}`}><a href="https://github.com/" rel="noopener noreferrer"
                        target="_blank" aria-label="Github - Opens in a new tab"><i
                            className="fa-brands fa-github text-white fa-2x"></i></a></span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <small className="text-black">TechPlaza Platform. All Rights Reserved © {year} </small>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;