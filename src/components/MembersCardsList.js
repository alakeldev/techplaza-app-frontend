import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axiosInstance from '../utils/axiosInstance';
import MemberCard from './MemberCard';
import styles from '../styles/MembersCardsList.module.css';


const MembersCardsList = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  const [members, setMembers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone_number: '',
    profession: '',
    description: '',
    country: '',
    photo: null,
  });

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axiosInstance.get('/app3/cards/');
      setMembers(response.data);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };


  return (
    <div className={styles.membersCardsList}>
      {userCard ? (
        <MemberCard
          member={userCard}
          isOwner={true}
          onEdit={() => handleEdit(userCard)}
          onDelete={() => handleDelete(userCard.id)}
        />
      ) : (
        <Button onClick={() => setShowModal(true)}>Create Card</Button>
      )}
      {members
        .filter((member) => member.email !== user.email)
        .map((member) => (
          <MemberCard key={member.id} member={member} isOwner={false} />
        ))}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{userCard ? 'Edit Card' : 'Create Card'}</Modal.Title>
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
              />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                readOnly
              />
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
            <Form.Group controlId="formPhoto">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="file"
                name="photo"
                onChange={handleFileChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {userCard ? 'Update Card' : 'Create Card'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default MembersCardsList