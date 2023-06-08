import { configureStore } from '@reduxjs/toolkit'

import { movieApi } from './api/api'
import authReducer from './authSlice/authSlice'
import { saveUserData } from './middlewares/saveUserData'

const store = configureStore({
  reducer: {
    auth: authReducer,
    [movieApi.reducerPath]: movieApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveUserData).concat(movieApi.middleware)
})

export default store
