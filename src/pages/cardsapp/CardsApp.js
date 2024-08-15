import React, { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const CardsApp = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  const jwt_token = localStorage.getItem('access');
  const navigate = useNavigate();

  useEffect(() => {
    if (jwt_token === null && !user) {
      navigate("/login");
    }
  }, [jwt_token, user, navigate]);



  return (
    <Fragment>
      <Helmet>
        <title>Cards Members - TechPlaza Platform</title>
      </Helmet>
      <NavBar />

      <Footer />
    </Fragment>
  )
}

export default CardsApp