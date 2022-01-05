import { CREATE_RECRUITMENT, DELETE_RECRUITMENT } from '../actions/actionTypes'

const initialState = {
    recruitment: [],
}

const array = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_RECRUITMENT:
            array.push(action.payload.recruitment)
            return {
                ...state,
                recruitment: array
            }
        case DELETE_RECRUITMENT:
            return {
                ...state,
                recruitment: [],
                array: []
            }
        default:
            return state
    }
}

export default reducer;