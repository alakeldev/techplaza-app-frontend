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
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=mertic`)
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
      <div className={styles.main}>
        <div className={styles.container}>
          <h2>Weather Application</h2>
          <input
            type='text'
            placeholder='Search by City...'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={toGetWeather}>Search</button>
        </div>
      </div>
      <Footer />
    </Fragment>

  )
}

export default WeatherApp