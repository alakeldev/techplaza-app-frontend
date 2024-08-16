import React, { Fragment, useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import EditInformation from '../../components/EditInformation';
import DeleteAccount from '../../components/DeleteAccount';
import weatherImage from '../../assets/weather.jpg';
import tasksImage from '../../assets/tasks.jpg';
import snakeImage from '../../assets/snake.jpg';
import cardsImage from '../../assets/cards.jpg';
import chatImage from '../../assets/chat.jpg';
import styles from '../../styles/Dashboard.module.css';


const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt_token = localStorage.getItem('access');
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [fullName, setFullName] = useState(user ? user.full_name : '');

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
    } else if (app === 'Member Cards Application') {
      navigate('/dashboard/cards_app');
    }
  };

  const updateFullName = (newFullName) => {
    setFullName(newFullName);
    const updatedUser = { ...user, full_name: newFullName };
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  return (
    <HelmetProvider>
      <Fragment>
        <Helmet>
          <title>Dashboard - TechPlaza Platform</title>
        </Helmet>
        <NavBar />
        <div className={styles.dashboardContainer}>
          <div className={styles.welcomeContainer}>
            <h2>Hi {(fullName || user.name) && (fullName || user.name).split(' ').map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1)).join(' ')}</h2>
            <div className={styles.buttonContainer}>
              <button className={styles.editButton} onClick={() => setShowEdit(true)}>Edit my Information</button>
              <button className={styles.deleteButton} onClick={() => setShowDelete(true)}>Delete my Account</button>
            </div>
            <h5>Welcome to Your Dashboard</h5>
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
            <div className={styles.card} onClick={() => handleAppClick('Member Cards Application')}>
              <img src={cardsImage} alt="Member Cards Application" className={styles.cardImage} />
              <h3>Members Card</h3>
              <p>Explore the details and cards of our community members, and create your own.</p>
            </div>
            <div className={`${styles.card} ${styles.disabledCard}`}>
              <img src={chatImage} alt="Chat Application" className={styles.cardImage} />
              <h3>Community Chat</h3>
              <p>Coming in December 2024</p>
            </div>
          </div>
        </div>
        <EditInformation show={showEdit} handleClose={() => setShowEdit(false)} user={user} updateFullName={updateFullName} />
        <DeleteAccount show={showDelete} handleClose={() => setShowDelete(false)} />
        <Footer />
      </Fragment>
    </HelmetProvider>
  );
};

export default Dashboard;