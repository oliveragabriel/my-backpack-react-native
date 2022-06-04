import axios from 'axios';
import { UserContext } from '../UseContext/UserContext';

const instance = axios.create({
    // nao logar na internet do senai que muda o IP direto e da erro
    baseURL: "http://192.168.100.10:3000",
    headers: {
      "Content-Type": "application/json",
      authtoken: ""
    }
})

export const createUser = async (data) => {
  try{
    const resp = await instance.post("/users", data);
    return resp.data.msg;
  } catch (err) {
    console.log(err.response.data);
    throw err.response.data.msg;
  }
}

export const getAuth = async (credentials) => {
  console.log("getauth")
  try {
    let res = await instance.post("/users/login", credentials);
    return res.data.authtoken;
  } catch (error) {
    console.log('Error', error)
    throw error
  }
}

export const SetTokenApi = (authtoken) => {
  instance.defaults.headers.authtoken = authtoken
}

export const getUser = async () => {
  const resp = await instance.get("/users");
  const user = resp.data;
  return user;
}

export const getConquest = async (id_user) => {
  const resp = await instance.get(`/conquest/:${id_user}`);
  const conquest = resp.data;
  return conquest;
}

export const getNextTrip = async () => {
  try {
    const resp = await instance.get("/nexttrip");
    const trip = resp.data;
    return trip;
  }
  catch (error) {
    return false;
  }
}