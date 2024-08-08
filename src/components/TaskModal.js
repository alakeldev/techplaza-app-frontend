import React from 'react';
import { Button, Modal, Form, FormGroup, FormControl, FormLabel, ModalHeader, ModalBody, ModalFooter } from "react-bootstrap";

const TaskModal = ({ modal, toggle, activeItem, handleChange, handleSubmit }) => {
    return (
        <Modal show={modal} onHide={toggle}>
            <ModalHeader closeButton>
                <Modal.Title>Task Item</Modal.Title>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <FormLabel>Title</FormLabel>
                        <FormControl
                            type="text"
                            name="title"
                            value={activeItem.title}
                            onChange={handleChange}
                            placeholder="Enter Task Title"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Description</FormLabel>
                        <FormControl
                            type="text"
                            name="description"
                            value={activeItem.description}
                            onChange={handleChange}
                            placeholder="Enter Task Description"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Form.Check
                            type="checkbox"
                            name="done"
                            label="Done"
                            checked={activeItem.done}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button variant="success" onClick={() => handleSubmit(activeItem)}>
                    Save
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default TaskModal;