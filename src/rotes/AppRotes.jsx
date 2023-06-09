import { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import App from '../App'
import Main from '../components/elements/Main/Main'
import Catalog from '../components/pages/Catalog/Catalog'
import NotFound from '../components/pages/NotFound/NotFound'
import SearchPage from '../components/pages/SearchPage/SearchPage'
import SignInPage from '../components/pages/SignInPage/SignInPage'
import { ProtectedRoute } from './ProtectedRoure'
import { UnprotectedRoute } from './UnprotectedRoure'

const SearchResults = lazy(() => import('../components/elements/SearchResults/SearchResults'))
const MovieInfo = lazy(() => import('../components/pages/MovieInfo/MovieInfo'))
const Favorites = lazy(() => import('../components/pages/Favourites/Favourites'))
const History = lazy(() => import('../components/pages/History/History'))

const AppRotes = () => {
  const user = useSelector((state) => state.user)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<UnprotectedRoute isAuth={user.status === 'auth'} />}>
          <Route path="/login" element={<SignInPage hasAccount={true} />} />
          <Route path="/signup" element={<SignInPage hasAccount={false} />} />
        </Route>

        <Route path="/" element={<App />}>
          <Route path="/" element={<Main />} />
          <Route path="search/" element={<SearchPage />}>
            <Route path=":exp" element={<SearchResults />} />
          </Route>
          <Route path="Top250Movies" element={<Catalog />} />
          <Route path="movie/:id" element={<MovieInfo />} />
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
