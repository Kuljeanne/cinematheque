import { GoSearch } from 'react-icons/go'

import styles from './Search.module.scss'

const Search = () => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <label htmlFor="search-input">
          <GoSearch size={'2rem'}/>
        </label>
        <input
          className={styles.input}
          type="search"
          name="search-movie"
          id="search-input"
          placeholder="Search..."
        />
      </div>
    </div>
  )
}

export default Search
