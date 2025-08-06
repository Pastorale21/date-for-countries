import { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${apiKey}`

        axios.get(url).then(response => {
            setWeather(response.data)
        }).catch(error => {
            console.error('Error fetching weather:', error)
        })
    }, [capital])

    if (!weather) {
        return <p>Loading weather...</p>
    }

    const iconCode = weather.weather[0].icon
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
    console.log('iconCode:', iconCode)
    console.log('iconUrl:', iconUrl)

    return (
        <div>
            <h3>Weather in {capital}</h3>
            <p>Temperature {weather.main.temp} Celsius</p>
            <img src={iconUrl} alt={weather.weather[0].description} />
            <p>Wind {weather.wind.speed} m/s</p>
        </div>
    )
}

export default Weather