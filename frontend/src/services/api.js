import axios from 'axios';

const instance = axios.create({
    // nao logar na internet do senai que muda o IP direto e da erro
    baseURL: "http://10.3.60.8:3000",
    headers: {
        "Content-Type": "application/json",
    }
});

const child = {
    accomodation: '/accomodations',
    activity: '/activities',
    transport: '/transports',
    travel: '/travels',
    travelDay: '/traveldays',
    user: '/users',
    wish: '/wishes'
};

const parent = {
    accomodation: '/travels',
    activity: '/traveldays',
    transport: '/travels',
    travel: '/users',
    travelDay: '/travels',
    wish: '/users'
};

const pathSimple = (id, entity) => {
    return child[entity] + '/' + id;
}

const pathParent = (id, entity) => {
    return parent[entity] + '/' + id + child[entity];
}


// GET

export const requestGetAll = async (id, entity) => {
    try {
        const resp = await instance.get(pathParent(id, entity));
        return resp.data;
    } catch (err) {
        throw err.response.data.msg;
    }
}

export const requestGetOne = async (id, entity) => {
    try {
        const resp = await instance.get(pathSimple(id, entity));
        return resp.data;
    } catch (err) {
        throw err.response.data.msg;
    }
}


// POST

export const requestLoginUser = async (data) => {
    try {
        const resp = await instance.post("/users/login", data);
        return resp.data;
    } catch (err) {
        throw err.response.data.msg;
    }
}

export const requestCreateUser = async (data) => {
    try {
        const resp = await instance.post("/users", data);
        return resp.data.msg;
    } catch (err) {
        throw err.response.data.msg;
    }
}

export const requestCreate = async (id, entity, data) => {
    try {
        const resp = await instance.post(pathParent(id, entity), data);
        return resp.data;
    } catch (err) {
        throw err.response.data.msg;
    }
}


// PATCH

export const requestUpdate = async (id, entity, data) => {
    try {
        const resp = await instance.patch(pathSimple(id, entity), data);
        return resp.data;
    } catch (err) {
        throw err.response.data.msg;
    }
}


// DELETE

export const requestDelete = async (id, entity) => {
    try {
        const resp = await instance.delete(pathSimple(id, entity));
        return resp.data.msg;
    } catch (err) {
        throw err.response.data.msg;
    }
}