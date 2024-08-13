import React, { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import SnakeGameBoard from '../../components/SnakeGameBoard';
import styles from '../../styles/SnakeGame.module.css';


const SnakeGame = () => {

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
      <NavBar />
      <div className={styles.mainContainer}>
        <Container className="content">
          <h1 className="text-black text-uppercase text-center my-4">Welcome To Snake Game</h1>
          <Row className="justify-content-center">
            <Col md={6} sm={10}>
              <Card className="p-3">
                <SnakeGameBoard />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </Fragment>
  );
};

export default SnakeGame;