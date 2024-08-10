import React from 'react';
import styles from '../styles/SnakeGameHighScores.module.css';

const SnakeGameHighScores = ({ highScores }) => {
  return (
    <div className={styles.highScores}>
      <h3 className={styles.heading}>Top Scores</h3>
      <ul className={styles.list}>
        {highScores.map(score => (
          <li key={score.id} className={styles.listItem}>
            {score.user.full_name || score.user.email}: {score.score}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SnakeGameHighScores