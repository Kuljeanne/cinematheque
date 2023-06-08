import { useParams } from 'react-router-dom'

import { useGetMovieInfoQuery } from '../../../store/api/api'
import styles from './MoviesInfo.module.scss'

const MovieInfo = () => {
  const params = useParams()
  const id = params.id
  const { data, isLoading, isSuccess, isError, error } = useGetMovieInfoQuery(id)

  let content

  if (isLoading) {
    content = <div>Loading...</div>
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
          <button className={styles.like}>Add to fav</button>
        </div>
      </div>
    )
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }
  return <div>{content}</div>
}

export default MovieInfo
