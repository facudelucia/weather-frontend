import axios from "axios"

export const getLocation = async () => {
    try {
        const { data } = await axios.get(`https://ipapi.co/json`)
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
            let lat = location.latitude
            let lon = location.longitude
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
            let lat = location.latitude
            let lon = location.longitude
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=cbfe5948ab4fd2408b685f0c50e2c61c`)
            return data
        }
    } catch (error) {
        return error.response
    }
} 