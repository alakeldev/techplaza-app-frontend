import React, { Fragment, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from '../../styles/Dashboard.module.css';


const Dashboard = () => {

  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  const jwt_token = localStorage.getItem('access')

  useEffect(() => {
    if(jwt_token === null && !user) {
      navigate("/login")
    }
  }, [jwt_token, user, navigate]);

  return (
    <Fragment>
      <NavBar />
      <div className={styles.dashboardContainer}>
        <h2>Hi {user && user.name.charAt(0).toLocaleUpperCase() + user.name.slice(1)}</h2>
        <h5>Welcome to Your Dashboard</h5>
        <button>Edit my information</button>
        <button>Delete Account</button>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h3>Application 1</h3>
          </div>
          <div>
            <h3 className={styles.card}>Application 2</h3>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Dashboard