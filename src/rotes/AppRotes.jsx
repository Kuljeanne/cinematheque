import { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import App from '../App'
import Main from '../components/elements/Main/Main'
import NotFound from '../components/pages/NotFound/NotFound'
import SignInPage from '../components/pages/SignInPage/SignInPage'
import { ProtectedRoute } from './ProtectedRoure'

const SearchResults = lazy(() => import('../components/pages/SearchResults/SearchResults'))
const MovieInfo = lazy(() => import('../components/pages/MovieInfo/MovieInfo'))
const Favorites = lazy(() => import('../components/pages/Favourites/Favourites'))
const History = lazy(() => import('../components/pages/History/History'))

const AppRotes = () => {
  const user = useSelector((state) => state.auth)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<SignInPage hasAccount={true} />} />
        <Route path="/signup" element={<SignInPage hasAccount={false} />} />

        <Route path="/" element={<App />}>
          <Route path="/" element={<Main />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="movie" element={<MovieInfo />} />
          <Route element={<ProtectedRoute isAuth={user.status === 'auth'} />}>
            <Route path="/favourites" element={<Favorites />} />
            <Route path="/history" element={<History />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default AppRotes
