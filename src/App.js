import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getForecast, getLocation, getWeather } from './api';
import CityItem from './CityItem';
import ForecastItem from './ForecastItem';
import Location from './Location';
import Search from './Search';
import { cities } from './utils';
import Weather from './Weather';


function App() {

  const searchState = useSelector(state => state.search.search)

  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState([])

  useEffect(() => {
    const fetchLocation = async () => {
      const resp = await getLocation()
      if (resp.status === 'success') {
        setLocation(resp?.city)
      }
    }
    fetchLocation()
  }, [])

  useEffect(() => {
    const fetchWeather = async () => {
      const resp = await getWeather(searchState)
      if (resp?.cod === 200) {
        setWeather(resp)
        if (searchState) {
          setLocation(resp?.name)
        }
      }
    }
    fetchWeather()
  }, [searchState])

  useEffect(() => {
    const fetchForecast = async () => {
      const resp = await getForecast(searchState)
      if (resp?.cod === "200") {
        const forecastArr = resp?.list.filter((value, index, self) =>
          index === self.findIndex((t) => (
            t.dt_txt.slice(0, 10) === value.dt_txt.slice(0, 10)
          ))
        )
        setForecast(forecastArr)
      }
    }
    fetchForecast()
  }, [searchState])

  return (
    <div id="app">
      <main>

        <Search />

        {
          location && <Location location={location} />
        }

        {
          weather && <Weather weather={weather} />
        }

        <h2>Forecast: </h2>
        <div className='forecast'>
          {
            forecast.length > 0 &&
            forecast.map((item, index) => (
              <ForecastItem key={index} item={item} />
            ))
          }
        </div>
        <h2>Other cities: </h2>
        <div className='cities'>
          {
            cities.map((city, index) => (
              <CityItem key={index} city={city} />
            ))
          }
        </div>
      </main>
    </div>
  );
}

export default App;
