import React, { Fragment } from 'react';
import { ReactTyped } from "react-typed";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import About from '../components/About'
import styles from "../styles/Home.module.css";

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
            <About />
            <Footer />
        </Fragment>
    )
}

export default Home