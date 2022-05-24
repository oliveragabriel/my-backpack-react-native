import axios from 'axios';

const instance = axios.create({
    // nao logar na internet do senai que muda o IP direto e da erro
    baseURL: "http://172.20.63.197:3333",
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
  console.log("getauth")
  const {token} = await instance.post("/users/login", credentials);
  return token;
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