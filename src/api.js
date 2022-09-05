import axios from "axios"

const BASE_URL = 'https://weather-facu.herokuapp.com/v1'

export const getLocation = async () => {
    try {
        const { data } = await axios.get(`http://ip-api.com/json`)
        return data
    } catch (error) {
        return error.response
    }
}

export const getWeather = async (city) => {
    try {
        if (city) {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cbfe5948ab4fd2408b685f0c50e2c61c`)
            return data
        } else {
            const location = await getLocation()
            let lat = location.lat
            let lon = location.lon
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=cbfe5948ab4fd2408b685f0c50e2c61c`)
            return data
        }
    } catch (error) {
        return error.response
    }
}

export const getForecast = async (city) => {
    try {
        if (city) {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=cbfe5948ab4fd2408b685f0c50e2c61c`)
            return data
        } else {
            const location = await getLocation()
            let lat = location.lat
            let lon = location.lon
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=cbfe5948ab4fd2408b685f0c50e2c61c`)
            return data
        }
    } catch (error) {
        return error.response
    }
} 