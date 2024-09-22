import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form } from 'react-bootstrap';
import axiosInstance from '../utils/axiosInstance';
import MemberCard from './MemberCard';
import { toast } from 'react-toastify';
import styles from '../styles/MembersCardsList.module.css';

const MembersCardsList = ({ searchQuery }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [members, setMembers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: user.email,
    name: user.name,
    phone_number: '',
    profession: '',
    description: '',
    country: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingMemberId, setEditingMemberId] = useState(null);

  useEffect(() => {
    fetchMembers();
  }, []);

  useEffect(() => {
    if (searchQuery && filteredMembers.length === 0) {
      toast.info('No results available.');
    }
  }, [searchQuery]);

  const fetchMembers = async () => {
    try {
      const response = await axiosInstance.get('/app3/cards/');
      setMembers(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error('Unauthorized: Please log in again.');
      } else {
        toast.error('Error fetching members. Please try again later.');
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateFields = () => {
    const phoneRegex = /^[0-9+]{1,20}$/;
    const textRegex = /^[A-Za-z\s-]+$/;

    if (!formData.phone_number.trim() || !phoneRegex.test(formData.phone_number)) {
      toast.error("Phone number must be less than 20 characters and can only contain numbers and '+'.");
      return false;
    }
    if (!formData.profession.trim() || !textRegex.test(formData.profession) || formData.profession.length > 50) {
      toast.error("Profession must be less than 50 characters and can only contain letters and spaces.");
      return false;
    }
    if (!formData.description.trim() || formData.description.length > 100) {
      toast.error("Description must be less than 100 characters.");
      return false;
    }
    if (!formData.country.trim() || !textRegex.test(formData.country) || formData.country.length > 30) {
      toast.error("Country must be less than 30 characters and can only contain letters, spaces, and '-'.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) {
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key !== 'email' && key !== 'name') {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      if (isEditing) {
        await axiosInstance.put(`/app3/cards/${editingMemberId}/`, formDataToSend);
      } else {
        await axiosInstance.post('/app3/cards/', formDataToSend);
      }
      fetchMembers();
      setShowModal(false);
      setIsEditing(false);
      setEditingMemberId(null);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error('Unauthorized: Please log in again.');
      } else {
        toast.error('Error creating/updating card. Please try again later.');
      }
    }
  };

  const handleEdit = (member) => {
    setFormData({
      email: member.email,
      name: member.name,
      phone_number: member.phone_number,
      profession: member.profession,
      description: member.description,
      country: member.country,
    });
    setIsEditing(true);
    setEditingMemberId(member.id);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/app3/cards/${id}/`);
      setMembers(members.filter((member) => member.id !== id));
      setFormData({
        email: user.email,
        name: user.name,
        phone_number: '',
        profession: '',
        description: '',
        country: '',
      });
    } catch {
      toast.error('Error deleting card. Please try again later.');
    }
  };

  const filteredMembers = members.filter((member) =>
    member.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.membersCardsList}>
      {filteredMembers.length === 0 && searchQuery && (
        <div className={styles.noResults}>No results available.</div>
      )}
      {filteredMembers.length > 0 ? (
        filteredMembers.map((member) => (
          <MemberCard key={member.id} member={member} isOwner={member.email === user.email} onEdit={() => handleEdit(member)} onDelete={() => handleDelete(member.id)} />
        ))
      ) : (
        <div className={styles.createCardButton}>
          <Button onClick={() => setShowModal(true)}>Create Card</Button>
        </div>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit Card' : 'Create Card'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                readOnly
                disabled
              />
              <Form.Text className="text-muted">
                This is your identifier and cannot be changed.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                readOnly
                disabled
              />
              <Form.Text className="text-muted">
                You can change your name from your dashboard page.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formProfession">
              <Form.Label>Profession</Form.Label>
              <Form.Control
                type="text"
                name="profession"
                value={formData.profession}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className={styles.submitButton}>
              {isEditing ? 'Update Card' : 'Create Card'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

MembersCardsList.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default MembersCardsList;
