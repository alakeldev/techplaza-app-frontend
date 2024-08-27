import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import axiosInstance from '../utils/axiosInstance';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../styles/DeleteAccount.module.css';

const DeleteAccount = ({ show, handleClose }) => {

  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      const response = await axiosInstance.delete('/auth/delete-account/');
      if (response.status === 204) {
        localStorage.removeItem("user");
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        navigate("/");
        toast.success('Account deleted successfully');
      }
    } catch {
      toast.error('Failed to delete account');
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered className={styles.modalDialog}>
      <Modal.Header closeButton className={styles.modalHeader}>
        <Modal.Title>Delete Account</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        Are you sure you want to delete your account?
      </Modal.Body>
      <Modal.Footer className={styles.modalFooter}>
        <Button variant="secondary" onClick={handleClose} className={styles.btnSecondary}>
          No
        </Button>
        <Button variant="danger" onClick={handleDelete} className={styles.btnPrimary}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

DeleteAccount.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default DeleteAccount;
