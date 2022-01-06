import { DATE_IN, DATE_OUT } from '../actions/actionTypes'

const initialState = {
    number: null,
    moment: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DATE_IN:
            return {
                ...state,
                number: action.payload.number,
                moment: action.payload.moment
            }
        case DATE_OUT:
            return {
                ...state,
                number: null,
                moment: null
            }
        default:
            return state
    }
}

export default reducer;