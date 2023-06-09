import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import ErrorBoundary from './components/elements/ErrorBoundary/ErrorBoundary'
import './index.scss'
import AppRotes from './rotes/AppRotes'
import store from './store/store'
import ErrorPage from './components/pages/ErrorPage/ErrorPage'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary fallback={<ErrorPage/>}>
          <AppRotes />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
