import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {

  const [user, setUser] = useState({
    token: '',
    acc_name: '',
    email:'',
  });

  const [conquest, setConquest] = useState({
    qtdTravel: 0,
    qtdCountry: 0,
    qtdCity: 0,
    qtdActivity: 0,
  })

  const GetToken = () => {
    return user.token
  }

  const GetUser = () => {
    return user
  }

  const GetConquest = () => {
    return conquest
  }

  return (
    <UserContext.Provider value={{user, GetUser, conquest, GetConquest}}>
      {children}
    </UserContext.Provider>
  )
}
