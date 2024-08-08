import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import TaskList from '../../components/TaskList';
import TaskModal from '../../components/TaskModal';
import TabList from '../../components/TabList';
import styles from '../../styles/TasksApp.module.css';

const TasksApp = () => {

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
            <NavBar/>
            <div></div>
            <Footer/>
        </Fragment>
    )
}

export default TasksApp