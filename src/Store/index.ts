import { createStore, combineReducers } from 'redux'
// import { ReturnType } from 'react-redux' 
import { list } from './test/reducers'
import { user, userState } from './User/reducer'
export interface rootReducerType {
    todos: any[],
    user: userState
}
const rootReducer = combineReducers({
    todos: list,
    user: user
})
const store = createStore(rootReducer)
export default store