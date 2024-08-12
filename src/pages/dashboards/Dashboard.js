import React, { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import weatherImage from '../../assets/weather.jpg';
import tasksImage from '../../assets/tasks.jpg';
import snakeImage from '../../assets/snake.jpg';
import chatImage from '../../assets/chat.jpg';
import styles from '../../styles/Dashboard.module.css';


const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt_token = localStorage.getItem('access');

  useEffect(() => {
    if (jwt_token === null && !user) {
      navigate("/login");
    }
  }, [jwt_token, user, navigate]);

  const handleAppClick = (app) => {
    if (app === 'World Weather Application') {
      navigate('/dashboard/weather_app');
    } else if (app === 'Tasks Manager Application') {
      navigate('/dashboard/tasks_app');
    } else if (app === 'Snake Game') {
      navigate('/dashboard/snake_game');
    }
  };

  return (
    <Fragment>
      <NavBar />
      <div className={styles.dashboardContainer}>
        <div className={styles.welcomeContainer}>
          <h2>Hi {user && user.name.charAt(0).toLocaleUpperCase() + user.name.slice(1)}</h2>
          <h5>Welcome to Your Dashboard</h5>
          <div className={styles.buttonContainer}>
            <button className={styles.editButton}>Edit my Information</button>
            <button className={styles.deleteButton}>Delete my Account</button>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card} onClick={() => handleAppClick('World Weather Application')}>
            <img src={weatherImage} alt="World Weather Application" className={styles.cardImage} />
            <h3>World Weather</h3>
            <p>Get the latest weather updates from around the world.</p>
          </div>
          <div className={styles.card} onClick={() => handleAppClick('Tasks Manager Application')}>
            <img src={tasksImage} alt="Tasks Manager Application" className={styles.cardImage} />
            <h3>Tasks Manager</h3>
            <p>Manage your tasks efficiently and stay organized.</p>
          </div>
          <div className={styles.card} onClick={() => handleAppClick('Snake Game')}>
            <img src={snakeImage} alt="Snake Game" className={styles.cardImage} />
            <h3>Snake Game</h3>
            <p>Enjoy a classic game of Snake.</p>
          </div>
          <div className={`${styles.card} ${styles.disabledCard}`}>
            <img src={chatImage} alt="Chat Application" className={styles.cardImage} />
            <h3>Community Chat</h3>
            <p>Coming in December 2024</p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Dashboard;