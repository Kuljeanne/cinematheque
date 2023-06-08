import { useSelector } from 'react-redux'

import MovieCard from '../../ui/MovieCard/MovieCard'
import styles from './Favourites.module.scss'

const Favorites = () => {
  const { favourites } = useSelector((state) => state.auth)
  return (
    <div>
      <h2 className={styles.title}>Favourites</h2>
      <div className={styles.container}>
        {favourites.map((fav) => (
          <MovieCard key={fav.id} id={fav.id} img={fav.img} title={fav.title} crew={fav.crew} />
        ))}
      </div>
    </div>
  )
}

export default Favorites
