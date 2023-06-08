import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const IMDB_BASE_URL = 'https://imdb-api.com/en/API'

export const movieApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({ baseUrl: IMDB_BASE_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `/Top250Movies/${process.env.REACT_APP_IMDB_API_KEY}`
    }),
    getMovieInfo: builder.query({
      query: (id) => `/Title/${process.env.REACT_APP_IMDB_API_KEY}/${id}`
    })
  })
})

export const { useGetMoviesQuery, useGetMovieInfoQuery } = movieApi
