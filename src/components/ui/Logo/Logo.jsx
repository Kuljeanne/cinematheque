import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './Logo.module.scss'

const Logo = ({ link }) => {
  return (
    <Link to={link} className={styles.logo}>
      Cinematheque
    </Link>
  )
}

Logo.propTypes = {
  link: PropTypes.string.isRequired
}

export default Logo
