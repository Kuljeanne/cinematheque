import { useState } from 'react'

import { useSearchMovieQuery } from '../store/api/api'
import useDebounce from './useDebounce'

export const useSearch = () => {
  const [searchValue, setSearchValue] = useState('')
  const debouncedValue = useDebounce(searchValue, 500)

  const handleInput = (e) => {
    setSearchValue(e.target.value)
  }

  const { data, isSuccess, isLoading } = useSearchMovieQuery(debouncedValue, {
    skip: !debouncedValue,
    selectFromResult: ({ data, ...rest }) => ({
      data: data?.slice(0, 8),
      ...rest
    })
  })

  return {
    handleInput,
    data,
    isSuccess,
    isLoading,
    searchValue
  }
}
