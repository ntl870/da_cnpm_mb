import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const getToken = createAsyncThunk('auth/token', async () => {
  const token = await AsyncStorage.getItem('authToken')
  return token
})

const initialState = {
  token: ''
}

const userAuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload
    },
    logout: (state) => {
      state.token = ''
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getToken.fulfilled, (state, action) => {
      state.token = action.payload
    })
  }
})

export const { login, logout } = userAuthSlice.actions
export const selectToken = (state) => state.auth.token
export default userAuthSlice.reducer
