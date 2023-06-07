import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: null,
  email: null,
  password: null,
  favourites: [],
  history: [],
  status: null,
  error: null
}

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)')
  )
  return matches ? decodeURIComponent(matches[1]) : undefined
}

const isUserExist = (login) => {
  return !!localStorage.getItem(login)
}

const fetchingUser = ({ login, email, password }) =>
  new Promise((resolve) => {
    if (isUserExist(login)) throw Error('A user with such a login exists')
    setTimeout(() => resolve({ login, email, password }), 1500)
  })

export const getUser = createAsyncThunk(
  'auth/fetchingUser',
  async ({ login, email, password }, { rejectWithValue }) => {
    try {
      const res = await fetchingUser({ login, email, password })
      return res
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logInUser: (state, action) => {
      const user = JSON.parse(localStorage.getItem(action.payload.login))
      if (!user) {
        state.error = 'User is not found'
        return
      }
      if (user.password !== action.payload.password) {
        state.error = 'Password is not correct'
        return
      }
      state.status = 'auth'
      state.login = user.login
      state.email = user.email
      state.password = user.password
      state.history = user.history
      state.favourites = user.favourites
    },
    checkAuth: (state) => {
      if (!state.login && getCookie('user')) {
        const login = getCookie('user')
        const user = JSON.parse(localStorage.getItem(login))
        if (!user) return state
        state.status = 'auth'
        state.login = user.login
        state.email = user.email
        state.password = user.password
        state.history = user.history
        state.favourites = user.favourites
      }
    },
    removeUser: (state) => {
      state.status = 'out'
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = 'auth'
        state.login = action.payload.login
        state.email = action.payload.email
        state.password = action.payload.password
      })
      .addCase(getUser.rejected, (state, action) => {
        state.error = action.payload
      })
  }
})

export const { logInUser, checkAuth, removeUser } = authSlice.actions

export default authSlice.reducer
