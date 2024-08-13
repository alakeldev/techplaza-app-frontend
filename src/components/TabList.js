import React from 'react';
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

export default TabList;