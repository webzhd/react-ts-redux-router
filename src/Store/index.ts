import { createStore } from 'redux'
import { reducer } from './test/reducers'
const store = createStore(reducer)
export default store