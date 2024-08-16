import React, { Fragment, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import MembersCardsList from '../../components/MembersCardsList';
import styles from '../../styles/CardsApp.module.css'
import { Button } from 'react-bootstrap';

const CardsApp = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  const jwt_token = localStorage.getItem('access');
  const navigate = useNavigate();

  useEffect(() => {
    if (jwt_token === null && !user) {
      navigate("/login");
    }
  }, [jwt_token, user, navigate]);

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  return (
    <HelmetProvider>
      <Fragment>
        <Helmet>
          <title>Cards Members - TechPlaza Platform</title>
        </Helmet>
        <NavBar />
        <div className={styles.mainContainer}>
          <h2>Our Community Members Cards</h2>
          <Button className={styles.dashboardButton} onClick={handleDashboardClick}>Dashboard</Button>
          <MembersCardsList />
        </div>
        <Footer />
      </Fragment>
    </HelmetProvider>
  );
};

export default CardsApp;