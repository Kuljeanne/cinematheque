import { FaRegSadTear } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2 className={styles.title}>
          OOOPS...
          <FaRegSadTear />
        </h2>
        <p className={styles.text}>PAGE NOT FOUND</p>
        <p className={styles.text}>
          You can go back to <Link to={'/'}>main page</Link>
        </p>
      </div>
      <div className={styles.img}></div>
    </div>
  )
}

export default NotFound
