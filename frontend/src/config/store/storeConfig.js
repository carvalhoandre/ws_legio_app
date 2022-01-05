
import { createStore, combineReducers } from "redux"
import eventReducer from './reducers/event'
import treasuryReducer from './reducers/treasury'
import recruitmentReducer from './reducers/recruitment'
import workReducer from './reducers/work'

const reducers = combineReducers({
    event: eventReducer,
    treasury: treasuryReducer,
    recruitment: recruitmentReducer,
    work: workReducer
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig