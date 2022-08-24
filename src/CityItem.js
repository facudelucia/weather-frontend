import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from './store/slices/searchSlice'

const CityItem = ({ city }) => {

    const dispatch = useDispatch()

    const onSelectCity = (city) => {
        dispatch(setSearch(city))
    }

    return (
        <div className="button-city" onClick={() => onSelectCity(city)} >
            {city}
        </div>
    )
}

export default CityItem