import React from 'react'
import { formatDate } from './utils'

const ForecastItem = ({ item }) => {
    return (
        <div className='forecast-item'>
            <div className='forecast-item-date'>{formatDate(item.dt_txt.slice(0, 10))}</div>
            <div className='forecast-item-temp'>{Math.round(item.main.temp)} °c</div>
            <div className='forecast-item-weather'>{item.weather[0].main}</div>
        </div>
    )
}

export default ForecastItem