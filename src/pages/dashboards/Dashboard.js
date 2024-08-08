import React, { Fragment, useEffect } from 'react';
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

  const handleAppClick = (app) => {
    if (app === 'World Weather Application') {
      navigate('/dashboard/weather_app');
    } else if (app === 'Tasks Manager Application') {
      navigate('/dashboard/tasks_app');
    }
  };

  return (
    <Fragment>
      <NavBar />
      <div className={styles.dashboardContainer}>
        <h2>Hi {user && user.name.charAt(0).toLocaleUpperCase() + user.name.slice(1)}</h2>
        <h5>Welcome to Your Dashboard</h5>
        <button>Edit my information</button>
        <button>Delete Account</button>
        <div className={styles.cardContainer}>
          <div className={styles.card} onClick={() => handleAppClick('World Weather Application')}>
            <h3>World Weather Application</h3>
          </div>
          <div className={styles.card} onClick={() => handleAppClick('Tasks Manager Application')}>
            <h3>Tasks Manager Application</h3>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Dashboard;