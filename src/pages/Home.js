import { React, Fragment } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <HelmetProvider>
            <Fragment>
                <Helmet>
                    <title>Home - TechPlaza Platform</title>
                </Helmet>
                < NavBar />
                <Header
                    title="TECHPLAZA is Your Partner in Innovative Application Solutions and Comprehensive IT Support"
                    typedStrings={["Software Technical Support", "Hardware Technical Support", "Community Chat Rooms", "Work Events", "Community Applications"]}
                />
                <Footer />
            </Fragment>
        </HelmetProvider>
    );
};

export default Home;