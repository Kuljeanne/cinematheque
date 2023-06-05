import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: '',
  email: '',
  password: '',
  favourites: [],
  history: [],
  status: '',
  error: null
}

const isUserExist = (login) => {
  return !!localStorage.getItem(login)
}

const fetchingUser = ({ login, email, password }) =>
  new Promise((resolve) => {
    if (isUserExist(login)) throw Error('A user with such a login exists')
    setTimeout(() => resolve({ login, email, password }), 500)
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
    addUser: (state, action) => {
      state.login = action.payload.login
      state.email = action.payload.email
      state.password = action.payload.password
    },
    removeUser: (state) => {
      state.isAuth = 'out'
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
        localStorage.setItem(state.login, JSON.stringify(state))

      })
      .addCase(getUser.rejected, (state, action) => {
        state.error = action.payload
      })
  }
})

export const { addUser, removeUser } = authSlice.actions

export default authSlice.reducer
