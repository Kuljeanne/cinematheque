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

const isUserExist = (login) => {
  return !!localStorage.getItem(login)
}

const fetchingUser = ({ login, email, password }) =>
  new Promise((resolve) => {
    if (isUserExist(login)) throw Error('A user with such a login exists')
    setTimeout(() => resolve({ login, email, password }), 1500)
  })

export const getUser = createAsyncThunk(
  'user/fetchingUser',
  async ({ login, email, password }, { rejectWithValue }) => {
    try {
      const res = await fetchingUser({ login, email, password })
      return res
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logInUser: (state, action) => {
      state.error = action.payload.error
      state.status = action.payload.status
      state.login = action.payload.login
      state.email = action.payload.email
      state.password = action.payload.password
      state.history = action.payload.history
      state.favourites = action.payload.favourites
    },
    checkAuth: (state, action) => {
      state.error = action.payload.error
      state.status = action.payload.status
      state.login = action.payload.login
      state.email = action.payload.email
      state.password = action.payload.password
      state.history = action.payload.history
      state.favourites = action.payload.favourites
    },
    removeUser: (state) => {
      state.status = 'out'
    },
    toggleFavourite: (state, action) => {
      const movieId = action.payload.id
      const hasInFav = state.favourites.some((fav) => fav.id === movieId)
      if (hasInFav) {
        state.favourites = state.favourites.filter((fav) => fav.id !== movieId)
      } else {
        state.favourites.push(action.payload)
      }
    },
    addHistory: (state, action) => {
      state.history.push(action.payload)
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
        state.favourites = []
        state.history = []
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = 'out'
        state.error = action.payload
      })
  }
})

export const { logInUser, checkAuth, removeUser, toggleFavourite, addHistory } = userSlice.actions

export default userSlice.reducer
