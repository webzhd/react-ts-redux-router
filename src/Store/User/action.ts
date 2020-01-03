import { ADD_TOKEN, REMOVE_TOKEN, LOGIN } from './actionType'

export function addToken(token: string) {
    return {
        type: ADD_TOKEN,
        token
    }
}

export function removeToken() {
    return {
        type: REMOVE_TOKEN
    }
}

export function login(username: string, token: string) {
    return {
        type: LOGIN,
        username,
        token
    }
}