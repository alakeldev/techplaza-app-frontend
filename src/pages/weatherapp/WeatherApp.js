import React, {useState} from 'react';
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
    <div></div>
  )
}

export default WeatherApp