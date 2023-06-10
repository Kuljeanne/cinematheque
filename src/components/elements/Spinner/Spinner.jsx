import { ImSpinner } from 'react-icons/im'

import styles from './Spinner.module.scss'

const Spinner = () => {
  return (
    <div className={styles.container}>
      <div>
        <ImSpinner className={styles.spinner} />
        <p className={styles.text}>Loading...</p>
      </div>
    </div>
  )
}

export default Spinner
