import './WeatherApp.css';
import sunny from '../assets/images/sunny.png'
import cloudy from '../assets/images/cloudy.png'
import rainy from '../assets/images/rainy.png'
import snowy from '../assets/images/snowy.png'
import { useState } from 'react';

function WeatherApp() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState() 

  const handleInputChange = (e) => {
    setLocation(e.target.value)
  }

  const search = async (e) => {
    if(location.length) {
      const cityInfo =  await convertCityNameToLatLon()
      setLocation('')
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${cityInfo.lat}&lon=${cityInfo.lon}&units=Metric&appid=${process.env.REACT_APP_API_KEY}`
      const res = await fetch(url)
      const cityData = await res.json()
      setData(cityData)
      console.log(data)
    }  
  }

  const convertCityNameToLatLon = async () => {
    const req = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${process.env.REACT_APP_API_KEY}`)
    const res = await req.json()
    return res[0]
  }

  return (
    <div className="App">
      <div className="weather-app">
        <div className="search">
          <div className="search-top">
            <i className='fa-solid fa-location-dot'></i>
            <h1 className="location">{data ? data.name : null}</h1>
          </div>
          <div className='search-bar'>
            <input type="text" placeholder="Enter Location" value={location} onChange={handleInputChange}/>
            <i className='fa-solid fa-magnifying-glass' onClick={search}></i>
          </div>
        </div>
        <div className="weather">
          <img src={sunny} alt="Sunny" />
          <h2 className="weather-type">{data ? data.weather.main : null}</h2>
          <div className="temp">{data ? Math.round(data.main.temp) : null}°</div>
        </div>
        <div className="weather-date">
          <p>Fri, 3 May</p>
        </div>
        <div className="weather-data">
          <div className="humidity">
            <div className="data-name">Humidity</div>
            <i className="fa-solid fa-droplet"></i>
            <div className="data">{data ? data.main.humidity : null}%</div>
          </div>
          <div className="wind">
            <div className="data-name">Wind</div>
            <i className="fa-solid fa-wind"></i>
            <div className="data">{data ? Math.round(data.wind.speed) : null} km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
