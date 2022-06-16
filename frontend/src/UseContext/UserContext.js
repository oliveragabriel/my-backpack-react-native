import React, { createContext, useState } from 'react';
import * as api from '../services/api';

export const UserContext = createContext();

export const UserProvider = ({children}) => {

  /**
   * User
   */

  const initialUser = {
    loading: true,
    id: '',
    name: '',
    email:'',
    travels: '',
    countries: '',
    cities: '',
    activities: ''
  };
  
  const [user, setUser] = useState(initialUser);
  const resetUser = () => setUser(initialUser);

  const contextSetUser = async (id) => {
    try {
      const response = await api.requestGetOne(id, 'user');
      setUser({
        loading: false,
        ...response
      });
    } catch (error) {
      console.log(error);
    }
  };


  /**
   * Travel
   */

  const initialTravels = {
    loading: true,
    done: [],
    notDone: []
  };

  const initialTravel = {
    loading: true,
    id: '',
    title: '',
    arrivalDate: '',
    departureDate: '',
    type: '',
    days: '',
    activities: '',
    countries: ''
  };

  const [travels, setTravels] = useState(initialTravels);
  const resetTravels = () => setTravels(initialTravels);

  const [travel, setTravel] = useState(initialTravel);
  const resetTravel = () => setTravel(initialTravel);

  const [flagTravel, setFlagTravel] = useState(false);

  const contextSetTravels = async () => {
    try {
      const response = await api.requestGetAll(user.id, 'travel');
      setTravels({
        loading: false,
        done: [...response.done],
        notDone: [...response.notDone]
      });
    } catch (erro) {
      setTravels({...initialTravels, loading: false});
      console.log(erro);
    }
  };

  const contextSetTravel = async (id) => {
    try {
      const response = await api.requestGetOne(id, 'travel');
      setTravel({
        loading: false,
        ...response
      });
    } catch (erro) {
      setTravel({...initialTravel, loading: false});
      console.log(erro);
    }
  };

  const contextSetNextTravel = async () => {
    if (!travels.loading) {
      if (travels.notDone.length) {
          await contextSetTravel(travels.notDone[0].id);
      } else {
        setTravel({...initialTravel, loading: false});
      }
    }
  };


  /**
   * TravelDay
   */

  const initialObjArr = {
    loading: true,
    objArr: []
  }

  const initialTravelDay = {
    loading: true,
    id: '',
    country: '',
    city: '',
    day: '',
  };

  const [travelDays, setTravelDays] = useState(initialObjArr);
  const resetTravelDays = () => setTravelDays(initialObjArr);

  const [travelDay, setTravelDay] = useState(initialTravelDay);
  const resetTravelDay = () => setTravelDay(initialTravelDay);

  const contextSetTravelDay = async (id) => {
    try {
      const response = await api.requestGetOne(id, 'travelDay');
      setTravelDay({
        loading: false,
        ...response
      });
    } catch (error) {
      setTravelDay({
        loading: false,
        ...initialTravelDay
      });
      console.log(error);
    }
  };

  const contextSetTravelDays = async (id) => {
    try {
      const response = await api.requestGetAll(id, 'travelDay');
      setTravelDays({
        loading: false,
        objArr: [...response]
      });
    } catch (erro) {
      setTravelDays({
        loading: false,
        objArr: []
      });
      console.log(erro);
    }
  };

  /**
   * Activity
   */

  const initialActivity = {
    loading: true,
    id: '',
    description: '',
    type: '',
    value: 0,
    time: ''
  };

  const [activities, setActivities] = useState(initialObjArr);
  const resetActivities = () => setActivities(initialObjArr);

  const [activity, setActivity] = useState(initialActivity);
  const resetActivity = () => setActivity(initialActivity);

  const contextSetActivity = async (id) => {
    try {
      const response = await api.requestGetOne(id, 'activity');
      setActivity(response);
    } catch (error) {
      console.log(error);
    }
  };

  const contextSetActivities = async (id) => {
    try {
      const response = await api.requestGetAll(id, 'activity');
      setActivities({
        loading: false,
        objArr: [...response]
      });
    } catch (erro) {
      setActivities({
        loading: false,
        objArr: []
      });
      console.log(erro);
    }
  };

  /**
   * Wish
   */

  const initialWish = {
    loading: true,
    id: '',
    description: ''
  };

  const [wishes, setWishes] = useState(initialObjArr);
  const resetWishes = () => setWishes(initialObjArr);

  const [wish, setWish] = useState(initialWish);
  const resetWish = () => setWish(initialWish);

  const contextSetWish = async (id) => {
    try {
      const response = await api.requestGetOne(id, 'wish');
      setWish(response);
    } catch (error) {
      console.log(error);
    }
  };

  const contextSetWishes = async (id) => {
    try {
      const response = await api.requestGetAll(id, 'wish');
      setWishes(response);
    } catch (erro) {
      console.log(erro);
    }
  };

  /**
   * Accomodation
   */

  const initialAccomodation = {
    loading: true,
    id: '',
    description: '',
    arrivalDate: '',
    departureDate: '',
    type: '',
    value: 0
  };

  const [accomodations, setAccomodations] = useState(initialObjArr);
  const resetAccomodations = () => setAccomodations(initialObjArr);

  const [accomodation, setAccomodation] = useState(initialAccomodation);
  const resetAccomodation = () => setAccomodation(initialAccomodation);

  const contextSetAccomodation = async (id) => {
    try {
      const response = await api.requestGetOne(id, 'accomodation');
      setAccomodation(response);
    } catch (error) {
      
      console.log(error);
    }
  };

  const contextSetAccomodations = async (id) => {
    try {
      const response = await api.requestGetAll(id, 'accomodation');
      setAccomodations({
        loading: false,
        objArr: [...response]
      });
    } catch (erro) {
      setAccomodations({
        loading: false,
        objArr: []
      });
      console.log(erro);
    }
  };

  /**
   * Transport
   */

  const initialTransport = {
    loading: true,
    id: '',
    description: '',
    type: '',
    value: 0,
    arrivalDate: '',
    departureDate: '',
    arrivalPlace: '',
    departurePlace: ''
  };

  const [transports, setTransports] = useState(initialObjArr);
  const resetTransports = () => setTransports(initialObjArr);

  const [transport, setTransport] = useState(initialTransport);
  const resetTransport = () => setTransport(initialTransport);

  const contextSetTransport = async (id) => {
    try {
      const response = await api.requestGetOne(id, 'transport');
      setTransport(response);
    } catch (error) {
      
      console.log(error);
    }
  };

  const contextSetTransports = async (id) => {
    try {
      const response = await api.requestGetAll(id, 'transport');
      setTransports({
        loading: false,
        objArr: [...response]
      });
    } catch (erro) {
      setTransports({
        loading: false,
        objArr: []
      });
      console.log(erro);
    }
  };

  return (
    <UserContext.Provider value={{
      accomodations, contextSetAccomodations, resetAccomodations,
      accomodation, contextSetAccomodation, resetAccomodation,
      activities, contextSetActivities, resetActivities,
      activity, contextSetActivity, resetActivity,
      transports, contextSetTransports, resetTransports,
      transport, contextSetTransport, resetTransport,
      travels, contextSetTravels, resetTravels,
      travel, contextSetTravel, resetTravel,
      flagTravel, contextSetNextTravel,
      travelDays, contextSetTravelDays, resetTravelDays,
      travelDay, contextSetTravelDay, resetTravelDay,
      user, contextSetUser, resetUser,
      wishes, contextSetWishes, resetWishes,
      wish, contextSetWish, resetWish,
    }}>
      {children}
    </UserContext.Provider>
  )
}