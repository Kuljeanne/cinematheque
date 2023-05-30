import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        <li className={styles.item}><Link to="favourites">Favorites</Link></li>
        <li className={styles.item}><Link to="history">History</Link></li>
        <li className={styles.item}><Link to="login" >Log out</Link></li>
      </ul>
    </nav>
  )
}

export default Menu