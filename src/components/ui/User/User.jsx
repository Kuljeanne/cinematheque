import 'boxicons'
import { useState } from 'react'

import Menu from '../Menu/Menu'
import styles from './User.module.scss'

const User = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className={styles.user} onClick={toggleMenu}>
      <div className={styles.img}></div>
      <box-icon name="caret-down" animation="tada-hover" color="#ffffff"></box-icon>
      {isMenuOpen && <Menu />}
    </div>
  )
}

export default User
