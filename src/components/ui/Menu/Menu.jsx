import styles from './Menu.module.scss'

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        <li className={styles.item}><a href="/">Favorites</a></li>
        <li className={styles.item}><a href="/">History</a></li>
        <li className={styles.item}><a href="/" >Log out</a></li>
      </ul>
    </nav>
  )
}

export default Menu