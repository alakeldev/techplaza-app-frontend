import React from 'react';
import PropTypes from 'prop-types';
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

Header.propTypes = {
    title: PropTypes.string.isRequired,
    typedStrings: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;
