import { useState } from 'react'

import { useSearchMovieQuery } from '../store/api/api'
import useDebounce from './useDebounce'

export const useSearch = (defaultSearch = '') => {
  const [searchValue, setSearchValue] = useState(defaultSearch)
  const [isTyping, setIsTyping] = useState(false)

  const debouncedValue = useDebounce(searchValue, 500)

  const handleInput = (e) => {
    setSearchValue(e.target.value)
    setIsTyping(true)
  }

  const { data, isSuccess, isLoading } = useSearchMovieQuery(debouncedValue, {
    skip: !debouncedValue || !isTyping,
    selectFromResult: ({ data, ...rest }) => ({
      data: data?.slice(0, 10),
      ...rest
    })
  })

  return {
    handleInput,
    data,
    isSuccess,
    isLoading,
    searchValue,
  }
}
