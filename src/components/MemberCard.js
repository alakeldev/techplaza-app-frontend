import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import styles from '../styles/MemberCard.module.css';

const MemberCard = ({ member, isOwner, onEdit, onDelete }) => {
  const capitalizeWords = (text) => {
    return text.replace(/\b\w/g, char => char.toUpperCase());
  };

  return (
    <Card className={styles.memberCard}>
      <Card.Body>
        <Card.Title className={styles.cardTitle}>{capitalizeWords(member.name)}</Card.Title>
        <Card.Text className={styles.cardText}>
          <strong>Email:</strong> {member.email}<br />
          <strong>Phone:</strong> {member.phone_number}<br />
          <strong>Profession:</strong> {capitalizeWords(member.profession)}<br />
          <strong>Description:</strong> {capitalizeWords(member.description)}<br />
          <strong>Country:</strong> {capitalizeWords(member.country)}
        </Card.Text>
        {isOwner && (
          <div className={styles.buttonGroup}>
            <Button variant="primary" className={styles.button} onClick={onEdit}>Edit</Button>
            <Button variant="danger" className={styles.button} onClick={onDelete}>Delete</Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

MemberCard.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone_number: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  isOwner: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MemberCard;
