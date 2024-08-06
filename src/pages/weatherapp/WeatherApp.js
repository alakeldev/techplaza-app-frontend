import React, { useState, Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from '../../styles/WeatherApp.module.css';

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt_token = localStorage.getItem('access');

  useEffect(() => {
    if (jwt_token === null && !user) {
      navigate("/login");
    }
  }, [jwt_token, user, navigate]);

  const toGetWeather = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      const cityRegex = /^[a-zA-Z\s]+$/;
      if (!cityRegex.test(city)) {
        setError('Invalid city name. Please enter letters only.');
        setWeather({});
        return;
      }

      fetch(`http://127.0.0.1:8000/api/app1/weather?city=${city}`)
        .then(res => {
          if (!res.ok) {
            throw new Error('Invalid city name. Please enter a valid city.');
          }
          return res.json();
        })
        .then(result => {
          if (result.cod === '404') {
            throw new Error('City not found. Please enter a valid city name.');
          }
          setWeather(result);
          setCity('');
          setError('');
        })
        .catch(error => {
          setError(error.message);
          setWeather({});
        })
    }
  }
  return (
    <Fragment>
      <NavBar />
      <div className={styles.Main}>
        <div className={styles.Container}>
          <h2>Weather Application</h2>
          <input
            type='text'
            placeholder='Search by City or Country...'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={toGetWeather}
          />
          <button onClick={toGetWeather}>Search</button>
          {error && <div className={styles.Error}>{error}</div>}
          <div className={styles.WeatherDetails}>
            <div className={styles.CityLocation}>
              {weather.name} {weather.sys && weather.sys.country}
            </div>
            <div className={styles.Temp}>
              {weather.main?.temp ? `${Math.round(weather.main.temp)}°C` : ''}
            </div>
            <div className={styles.Weather}>
              {weather.weather && weather.weather[0] && weather.weather[0].main}
            </div>
            <div className={styles.Wind}>
              {weather.wind?.speed ? `${weather.wind.speed} m/s` : ''}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default WeatherApp;