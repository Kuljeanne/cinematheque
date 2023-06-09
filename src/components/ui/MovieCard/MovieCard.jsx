import PropTypes from 'prop-types'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { toggleFavourite } from '../../../store/userSlice/userSlice'
import styles from './MovieCard.module.scss'

const MovieCard = ({ id, img, title, crew }) => {
  const dispatch = useDispatch()
  const { favourites } = useSelector((state) => state.user)

  const toggleLike = () => {
    dispatch(toggleFavourite({ id, img, title, crew }))
  }

  const isFavourite = () => {
    return favourites.some((fav) => fav.id === id)
  }

  return (
    <div className={styles.card}>
      <div className={styles.like}>
        <BsFillSuitHeartFill color={isFavourite() ? 'f00' : 'fff'} onClick={toggleLike} />
      </div>
      <Link className={styles.link} to={`/movie/${id}`}>
        <div className={styles.img} style={{ backgroundImage: `url(${img})` }}></div>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.crew}>{crew}</p>
      </Link>
    </div>
  )
}

MovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  crew: PropTypes.string
}

export default MovieCard
