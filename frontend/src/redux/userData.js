import { createSlice } from '@reduxjs/toolkit'
import { getUser, getConquest, getAuth } from '../services/api'

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    user: {
      id_user: 0,
      name: '',
      birth: null,
      email:'',
      phone:'',
      nationality:'',
      city:''
    },
    conquest: {
      qtdTravel: 0,
      qtdCountry: 0,
      qtdCity: 0,
      qtdActivity: 0,
    },
  },
  reducers: {
    getAuthRedux: (state, credentials) => {
      let id = getAuth(credentials);
      state.user.id_user = id;
    },
    getUserRedux: (state, id_user) => {
      let user = getUser(id_user);
      state.user = { ...state.user, ...user};
    },
    getConquestRedux: (state, id_user) => {
      let conquest = getConquest(id_user);
      state.conquest = { ...state.conquest, ...conquest};
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateUser, getId, getUser, getConquest } = userDataSlice.actions

export default userDataSlice.reducer