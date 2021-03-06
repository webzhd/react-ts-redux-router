import { combineReducers } from 'redux'

export interface State {
    todos: string[]
}
export interface Action {
    type: string,
    value: string
}
export const initState:State = {
    todos: []
}

export function list(state: State = initState, action: Action) {
    switch(action.type) {
    case 'add':
        return {
            ...state,
            todos: [...state.todos, action.value]
        }
          
    default: 
        return state
    }
}



