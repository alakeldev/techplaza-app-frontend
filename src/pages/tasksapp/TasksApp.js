import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import TaskList from '../../components/TaskList';
import TaskModal from '../../components/TaskModal';
import TabList from '../../components/TabList';
import axiosInstance from '../../utils/axiosInstance';
import { toast } from 'react-toastify';
import styles from '../../styles/TasksApp.module.css';

const TasksApp = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    const jwt_token = localStorage.getItem('refresh');
    const navigate = useNavigate();

    useEffect(() => {
        if (jwt_token === null || !user) {
            navigate("/login");
        }
    }, [jwt_token, user, navigate]);

    const [viewDone, setViewDone] = useState(false);
    const [activeItem, setActiveItem] = useState({
        task_title: "",
        task_description: "",
        is_done: false,
        user: user ? user.id : null
    });
    const [taskList, setTaskList] = useState([]);
    const [modal, setModal] = useState(false);

    const refreshList = useCallback(() => {
        axiosInstance
            .get("/app2/tasks_manager/")
            .then(res => {
                setTaskList(res.data);
            })
            .catch(err => {
                if (err.response && err.response.status === 401) {
                    toast.error('Unauthorized. Please log in again.');
                    navigate("/login");
                } else {
                    toast.error('Error fetching tasks. Please try again later.');
                }
            });
    }, [navigate]);

    useEffect(() => {
        if (user) {
            refreshList();
        }
    }, [refreshList, user]);

    const displayDone = status => {
        setViewDone(status);
    };

    const toggle = () => {
        setModal(!modal);
    };

    const handleChange = e => {
        let { name, value } = e.target;
        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }
        setActiveItem({ ...activeItem, [name]: value });
    };

    const handleSubmit = item => {
        if (!item.task_title || !item.task_description) {
            toast.error('Please fill in all fields.');
            return;
        }

        if (item.task_title.length > 100) {
            toast.error('The title is too long. Please keep it under 100 characters.');
            return;
        }

        if (item.task_description.length > 250) {
            toast.error('The description is too long. Please keep it under 250 characters.');
            return;
        }
        toggle();
        item.user = user.id;
        if (item.id) {
            axiosInstance
                .put(`/app2/tasks_manager/${item.id}/`, item)
                .then(res => {
                    refreshList();
                })
                .catch(err => {
                    toast.error('Error updating task. Please try again later.');
                });
            return;
        }
        axiosInstance
            .post("/app2/tasks_manager/", item)
            .then(res => {
                refreshList();
            })
            .catch(err => {
                toast.error('Error creating task. Please try again later.');
            });
    };

    const handleDelete = item => {
        axiosInstance
            .delete(`/app2/tasks_manager/${item.id}/`)
            .then(res => {
                if (res.status === 204) {
                    refreshList();
                } else {
                    toast.error('Error deleting task. Task not found.');
                }
            })
            .catch(err => {
                if (err.response && err.response.status === 404) {
                    toast.error('Task not found.');
                } else {
                    toast.error('Error deleting task. Please try again later.');
                }
            });
    };

    const createItem = () => {
        const item = { task_title: "", task_description: "", is_done: false, user: user.id };
        setActiveItem(item);
        setModal(!modal);
    };

    const editItem = item => {
        setActiveItem(item);
        setModal(!modal);
    };

    const goToDashboard = () => {
        navigate("/dashboard");
    };

    if (!user) {
        return null;
    }

    return (
        <HelmetProvider>
            <Fragment>
                <Helmet>
                    <title>Tasks Manager - TechPlaza Platform</title>
                </Helmet>
                <NavBar />
                <Container className={styles.content}>
                    <h1 className={styles.title}>Task Manager</h1>
                    <Button onClick={goToDashboard} variant="secondary" className={styles.dashboardButton}>
                        Dashboard
                    </Button>
                    <Row className={styles.row}>
                        <Col md={6} sm={10}>
                            <Card className={styles.card}>
                                <Button onClick={createItem} variant="primary" className={styles.addButton}>
                                    Add task
                                </Button>
                                <TabList viewDone={viewDone} displayDone={displayDone} />
                                <TaskList
                                    taskList={taskList}
                                    viewDone={viewDone}
                                    editItem={editItem}
                                    handleDelete={handleDelete}
                                />
                            </Card>
                        </Col>
                    </Row>
                    <TaskModal
                        modal={modal}
                        toggle={toggle}
                        activeItem={activeItem}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </Container>
                <Footer />
            </Fragment>
        </HelmetProvider>
    );
};

export default TasksApp;