
import { createStore, combineReducers } from "redux"
import LegioReducer from "./reducers/legio"

const reducers = combineReducers({
    legio : LegioReducer
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig