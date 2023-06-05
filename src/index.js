import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import Main from './components/elements/Main/Main'
import Favorites from './components/pages/Favourites/Favourites'
import History from './components/pages/History/History'
import Login from './components/pages/Login/Login'
import MovieInfo from './components/pages/MovieInfo/MovieInfo'
import NotFound from './components/pages/NotFound/NotFound'
import SearchResults from './components/pages/SearchResults/SearchResults'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Main />} />
            <Route path="favourites" element={<Favorites />} />
            <Route path="history" element={<History />} />
            <Route path="search" element={<SearchResults />} />
            <Route path="movie" element={<MovieInfo />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
