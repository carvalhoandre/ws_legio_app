import { CREATE_WORK, DELETE_WORK  } from '../actions/actionTypes'

const initialState = {
    work: [],
}

const array = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_WORK:
            array.push(action.payload.work)
            return {
                ...state,
                work: array
            }
        case DELETE_WORK:
            return {
                ...state,
                work: [],
                array: []
            }
        default:
            return state
    }
}

export default reducer;