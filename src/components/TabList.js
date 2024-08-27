import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from 'react-bootstrap';
import styles from '../styles/TasksApp.module.css';

const TabList = ({ viewDone, displayDone }) => {
    return (
        <ButtonGroup className={`my-5 ${styles.buttonGroup}`}>
            <Button
                onClick={() => displayDone(true)}
                variant={viewDone ? "primary" : "outline-primary"}
            >
                Done
            </Button>
            <Button
                onClick={() => displayDone(false)}
                variant={!viewDone ? "primary" : "outline-primary"}
            >
                Undone
            </Button>
        </ButtonGroup>
    );
};

TabList.propTypes = {
    viewDone: PropTypes.bool.isRequired,
    displayDone: PropTypes.func.isRequired,
};

export default TabList;
