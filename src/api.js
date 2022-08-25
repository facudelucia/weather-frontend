import axios from "axios"

const BASE_URL = 'https://weather-facu.herokuapp.com/v1'

export const getLocation = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/location`)
        return data
    } catch (error) {
        return error.response
    }
}

export const getWeather = async (city) => {
    try {
        if (city) {
            const { data } = await axios.get(`${BASE_URL}/current/${city}`)
            return data
        } else {
            const { data } = await axios.get(`${BASE_URL}/current`)
            return data
        }
    } catch (error) {
        return error.response
    }
}

export const getForecast = async (city) => {
    try {
        if (city) {
            const { data } = await axios.get(`${BASE_URL}/forecast/${city}`)
            return data
        } else {
            const { data } = await axios.get(`${BASE_URL}/forecast`)
            return data
        }
    } catch (error) {
        return error.response
    }
}