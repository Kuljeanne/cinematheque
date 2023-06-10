import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

import { useGetMoviesQuery } from '../../../store/api/api'
import MovieCard from '../../ui/MovieCard/MovieCard'
import styles from './PaginatedMovies.module.scss'

const PaginatedIMovies = ({ itemsPerPage }) => {
  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  const { data, isLoading, isSuccess, isError } = useGetMoviesQuery()

  useEffect(() => {
    if (isSuccess) {
      const endOffset = itemOffset + itemsPerPage
      setCurrentItems(data.slice(itemOffset, endOffset))
      setPageCount(Math.ceil(data.length / itemsPerPage))
    }
  }, [data, isSuccess, itemOffset, itemsPerPage])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length
    setItemOffset(newOffset)
  }

  return (
    <>
      {isError && <div className={styles.error}>Something went wrong, please try again later</div>}
      {isLoading && (
        <div className={styles.error}>Loading</div>
      )}
      {currentItems && (
        <div className={styles.movies}>
          {currentItems.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              img={movie.image}
              title={movie.fullTitle}
              crew={movie.crew}
            />
          ))}
        </div>
      )}
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName={styles.page_item}
        pageLinkClassName={styles.page_link}
        previousClassName={styles.page_item}
        previousLinkClassName={styles.page_link}
        nextClassName={styles.page_item}
        nextLinkClassName={styles.page_link}
        breakLabel="..."
        breakClassName={styles.page_item}
        breakLinkClassName={styles.page_link}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        renderOnZeroPageCount={null}
      />
    </>
  )
}

PaginatedIMovies.propTypes = {
  itemsPerPage: PropTypes.number.isRequired
}

export default PaginatedIMovies
