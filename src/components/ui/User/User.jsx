import { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Menu from '../Menu/Menu'
import styles from './User.module.scss'

const User = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { status, login } = useSelector((state) => state.auth)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {status === 'auth' && (
        <div className={styles.user} onClick={toggleMenu}>
          <p className={styles.username}>{login}</p>
          <div className={styles.img}></div>
          <MdArrowDropDown size={'2.5rem'} />
          {isMenuOpen && <Menu />}
        </div>
      )}
      {(!status || status === 'out') && (
        <div className={styles.sign_btn}>
          <Link to="/login">LOG IN</Link>
          <Link to="/signup">SIGN UP</Link>
        </div>
      )}
    </>
  )
}

export default User
