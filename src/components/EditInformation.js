import  { useState, React } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';
import { Button, Modal, Form, FormGroup, FormControl, FormLabel, ModalHeader, ModalBody, ModalFooter } from "react-bootstrap";
import styles from '../styles/EditInformation.module.css';

const EditInformation = ({ show, handleClose, user, updateFullName }) => {
  const [fullName, setFullName] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.patch('/auth/update-information/', {
        full_name: fullName,
      });
      if (response.status === 200) {
        toast.success('Information updated successfully');
        updateFullName(fullName);
        handleClose();
      }
    } catch (error) {
      toast.error('Failed to update information');
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered className={styles.modalDialog}>
      <ModalHeader closeButton className={styles.modalHeader}>
        <Modal.Title>Edit My Information</Modal.Title>
      </ModalHeader>
      <ModalBody className={styles.modalBody}>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel className={styles.nameLabel}>Full Name</FormLabel>
            <FormControl
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter Full Name"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel className={styles.emailLabel}>Email</FormLabel>
            <FormControl
              type="email"
              value={user.email}
              disabled
            />
            <small className={styles.note}>This email cannot be changed. It's your identity in the community.</small>
          </FormGroup>
          <ModalFooter className={styles.modalFooter}>
            <Button variant="secondary" onClick={handleClose} className={styles.btnSecondary}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" className={styles.btnPrimary}>
              Update
            </Button>
          </ModalFooter>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default EditInformation;