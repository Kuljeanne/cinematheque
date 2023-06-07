import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './index.scss'
import AppRotes from './rotes/AppRotes'
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRotes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
