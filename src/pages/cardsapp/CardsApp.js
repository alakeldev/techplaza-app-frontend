import React, { Fragment, useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import MembersCardsList from '../../components/MembersCardsList';
import SearchFilter from '../../components/SearchFilter';
import styles from '../../styles/CardsApp.module.css';
import { Button } from 'react-bootstrap';

const CardsApp = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  const jwt_token = localStorage.getItem('access');
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (jwt_token === null || !user) {
      navigate("/login");
    }
  }, [jwt_token, user, navigate]);

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  const handleSearchClick = () => {
    setSearchQuery(searchTerm);
  };

  const handleSearchFocus = () => {
    setSearchTerm('');
    setSearchQuery('');
  };

  if (!user) {
    return null;
  }

  return (
    <HelmetProvider>
      <Fragment>
        <Helmet>
          <title>Cards Members - TechPlaza Platform</title>
        </Helmet>
        <NavBar />
        <div className={styles.mainContainer}>
          <h2>Community Members Cards</h2>
          <SearchFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onSearchClick={handleSearchClick}
            onSearchFocus={handleSearchFocus}
          />
          <Button className={styles.dashboardButton} onClick={handleDashboardClick}>Dashboard</Button>
          <MembersCardsList searchQuery={searchQuery} />
        </div>
        <Footer />
      </Fragment>
    </HelmetProvider>
  );
};

export default CardsApp;