import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import Main from './components/elements/Main/Main'
import Favorites from './components/pages/Favourites/Favourites'
import History from './components/pages/History/History'
import MovieInfo from './components/pages/MovieInfo/MovieInfo'
import NotFound from './components/pages/NotFound/NotFound'
import SearchResults from './components/pages/SearchResults/SearchResults'
import SignInPage from './components/pages/SignInPage/SignInPage'
import './index.scss'
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Main />} />
            <Route path="favourites" element={<Favorites />} />
            <Route path="history" element={<History />} />
            <Route path="search" element={<SearchResults />} />
            <Route path="movie" element={<MovieInfo />} />
          </Route>
          <Route path="/login" element={<SignInPage hasAccount={true} />} />
          <Route path="/signup" element={<SignInPage hasAccount={false} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
