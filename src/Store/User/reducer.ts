import produce from 'immer'
import { ADD_TOKEN, REMOVE_TOKEN, LOGIN } from './actionType'
export interface userState {
    token: string,
    username: string
}
const initialUser: userState = {
    token: window.localStorage.getItem('token') || '',
    username: ''
}
export function user(state: userState=initialUser, action: any): userState {
    const { type, username, token } = action
    switch (type) {
    case ADD_TOKEN:
        return produce(state, draftState => {
            draftState.token = token
        })
    case REMOVE_TOKEN:
        return produce(state, draftState => {
            draftState.token = ''
        })
    case LOGIN:
        window.localStorage.setItem('toekn', token)
        return produce(state, draftState => {
            draftState.username = username
            draftState.token = token
        })
    default:
        return state
    }
}