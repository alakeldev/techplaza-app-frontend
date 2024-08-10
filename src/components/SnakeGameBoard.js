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
  const [gameStarted, setGameStarted] = useState(false);

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

  useEffect(() => {
    const moveSnake = () => {
      const newSnake = [...snake];
      let head = { ...newSnake[0] };

      switch (direction) {
        case 'UP':
          head.y -= 1;
          break;
        case 'DOWN':
          head.y += 1;
          break;
        case 'LEFT':
          head.x -= 1;
          break;
        case 'RIGHT':
          head.x += 1;
          break;
        default:
          break;
      }

      if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20 || newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        return;
      }

      newSnake.unshift(head);
      if (head.x === food.x && head.y === food.y) {
        setFood({ x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) });
        setScore(score + 1);
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    };

    if (!gameOver && gameStarted) {
      const interval = setInterval(moveSnake, 200);
      return () => clearInterval(interval);
    }
  }, [snake, direction, food, score, gameOver, gameStarted]);

  useEffect(() => {
    axiosInstance.get('game1/high_scores/')
      .then(response => {
        const sortedScores = response.data.sort((a, b) => b.score - a.score);
        setHighScores(sortedScores.slice(0, 5));
      })
      .catch(error => console.error('Error fetching high scores:', error));
  }, []);

  useEffect(() => {
    if (gameOver && score > 0) {
      const lowestHighScore = highScores[highScores.length - 1]?.score || 0;
      if (score > lowestHighScore) {
        axiosInstance.post('game1/high_scores/', {
          user: {
            email: user.email,
            full_name: user.full_name
          },
          score
        })
          .then(response => {
            const sortedScores = [...highScores, response.data].sort((a, b) => b.score - a.score);
            setHighScores(sortedScores.slice(0, 5));
          })
          .catch(error => console.error('Error saving score:', error));
      }
    }
  }, [gameOver, score, highScores, user]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 15, y: 15 });
    setDirection('RIGHT');
    setScore(0);
  };

  const restartGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 15, y: 15 });
    setDirection('RIGHT');
    setScore(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.gameBoard}>
        {snake.map((segment, index) => (
          <div key={index} className={styles.snakeSegment} style={{ left: `${segment.x * 20}px`, top: `${segment.y * 20}px` }}></div>
        ))}
        <div className={styles.food} style={{ left: `${food.x * 20}px`, top: `${food.y * 20}px` }}></div>
      </div>
      <div className={styles.highScoresContainer}>
        <SnakeGameHighScores highScores={highScores} />
      </div>
      <div className={styles.buttons}>
        <button onClick={startGame}>Start</button>
        <button onClick={restartGame}>Restart</button>
      </div>
    </div>
  )
}

export default SnakeGameBoard;
