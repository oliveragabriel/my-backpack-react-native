import { configureStore } from '@reduxjs/toolkit'
import { userDataSlice } from '../redux/userData'

export default configureStore({
  reducer: {
    userData: userDataSlice.reducer
  },
})