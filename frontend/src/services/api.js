import axios from 'axios';

const instance = axios.create({
    // nao logar na internet do senai que muda o IP direto e da erro
    baseURL: "http://192.168.100.10:3333",
    headers: {
      "Content-Type": "application/json"
    }
})

export const createUser = async (data) => {
  const resp = await instance.post("/user", data);
  // console.log(resp.status)
  return resp.status;
}

export const getAuth = async (credentials) => {
  const resp = await instance.post("/user/login", credentials);
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

export const getNextTrip = async () => {
  // const resp = await instance.get(`/nexttrip/:${id_user}`);
  const resp = await instance.get("/nexttrip")
  const trip = resp.data;
  return trip;
}