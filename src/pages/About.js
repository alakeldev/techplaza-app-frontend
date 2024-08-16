import React, { Fragment } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Carousel from 'react-bootstrap/Carousel';
import styles from "../styles/About.module.css";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <HelmetProvider>
            <Fragment>
                <Helmet>
                    <title>About Us - TechPlaza Platform</title>
                </Helmet>
                < NavBar />
                <Carousel>
                    <Carousel.Item>
                        <div className={styles.ImgCarouselOne}>
                        </div>
                        <Carousel.Caption>
                            <h3>Welcome to Our Community</h3>
                            <p>We are a leading provider of cutting-edge applications and comprehensive IT support, dedicated to serving the needs of our diverse community. Our commitment to innovation and excellence sets us apart in the industry.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={styles.ImgCarouselTwo}>
                        </div>
                        <Carousel.Caption>
                            <h3>Innovative Applications</h3>
                            <p>Our team of skilled developers crafts applications that are not only functional and reliable but also intuitive and engaging. We believe in creating digital solutions that enhance productivity and drive growth for our community.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={styles.ImgCarouselThree}>
                        </div>
                        <Carousel.Caption>
                            <h3>IT Support</h3>
                            <p>Our IT support team is dedicated to ensuring seamless operations for our community. We provide round-the-clock support, proactive monitoring, and swift problem resolution to keep the applications running smoothly and efficiently.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Footer />
            </Fragment>
        </HelmetProvider>
    );
};

export default About;