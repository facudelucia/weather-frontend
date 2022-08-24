import axios from "axios"

const BASE_URL = 'https://weather-facu.herokuapp.com/v1'

export const getLocation = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/location`)
        return data?.data?.city
    } catch (error) {
        return error
    }
}

export const getWeather = async (city) => {
    try {
        if (city) {
            const { data } = await axios.get(`${BASE_URL}/current/${city}`)
            return data?.data
        } else {
            const { data } = await axios.get(`${BASE_URL}/current`)
            return data?.data
        }
    } catch (error) {
        return error
    }
}

export const getForecast = async (city) => {
    try {
        if (city) {
            const { data } = await axios.get(`${BASE_URL}/forecast/${city}`)
            const forecastArr = data.data.list.filter((value, index, self) =>
                index === self.findIndex((t) => (
                    t.dt_txt.slice(0, 10) === value.dt_txt.slice(0, 10)
                ))
            )
            return forecastArr
        } else {
            const { data } = await axios.get(`${BASE_URL}/forecast`)
            const forecastArr = data.data.list.filter((value, index, self) =>
                index === self.findIndex((t) => (
                    t.dt_txt.slice(0, 10) === value.dt_txt.slice(0, 10)
                ))
            )
            return forecastArr
        }
    } catch (error) {
        return error
    }
}