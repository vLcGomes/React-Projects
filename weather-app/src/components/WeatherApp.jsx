import './WeatherApp.css';
import sunny from '../assets/images/sunny.png'
import cloudy from '../assets/images/cloudy.png'
import rainy from '../assets/images/rainy.png'
import snowy from '../assets/images/snowy.png'
import loadingGif from '../assets/images/loading.gif'
import { useState, useEffect } from 'react';

function WeatherApp() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState() 
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchDefaultWeather = async () => {
      setLoading(true)
      const defaultLat = 51.5073219
      const defaultLon = -0.1276474
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${defaultLat}&lon=${defaultLon}&units=Metric&appid=${process.env.REACT_APP_API_KEY}`
      const res = await fetch(url)
      const defaultData = await res.json()
      setData(defaultData)
      setLoading(false)
    }

    fetchDefaultWeather()
  }, [])

  const handleInputChange = (e) => {
    setLocation(e.target.value)
  }

  const search = async (e) => {
    if(location.trim() !== "") {
      const cityInfo = await convertCityNameToLatLon()
      console.log(cityInfo)
      if(cityInfo) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${cityInfo.lat}&lon=${cityInfo.lon}&units=Metric&appid=${process.env.REACT_APP_API_KEY}`
        const res = await fetch(url)
        const cityData = await res.json()
        setData(cityData)
        setLocation('')
      } else {
        setData({notFound: true})
      }
      setLoading(false)
    }  
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      search()
    }
  }

  const convertCityNameToLatLon = async () => {
    const req = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${process.env.REACT_APP_API_KEY}`)
    const res = await req.json()
    console.log(res[0])
    return res[0]
  }

  const weatherImages = {
    Clear: sunny,
    Clouds: cloudy,
    Rain: rainy,
    Snow: snowy,
    Haze: cloudy,
    Mist: cloudy
  }

  const weatherImage = data.weather ? weatherImages[data.weather[0].main] : null

  const backgroundImages = {
    Clear: 'linear-gradient(to right, #f3b07c, #fcd283)',
    Clouds: 'linear-gradient(to right, #57d6d4, #71eeec)',
    Rain: 'linear-gradient(to right, #5bc8fb, #80eaff)',
    Snow: 'linear-gradient(to right, #aff2ff, #fff)',
    Haze: 'linear-gradient(to right, #57d6d4, #71eeec)',
    Mist: 'linear-gradient(to right, #57d6d4, #71eeec)',
  }

  const backgroundImage = data.weather ? backgroundImages[data.weather[0].main] : 'linear-gradient(to right, #f3b07c, #fcd283)'

  const currentDate = new Date()

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sep', 'Oct', 'Nov', 'Dec']

  const dayOfWeek = daysOfWeek[currentDate.getDay()]
  const month = months[currentDate.getMonth()]
  const dayOfMonth = currentDate.getDate()

  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`

  return (
    <div className="App" style={{backgroundImage}}>
      <div className="weather-app" style={
        { backgroundImage: backgroundImage && backgroundImage.replace ?    
          backgroundImage.replace('to right', 'to top') :
          null
        }}>
        <div className="search">
          <div className="search-top">
            <i className='fa-solid fa-location-dot'></i>
            <h1 className="location">{data ? data.name : null}</h1>
          </div>
          <div className='search-bar'>
            <input 
              type="text" 
              placeholder="Enter Location"  
              value={location} 
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <i className='fa-solid fa-magnifying-glass' onClick={search}></i>
          </div>
        </div>
        { loading ? (
          <img className='loader' src={loadingGif} alt='loading' />
        ) : data.notFound ? (
          <div className='not-found'>Not Found 😒</div>
        ) : (
          <>
            <div className="weather">
              <img src={weatherImage} alt="Sunny" />
              <h2 className="weather-type">{data.weather ? data.weather[0].main : null}</h2>
              <div className="temp">{data.main ? `${Math.round(data.main.temp)}°` : null}</div>
            </div>
            <div className="weather-date">
              <p>{formattedDate}</p>
            </div>
            <div className="weather-data">
              <div className="humidity">
                <div className="data-name">Humidity</div>
                <i className="fa-solid fa-droplet"></i>
                <div className="data">{data.main ? `${data.main.humidity}%` : null}</div>
              </div>
              <div className="wind">
                <div className="data-name">Wind</div>
                <i className="fa-solid fa-wind"></i>
                <div className="data">{data.wind ? `${Math.round(data.wind.speed)} km/h` : null}</div>
              </div>
            </div>
          </>
        )}
        
      </div>
    </div>
  );
}

export default WeatherApp;
