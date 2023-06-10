import { FaTelegram } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { useTelegramContext } from '../../../context/useTelegramContext'
import { useGetMovieInfoQuery } from '../../../store/api/api'
import { toggleFavourite } from '../../../store/userSlice/userSlice'
import styles from './MoviesInfo.module.scss'

const MovieInfo = () => {
  const { feature } = useTelegramContext()

  const params = useParams()
  const id = params.id
  const { data, isLoading, isSuccess, isError } = useGetMovieInfoQuery(id)

  const dispatch = useDispatch()
  const toggleLike = () => {
    const { id, image, title, crew } = data
    dispatch(toggleFavourite({ id, img: image, title, crew }))
  }

  const { favourites } = useSelector((state) => state.user)

  const isFavourite = () => {
    return favourites.some((fav) => fav.id === data.id)
  }

  let content

  if (isLoading) {
    content = <div className={styles.loading}>Loading...</div>
  } else if (isSuccess) {
    content = (
      <div className={styles.wrapper}>
        <img className={styles.img} src={data.image} />
        <div className={styles.info}>
          <h3 className={styles.title}>{data.title}</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              Genres: <span>{data.genres}</span>
            </li>
            <li className={styles.item}>
              Content Raiting: <span>{data.contentRating}</span>
            </li>
            <li className={styles.item}>
              ImDb: <span>{data.imDbRating}</span>
            </li>

            <li className={styles.item}>
              Year: <span>{data.year}</span>
            </li>
            <li className={styles.item}>
              Countries: <span>{data.countries}</span>
            </li>
            <li className={styles.item}>
              Director: <span>{data.directors}</span>
            </li>
            <li className={styles.item}>
              Awards: <span>{data.awards}</span>
            </li>
            <li className={styles.item}>
              Plot: <span>{data.plot}</span>
            </li>
            <li className={styles.item}>
              Budget: <span>{data.boxOffice.budget}</span>
            </li>
            <li className={styles.item}>
              WorldwideGross: <span>{data.boxOffice.cumulativeWorldwideGross}</span>
            </li>
            <li className={styles.item}>
              Runtime: <span>{data.runtimeStr}</span>
            </li>
            <li className={styles.item}>
              Stars: <span>{data.stars}</span>
            </li>
          </ul>
          <button className={styles.like} onClick={toggleLike}>
            {isFavourite() ? 'Remove from fav' : 'Add to fav'} ❤️
          </button>
          {feature && (
            <a
              href={`https://t.me/share/url?url=http://localhost:3000/movie/${id}`}
              target="_blank"
              className={styles.share}
              rel="noreferrer">
              Share <FaTelegram />
            </a>
          )}
        </div>
      </div>
    )
  } else if (isError) {
    content = <div className={styles.error}>Something went wrong, please try again </div>
  }
  return <div className={styles.content}>{content}</div>
}

export default MovieInfo
