import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from './store/slices/searchSlice'

const Search = () => {
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    search: ''
  })

  const { search } = form

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (search !== '') {
      dispatch(setSearch(search))
    }
  }

  return (
    <form data-testid="form" onSubmit={onSubmit}>
      <div className='search-box'>
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          id="search"
          name="search"
          value={search}
          onChange={onChange}
        />
      </div>
    </form>
  )
}

export default Search