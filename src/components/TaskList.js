import React from 'react';
import TaskItem from './TaskItem';
import { ListGroup } from 'react-bootstrap';

const TaskList = ({ taskList, viewDone, editItem, handleDelete }) => {
    const newItems = taskList.filter(
        item => item.done === viewDone
    );

    return (
        <ListGroup>
            {
                newItems.map(item => (
                    <TaskItem
                        key = {item.id}
                        item = {item}
                        editItem = {editItem}
                        handleDelete = {handleDelete}
                        viewDone = {viewDone}
                    />
                )
                )
            }
        </ListGroup>
    );
};

export default TaskList;