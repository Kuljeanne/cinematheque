import Banner from '../../ui/Banner/Banner'
import Search from '../../ui/Search/Search'
import styles from './Main.module.scss'

const Main  = () => {
  return (
    <div className={styles.main}>
    <Search/>
    <Banner/>
    </div>
  )
}

export default Main