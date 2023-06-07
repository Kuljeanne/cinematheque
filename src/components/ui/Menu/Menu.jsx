import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './Menu.module.scss'
import { removeUser } from '../../../store/authSlice/authSlice'

const Menu = () => {
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(removeUser())
  }

  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="favourites">Favorites</Link>
        </li>
        <li className={styles.item}>
          <Link to="history">History</Link>
        </li>
        <li className={styles.item} onClick={logOut}>
          <span>Log out</span>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
