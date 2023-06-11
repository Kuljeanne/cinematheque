import { GoSearch } from 'react-icons/go'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { useSearch } from '../../../hooks/useSearch'
import { addHistory } from '../../../store/userSlice/userSlice'
import styles from './Search.module.scss'

const Search = () => {
  const navigate = useNavigate()
  const params = useParams()
  const exp = params.exp
  const { data, handleInput, isSuccess, isLoading, searchValue } = useSearch(exp)
  const dispatch = useDispatch()

  const handleSearch = (search) => {
    navigate(`/search/${search}`)
    const date = new Date().toLocaleString()
    dispatch(addHistory({ exp: search, date }))
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
          value={searchValue}
          onChange={handleInput}
        />

        {isSuccess && (
          <ul className={styles.results}>
            {data?.length ? (
              data.map((res, i) => (
                <li
                  key={i}
                  onClick={() => {
                    handleSearch(res.title)
                  }}>
                  <Link to={`/movie/${res.id}`}>{res.title}</Link>
                </li>
              ))
            ) : (
              <li>Not Found</li>
            )}
          </ul>
        )}
        {isLoading && <p className={styles.results}>Loading...</p>}

        <button className={styles.btn} onClick={() => handleSearch(searchValue)}>
          Search
        </button>
      </div>
    </div>
  )
}

export default Search
