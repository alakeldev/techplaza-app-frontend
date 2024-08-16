import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from '../styles/MemberCard.module.css';

const MemberCard = ({ member, isOwner, onEdit, onDelete }) => {
  return (
    <Card className={styles.memberCard}>
      <Card.Img variant="top" src={member.photo} alt="Member Photo" />
      <Card.Body>
        <Card.Title>{member.name}</Card.Title>
        <Card.Text>
          <strong>Email:</strong> {member.email}<br />
          <strong>Phone:</strong> {member.phone_number}<br />
          <strong>Profession:</strong> {member.profession}<br />
          <strong>Description:</strong> {member.description}<br />
          <strong>Country:</strong> {member.country}
        </Card.Text>
        {isOwner && (
          <div className={styles.buttonGroup}>
            <Button variant="primary" onClick={onEdit}>Edit</Button>
            <Button variant="danger" onClick={onDelete}>Delete</Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default MemberCard;