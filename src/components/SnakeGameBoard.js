import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import SnakeGameHighScores from './SnakeGameHighScores';
import styles from '../styles/SnakeGameBoard.module.css';

const SnakeGameBoard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState('RIGHT');
  const [score, setScore] = useState(0);
  const [highScores, setHighScores] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection('UP');
          break;
        case 'ArrowDown':
          setDirection('DOWN');
          break;
        case 'ArrowLeft':
          setDirection('LEFT');
          break;
        case 'ArrowRight':
          setDirection('RIGHT');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div>SnakeGameBoard</div>
  )
}

export default SnakeGameBoard