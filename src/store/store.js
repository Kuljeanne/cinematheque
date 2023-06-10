import { configureStore } from '@reduxjs/toolkit'

import { movieApi } from './api/api'
import { saveUserData } from './middlewares/saveUserData'
import userReducer from './userSlice/userSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    [movieApi.reducerPath]: movieApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveUserData).concat(movieApi.middleware)
})

export default store
