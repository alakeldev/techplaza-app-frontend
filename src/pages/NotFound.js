import React, { Fragment } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from '../styles/NotFound.module.css';

const NotFound = () => {
    return (
        <Fragment>
            <NavBar />
            <div className={styles.mainContainer}>
                <h1>Oops!! This Page Doesn't Exist!</h1>
            </div>
            <Footer />
        </Fragment>
    );
};

export default NotFound;