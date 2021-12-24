import { LEGIO_FALT, LEGIO_PRESENT } from '../actions/actionTypes'

const initialState = {
    ids: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LEGIO_PRESENT:
            return {
                ...state,
                ids: action.payload.ids
            }
        case LEGIO_FALT:
            return {
                ...state,
                ids: []
            }
        default:
            return state
    }
}

export default reducer;