import React from 'react';
import { Button, ListGroupItem } from 'react-bootstrap';

const TaskItem = ({ item, editItem, handleDelete, viewDone }) => {
    return (
        <ListGroupItem
            key={item.id}
            className="d-flex justify-content-between align-items-center"
        >
            <span
                className={`mr-2 ${viewDone ? "text-decoration-line-through" : ""}`}
                title={item.task_description}
            >
                {item.task_title}
            </span>
            <span>
                <Button
                    onClick={() => editItem(item)}
                    variant="secondary"
                    className="mr-2"
                >
                    Edit
                </Button>
                <Button
                    onClick={() => handleDelete(item)}
                    variant="danger"
                >
                    Delete
                </Button>
            </span>
        </ListGroupItem>
    );
};

export default TaskItem;
