import immer from 'immer'
import { ADD_TOKEN, REMOVE_TOKEN, LOGIN } from './actionType'
export interface userState {
    token: string,
    username: string
}
const initialUser: userState = {
    token: '',
    username: ''
}
export function user(state: userState=initialUser, action: any): userState {
    const { type, username, token } = action
    switch (type) {
    case ADD_TOKEN:
        return {
            ...state,
            token
        }
    case REMOVE_TOKEN:
        return {
            ...state,
            token: ''
        }
    case LOGIN:
        return {
            ...state,
            username,
            token
        }
    default:
        return state
    }
}