import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const TabList = ({ viewDone, displayDone }) => {
    return (
        <ButtonGroup className="my-5">
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