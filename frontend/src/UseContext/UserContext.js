import React, { createContext, useState } from 'react';
import { getUser, getNextTrip } from '../services/api';

export const UserContext = createContext();

export const UserProvider = ({children}) => {

  const [user, setUser] = useState({
    //token: '',
    acc_name: '',
    email:'',
  });

  const [conquest, setConquest] = useState({
    qtdTravel: 0,
    qtdCountry: 0,
    qtdCity: 0,
    qtdActivity: 0,
  })

  const [nextTravel, setNextTravel] = useState({})
  const [flagTravel, setFlagTravel] = useState(true);

  const GetToken = () => {
    return user.token;
  }

  // const SetToken = (token) => {
  //   setUser({
  //     ...user, token:token
  //   })
  // }

  const SetUser = async () => {
    const loggedUser = await getUser();
    console.log(loggedUser);
    setUser(loggedUser);
  }

  const GetConquest = () => {
    return conquest;
  }

  const SetNextTravel = async () => {
    const travel = await getNextTrip();
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
