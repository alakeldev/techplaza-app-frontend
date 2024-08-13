import React from 'react';
import { Button, ListGroupItem } from 'react-bootstrap';
import styles from '../styles/TasksApp.module.css';

const TaskItem = ({ item, editItem, handleDelete, viewDone }) => {
    return (
        <ListGroupItem
            key={item.id}
            className={`d-flex flex-column align-items-center ${styles.listGroupItem} ${viewDone ? styles.doneTask : ""}`}
        >
            <span
                className={`mr-2 ${viewDone ? styles.doneTask : ""}`}
                title={item.task_description}
            >
                {item.task_title}
            </span>
            <span
                className={`mr-2 ${viewDone ? styles.doneTask : ""}`}
                title={item.task_description}
            >
                {item.task_description}
            </span>
            <div className="d-flex justify-content-center">
                <Button
                    onClick={() => editItem(item)}
                    variant="secondary"
                    className={`${styles.editButton} ${styles.button}`}
                >
                    Edit
                </Button>
                <Button
                    onClick={() => handleDelete(item)}
                    variant="danger"
                    className={`${styles.deleteButton} ${styles.button}`}
                >
                    Delete
                </Button>
            </div>
        </ListGroupItem>
    );
};

export default TaskItem;