import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';
import { ListGroup } from 'react-bootstrap';

const TaskList = ({ taskList, viewDone, editItem, handleDelete }) => {
    const newItems = taskList.filter(
        item => item.is_done === viewDone
    );

    return (
        <ListGroup>
            {
                newItems.map(item => (
                    <TaskItem
                        key={item.id}
                        item={item}
                        editItem={editItem}
                        handleDelete={handleDelete}
                        viewDone={viewDone}
                    />
                ))
            }
        </ListGroup>
    );
};

TaskList.propTypes = {
    taskList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        is_done: PropTypes.bool.isRequired,
        task_title: PropTypes.string.isRequired,
        task_description: PropTypes.string.isRequired,
    })).isRequired,
    viewDone: PropTypes.bool.isRequired,
    editItem: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default TaskList;
