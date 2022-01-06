
import { createStore, combineReducers } from "redux"
import DateReducer from './reducers/date'

const reducers = combineReducers({
    date: DateReducer
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig