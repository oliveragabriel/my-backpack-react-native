import React, { createContext, useState } from 'react';
import * as api from '../services/api';

export const UserContext = createContext();

export const UserProvider = ({children}) => {

  const [user, setUser] = useState({
    id:1,
    name: '',
    email:'',
    conquest: {
      qtdTravel: 3,
      qtdCountry: 0,
      qtdCity: 0,
      qtdActivity: 0,
    }
  });

  const [travels, setTravels] = useState({
    done:[],
    notDone:[]
  })

  const [travel, setTravel] = useState({})
  const [flagTravel, setFlagTravel] = useState(true);
  const [travelDays, setTravelDays] = useState([])
  const [activities, setActivities] = useState([])
  const [activity, setActivity] = useState({})

  //add conquest no back

  const SetUser = async (id) => {
    const loggedUser = await api.requestGetOne(id, 'user');
    console.log(loggedUser)
    setUser(loggedUser);
  }

  const SetTravels = async () => {
    try {
      const response = await api.requestGetAll(user.id, 'travel')
      setTravels(response);
    } catch (erro) {
      console.log(erro)
    }
  }

  const SetTravel = async (id) => {
    try {
      const response =await api.requestGetOne(id, 'travel')
      setTravel(response);
    } catch (erro) {
      console.log(erro)
    }
  }

  //funcao especifica pro nexttravel



  return (
    <UserContext.Provider value={{user, SetUser, travels, SetTravels, travel, SetTravel, flagTravel}}>
      {children}
    </UserContext.Provider>
  )
}
