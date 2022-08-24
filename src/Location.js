import React from 'react'
import { dateBuilder } from './utils'

const Location = ({ location }) => {
    return (
        <div className="location-box">
            <div className="location">{location}</div>
            <div className="date">{dateBuilder()}</div>
        </div>
    )
}

export default Location