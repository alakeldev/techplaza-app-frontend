import React, { Fragment } from 'react';
import { ReactTyped } from "react-typed";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from "../styles/Home.module.css";
import homeImageOne from "../assets/homeone.jpg"
import homeImageTwo from "../assets/hometwo.jpg"


const Home = () => {
    return (
        <Fragment>
            < NavBar />
            <header className={styles.Landing}>
                <div className={styles.HeaderTypography}>
                    <h1>Techplaza is Your Partner in Innovative Application Solutions and Comprehensive IT Support</h1>
                    <h2>
                        <ReactTyped
                            className={styles.HeaderLoopText}
                            strings={["Software Technical Support", "Hardware Technical Support", "Community Chat Rooms", "Work Events", "Community Applications"]}
                            typeSpeed={50}
                            backSpeed={40}
                            showCursor={false}
                            loop
                        />
                    </h2>
                </div>
            </header>
            <section className={styles.HomeStaticPosts}>
                <h2>About Us</h2>
                <div className='container'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-md-6 order-sm-1'>
                            <img src={homeImageOne} alt='IT community' />
                        </div>
                        <div className='col-md-6 order-sm-2 d-flex justify-content-center align-items-center'>
                            <h6>TechPlaza community is a vibrant and dynamic network of professionals, enthusiasts, and learners who are passionate about technology and its potential to transform our world. We are a diverse group of individuals from various backgrounds, experiences, and skill levels, united by our shared interest in information technology.
                                We believe in the power of collaboration and mutual support. Our community members actively engage in knowledge sharing, problem-solving, and mentoring.</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.HomeStaticPosts}>
                <div className='container'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-md-6 order-md-2 col-12 order-1'>
                            <img src={homeImageTwo} alt='Applications' />
                        </div>
                        <div className='col-md-6 order-md-1 col-12 order-2 d-flex justify-content-center align-items-center'>
                            <h6>TechPlaza platform applications are designed with the user in mind. They are intuitive, reliable, and above all, useful. We believe that technology should be a tool that makes your life easier, not more complicated. That’s why we spend countless hours refining our applications to ensure they are as user-friendly as possible.</h6>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default Home