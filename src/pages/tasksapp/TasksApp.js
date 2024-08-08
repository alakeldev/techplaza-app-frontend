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

    const [viewDone, setViewDone] = useState(false);
    const [activeItem, setActiveItem] = useState({
        task_title: "",
        task_description: "",
        is_done: false
    });
    const [taskList, setTaskList] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        refreshList();
    }, []);

    const refreshList = () => {
        axios
            .get("http://127.0.0.1:8000/api/app2/tasks_manager/")
            .then(res => setTaskList(res.data))
            .catch(err => console.log(err));
    };

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
        toggle();
        console.log("Submitting item:", item);
        if (item.id) {
            axios
                .put(`http://127.0.0.1:8000/api/app2/tasks_manager/${item.id}/`, item)
                .then(res => refreshList())
                .catch(err => console.log(err.response));
            return;
        }
        axios
            .post("http://127.0.0.1:8000/api/app2/tasks_manager/", item)
            .then(res => refreshList())
            .catch(err => console.log(err.response));
    };

    const handleDelete = item => {
        axios
            .delete(`http://127.0.0.1:8000/api/app2/tasks_manager/${item.id}/`)
            .then(res => refreshList())
            .catch(err => console.log(err.response));
    };

    const createItem = () => {
        const item = { task_title: "", task_description: "", is_done: false };
        setActiveItem(item);
        setModal(!modal);
    };

    const editItem = item => {
        setActiveItem(item);
        setModal(!modal);
    };

    return (
        <Fragment>
            <NavBar />
            <Container className="content">
                <h1 className="text-black text-uppercase text-center my-4">Task Manager</h1>
                <Row className="justify-content-center">
                    <Col md={6} sm={10}>
                        <Card className="p-3">
                            <Button onClick={createItem} variant="primary" className="mb-3">
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
    )
}

export default TasksApp