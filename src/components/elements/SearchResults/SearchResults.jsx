import { useParams } from 'react-router-dom'

import { useSearchMovieQuery } from '../../../store/api/api'
import MovieCard from '../../ui/MovieCard/MovieCard'
import styles from './SearchResults.module.scss'

const SearchResults = () => {
  const params = useParams()
  const exp = params.exp

  const { data, isLoading, isSuccess, isError, error } = useSearchMovieQuery(exp)
  let content

  if (isLoading) {
    content = <div className={styles.loading}>Loading...</div>
  } else if (isSuccess) {
    const movies = data
    content = movies.map((movie) => (
      <MovieCard key={movie.id} id={movie.id} img={movie.image} title={movie.title} />
    ))
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }
  return <div className={styles.container}>{content}</div>
}

export default SearchResults
