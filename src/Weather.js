import React from 'react'

const Weather = ({ weather }) => {
    return (
        <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp)} °c</div>
            <div className="weather">{weather.weather[0].main}</div>
        </div>
    )
}

export default Weather