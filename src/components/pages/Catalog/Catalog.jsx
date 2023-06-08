import { useGetMoviesQuery } from '../../../store/api/api'
import MovieCard from '../../ui/MovieCard/MovieCard'
import styles from './Catalog.module.scss'

const Catalog = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetMoviesQuery()

  let content

  if (isLoading) {
    content = <div>Loading...</div>
  } else if (isSuccess) {
    content = data.items.map((movie) => (
      <MovieCard
        key={movie.id}
        id={movie.id}
        img={movie.image}
        title={movie.fullTitle}
        crew={movie.crew}
      />
    ))
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }
  return <div className={styles.movies}>{content}</div>
}

export default Catalog
