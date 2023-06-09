import PropTypes from 'prop-types'
import { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addHistory } from '../../../store/userSlice/userSlice'
import styles from './Search.module.scss'

const Search = ({ value = '' }) => {
  const navigate = useNavigate()
  const [searchExp, setSearchExp] = useState(value)

  const dispatch = useDispatch()

  const handleSearch = () => {
    navigate(`/search/${searchExp}`)
    setSearchExp(searchExp)
    const date = new Date().toLocaleString()
    dispatch(addHistory({ exp: searchExp, date }))
  }

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <label htmlFor="search-input">
          <GoSearch size={'2rem'} />
        </label>
        <input
          className={styles.input}
          type="text"
          name="search-movie"
          id="search-input"
          placeholder="Search movie..."
          value={searchExp}
          onChange={(e) => setSearchExp(e.target.value)}
        />
        <button className={styles.btn} onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  )
}

Search.propTypes = {
  value: PropTypes.string
}
export default Search
