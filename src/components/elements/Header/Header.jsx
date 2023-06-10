import { Link } from 'react-router-dom'
import Logo from '../../ui/Logo/Logo'
import User from '../../ui/User/User'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo link="/" />
      <Link  className={styles.link} to={'/Top250Movies'}>Top 250 Movies</Link>
      <User />
    </div>
  )
}

export default Header
