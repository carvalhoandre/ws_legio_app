import { CREATE_EVENT, DELETE_EVENT } from '../actions/actionTypes'

const initialState = {
    event: [],
}

const array = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_EVENT:
            array.push(action.payload.event)
            return {
                ...state,
                events: array
            }
        case DELETE_EVENT:
            return {
                ...state,
                event: [],
                array: []
            }
        default:
            return state
    }
}

export default reducer;