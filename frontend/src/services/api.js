import axios from 'axios';

const instance = axios.create({
    baseURL: "http://127.0.0.1:3333"
})

export const getAuth = async (credentials) => {
  const resp = await instance.post("/user", credentials);
  const id = resp.data;
  return id;
}

export const getUser = async (id_user) => {
  const resp = await instance.get(`/user/:${id_user}`);
  const user = resp.data;
  return user;
}

export const getConquest = async (id_user) => {
  const resp = await instance.get(`/conquest/:${id_user}`);
  const conquest = resp.data;
  return conquest;
}

export const getNextTrip = async (id_user) => {
  const resp = await instance.get(`/nexttrip/:${id_user}`);
  const trip = resp.data;
  return trip;
}