import { useEffect } from 'react'

import { useSearchMovieQuery } from '../store/api/api'

export default function useDebounce(exp, clb, delay) {

    const { data, isSuccess } = useSearchMovieQuery(exp)
    useEffect(() => {
      const timeout = setTimeout(() => {
        isSuccess ? clb(data.results.map((res) => res.title)) : clb(['not found'])
      }, delay)
      return () => clearTimeout(timeout)
    }, [clb, data, delay, isSuccess])
  }

