import Logo from '../../ui/Logo/Logo'
import User from '../../ui/User/User'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <User />
    </div>
  )
}

export default Header