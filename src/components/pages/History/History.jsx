import { useSelector } from 'react-redux'

import HistoryItem from '../../ui/HistoryItem/HistoryItem'
import styles from './History.module.scss'

const History = () => {
  const { history } = useSelector((state) => state.user)

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>History</h2>
      <ul className={styles.history}>
        {history.map((search, i) => (
          <li key={i} className={styles.item}>
            <HistoryItem exp={search.exp} date={search.date} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default History
