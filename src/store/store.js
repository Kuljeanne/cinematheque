import { configureStore } from '@reduxjs/toolkit'

import authReducer from './authSlice/authSlice'
import { saveUserData } from './middlewares/saveUserData'

const store = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware: [saveUserData]
})

export default store
