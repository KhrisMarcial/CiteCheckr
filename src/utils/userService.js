import tokenService from './tokenService';
const BASE_URL = '/api/users/';

function getUser() {
    return tokenService.getUserFromToken();
}

function login(creds) {
    return fetch(BASE_URL + 'login', {
        method: 'POST',
        headers: new Headers({'Content-type': 'Application/json'}),
        body: JSON.stringify(creds)
    })
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error('Bad Credentials')
        }
    })
    .then(({ token }) => tokenService.setToken(token))
}

function signup(user) {
    return fetch(BASE_URL + 'signup', {
        method: 'POST',
        headers: new Headers({'Content-type': 'Application/json'}),
        body: JSON.stringify(user)
    })
    .then(response => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error('Email Already Taken')
        }
    })
    .then(({ token }) => tokenService.setToken(token))
}

function logout() {
    tokenService.removeToken();
}

export default {
    signup,
    getUser,
    logout,
    login
};