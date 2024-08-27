import React, { Fragment } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from '../styles/NotFound.module.css';

const NotFound = () => {
    return (
        <HelmetProvider>
            <Fragment>
                <Helmet>
                    <title>Page Not Found - TechPlaza Platform</title>
                </Helmet>
                <NavBar />
                <div className={styles.mainContainer}>
                    <h1>Oops!! This Page Does not Exist!</h1>
                </div>
                <Footer />
            </Fragment>
        </HelmetProvider>
    );
};

export default NotFound;