import React, { useState, Fragment } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from '../../styles/WeatherApp.module.css';

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const apiKey = '1fb0e0f6964d49c9eebe77c11137bb6c'
  const [weather, setWeather] = useState({});

  const toGetWeather = (e) => {
    if (e.key === 'Enter') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setCity('')
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
            placeholder='Search by City...'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={toGetWeather}
          />
          <button onClick={toGetWeather}>Search</button>
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

export default WeatherApp