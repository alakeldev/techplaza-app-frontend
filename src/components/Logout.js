import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axiosInstance from '../utils/axiosInstance';
import { toast } from "react-toastify";
import styles from "../styles/NavBarLogout.module.css";

const Logout = ({ show, handleClose }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        const refresh = JSON.parse(localStorage.getItem('refresh'));
        setLoading(true);
        try {
            const res = await axiosInstance.post("/auth/logout/", { "refresh_token": refresh });
            if (res.status === 200) {
                localStorage.removeItem("user");
                localStorage.removeItem("access");
                localStorage.removeItem("refresh");
                navigate("/");
                toast.success("Logout successful");
                handleClose();
            }
        } catch {
            toast.error("Logout failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered className={styles.modalDialog}>
            <Modal.Header closeButton className={styles.modalHeader}>
                <Modal.Title>Logout Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.modalBody}>Are you sure you want to logout?</Modal.Body>
            <Modal.Footer className={styles.modalFooter}>
                <Button variant="secondary" onClick={handleClose} className={styles.btnSecondary}>
                    No
                </Button>
                <Button variant="primary" onClick={handleLogout} className={styles.btnPrimary} disabled={loading}>
                    {loading ? 'Logging out...' : 'Yes'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

Logout.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default Logout;
