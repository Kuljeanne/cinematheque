import { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md'

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
      <MdArrowDropDown size={'2.5rem'} />
      {isMenuOpen && <Menu />}
    </div>
  )
}

export default User
