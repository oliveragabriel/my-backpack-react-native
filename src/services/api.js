import axios from 'axios';

const instance = axios.create({
    baseURL: "https://senaiuserapi.herokuapp.com"
})

export default instance;


