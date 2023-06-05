import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice/authSlice'

const store = configureStore({
  reducer: {
    authorrization: authReducer
  }
})

export default store
