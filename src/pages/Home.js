import React, { Fragment } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <Fragment>
            < NavBar />
            <Header
                title="TECHPLAZA is Your Partner in Innovative Application Solutions and Comprehensive IT Support"
                typedStrings={["Software Technical Support", "Hardware Technical Support", "Community Chat Rooms", "Work Events", "Community Applications"]}
            />
            <Footer />
        </Fragment>
    )
}

export default Home