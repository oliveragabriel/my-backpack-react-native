import { configureStore } from '@reduxjs/toolkit'
import { userDataSlice } from '../redux/UserData'

export default configureStore({
  reducer: {
    userData: userDataSlice
  },
})