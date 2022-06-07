import React, { createContext, useState } from 'react';
import * as api from '../services/api';

export const UserContext = createContext();

export const UserProvider = ({children}) => {

  const [user, setUser] = useState({
    id:'',
    name: '',
    email:'',
  });

  const [conquest, setConquest] = useState({
    qtdTravel: 3,
    qtdCountry: 0,
    qtdCity: 0,
    qtdActivity: 0,
  })

  const [nextTravel, setNextTravel] = useState({})
  const [flagTravel, setFlagTravel] = useState(true);

  const SetUser = async () => {
    const loggedUser = await api.requestGetOne(user.id, 'user');
    console.log(loggedUser);
    setUser(loggedUser);
  }

  const GetConquest = () => {
    return conquest;
  }

  const SetNextTravel = async () => {
    const travel = false; // chamar api
    if (travel === false) {
      setFlagTravel(false);
    } else {
      setFlagTravel(true);
      setNextTravel(travel);
    }
  }

  return (
    <UserContext.Provider value={{user, SetUser, conquest, GetConquest, nextTravel, SetNextTravel, flagTravel}}>
      {children}
    </UserContext.Provider>
  )
}
