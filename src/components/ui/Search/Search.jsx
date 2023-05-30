import styles from './Search.module.scss'
import 'boxicons'

const Search = () => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <label htmlFor="search-input"><box-icon name='search-alt' color='#ffffff' ></box-icon></label>
        <input className={styles.input} type="text" name="search-movie" id="search-input" placeholder='Search...' />
      </div>
    </div>

  )
}

export default Search