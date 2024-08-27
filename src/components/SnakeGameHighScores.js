import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/SnakeGameHighScores.module.css';

const SnakeGameHighScores = ({ highScores = [] }) => {
  return (
    <div className={styles.highScores}>
      <h3 className={styles.heading}>MVP in Our Community</h3>
      <ul className={styles.list}>
        {highScores.map(score => (
          <li key={score.id} className={styles.listItem}>
            {score.user.full_name || score.user.email}: {score.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

SnakeGameHighScores.propTypes = {
  highScores: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      full_name: PropTypes.string,
      email: PropTypes.string.isRequired,
    }).isRequired,
    score: PropTypes.number.isRequired,
  })).isRequired,
};

export default SnakeGameHighScores;
