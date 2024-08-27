import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';
import styles from '../styles/SnakeGameBoard.module.css';

const SnakeGameBoard = ({ highScores, setHighScores }) => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState('RIGHT');
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [boardSize, setBoardSize] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setBoardSize(10);
      } else if (window.innerWidth <= 768) {
        setBoardSize(15);
      } else {
        setBoardSize(20);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      e.preventDefault();
      switch (e.key) {
        case 'w':
          setDirection('UP');
          break;
        case 's':
          setDirection('DOWN');
          break;
        case 'a':
          setDirection('LEFT');
          break;
        case 'd':
          setDirection('RIGHT');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const generateFood = () => {
    let newFood;
    do {
      newFood = { x: Math.floor(Math.random() * boardSize), y: Math.floor(Math.random() * boardSize) };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  };

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

      if (head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize || newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        return;
      }

      newSnake.unshift(head);
      if (head.x === food.x && head.y === food.y) {
        setFood(generateFood());
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
  }, [snake, direction, food, score, gameOver, gameStarted, boardSize]);

  useEffect(() => {
    if (gameOver && score > 0) {
      const lowestHighScore = highScores[highScores.length - 1]?.score || 0;
      if (score > lowestHighScore) {
        axiosInstance.post('/game1/high_scores/', {
          score
        })
          .then(response => {
            const sortedScores = [...highScores, response.data].sort((a, b) => b.score - a.score);
            setHighScores(sortedScores.slice(0, 1));
          })
          .catch(() => toast.error('Error saving score. Please try again later.'));
      }
    }
  }, [gameOver, score, highScores, setHighScores]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood());
    setDirection('RIGHT');
    setScore(0);
  };

  const restartGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood());
    setDirection('RIGHT');
    setScore(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.score}>Score: {score}</div>
      <div className={styles.gameBoard}>
        {snake.map((segment, index) => (
          <div key={index} className={styles.snakeSegment} style={{ left: `${segment.x * (400 / boardSize)}px`, top: `${segment.y * (400 / boardSize)}px` }}></div>
        ))}
        <div className={styles.food} style={{ left: `${food.x * (400 / boardSize)}px`, top: `${food.y * (400 / boardSize)}px` }}></div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={startGame}>Start</button>
        <button className={styles.button} onClick={restartGame}>Restart</button>
      </div>
    </div>
  );
};

SnakeGameBoard.propTypes = {
  highScores: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number.isRequired,
  })).isRequired,
  setHighScores: PropTypes.func.isRequired,
};

export default SnakeGameBoard;
