import cn from 'classnames'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { useTelegramContext } from '../../../context/useTelegramContext'
import { removeUser } from '../../../store/userSlice/userSlice'
import styles from './Menu.module.scss'

const Menu = () => {
  const { feature, toggleFeature } = useTelegramContext()
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
        <li className={styles.tel}>
          <p>Telegram Share: {feature ? 'on' : 'off'}</p>
          <label className={styles.switch}>
            <input type="checkbox" onChange={toggleFeature} />
            <span className={cn(styles.slider, styles.round)}></span>
          </label>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
