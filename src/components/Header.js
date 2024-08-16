import React from 'react';
import { ReactTyped } from "react-typed";
import styles from "../styles/Header.module.css";

function Header({ title, typedStrings }) {
    return (
        <header className={styles.Landing}>
            <div className={styles.HeaderTypography}>
                <h1>{title}</h1>
                <h2>
                    <ReactTyped
                        className={styles.HeaderLoopText}
                        strings={typedStrings}
                        typeSpeed={50}
                        backSpeed={40}
                        showCursor={false}
                        loop
                    />
                </h2>
            </div>
        </header>
    );
};

export default Header;