import React from 'react';
import { ReactTyped } from "react-typed";
import styles from "../styles/Home.module.css";


const Home = () => {
    return (
        <header className={styles.Landing}>
            <div className={styles.HeaderTypography}>
                <h1>Techplaza is Your Partner in Innovative Application Solutions and Comprehensive IT Support</h1>
                <h2>
                    <ReactTyped
                        className={styles.HeaderLoopText}
                        strings={["Software Technical Support", "Hardware Technical Support", "Community Chat Rooms", "Work Events", "Community Applications"]}
                        typeSpeed={70}
                        backSpeed={50}
                        showCursor={false}
                        loop
                    />
                </h2>
            </div>
        </header>
    )
}

export default Home