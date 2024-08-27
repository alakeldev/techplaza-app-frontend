import { useState, React } from 'react';
import PropTypes from 'prop-types';
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';
import { Button, Modal, Form, FormGroup, FormControl, FormLabel, ModalHeader, ModalBody, ModalFooter } from "react-bootstrap";
import styles from '../styles/EditInformation.module.css';

const EditInformation = ({ show, handleClose, user, updateFullName }) => {
  const [fullName, setFullName] = useState(user.name);

  const validateFullName = (fullName) => {
    const fullNameTrimmed = fullName.trim();
    const fullNameRegex = /^[A-Za-z\s]{4,70}$/;
    return fullNameTrimmed.length >= 4 && fullNameTrimmed.length <= 70 && fullNameRegex.test(fullNameTrimmed);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFullName(fullName)) {
      toast.error("Full name must be between 4 and 70 characters and can only contain letters and spaces.");
      return;
    }
    try {
      const response = await axiosInstance.patch('/auth/update-information/', {
        full_name: fullName,
      });
      if (response.status === 200) {
        toast.success('Information updated successfully');
        updateFullName(fullName);

        const updatedUser = { ...user, name: fullName };
        localStorage.setItem('user', JSON.stringify(updatedUser));

        handleClose();
      }
    } catch {
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
            <small className={styles.note}>This email cannot be changed. It is your identity in the community.</small>
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

EditInformation.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  updateFullName: PropTypes.func.isRequired,
};

export default EditInformation;
