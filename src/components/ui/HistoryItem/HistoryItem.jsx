import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './HistoryItem.module.scss'

const HistoryItem = ({ exp, date }) => {
  return <Link to={`/search/${exp}`} className={styles.item}> Search: {exp}...<span>{date}</span></Link>
}
HistoryItem.propTypes = {
  exp: PropTypes.string.isRequired,
  date: PropTypes.string

}
export default HistoryItem
