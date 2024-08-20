import React from 'react';
import { Button, Modal, Form, FormGroup, FormControl, FormLabel, ModalHeader, ModalBody, ModalFooter } from "react-bootstrap";
import { toast } from "react-toastify";

const TaskModal = ({ modal, toggle, activeItem, handleChange, handleSubmit }) => {

    const validateFields = () => {
        if (!activeItem.task_title.trim() || !activeItem.task_description.trim()) {
            toast.error("Cannot submit empty task without title or description.");
            return false;
        }
        if (activeItem.task_title.length > 100) {
            toast.error("Title must be less than 100 characters.");
            return false;
        }
        if (activeItem.task_description.length > 250) {
            toast.error("Description must be less than 250 characters.");
            return false;
        }
        return true;
    };

    const handleSave = () => {
        if (validateFields()) {
            handleSubmit(activeItem);
        }
    };

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
                            name="task_title"
                            value={activeItem.task_title}
                            onChange={handleChange}
                            placeholder="Enter Task Title"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Description</FormLabel>
                        <FormControl
                            type="text"
                            name="task_description"
                            value={activeItem.task_description}
                            onChange={handleChange}
                            placeholder="Enter Task Description"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Form.Check
                            type="checkbox"
                            name="is_done"
                            label="Done"
                            checked={activeItem.is_done}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button variant="success" onClick={handleSave}>
                    Save
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default TaskModal;