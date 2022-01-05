import { CREATE_EVENT, DELETE_EVENT } from './actionTypes'

export const addEvent = event => {
    return {
        type: CREATE_EVENT,
        payload: event
    }
}

export const removeEvent = () => {
    return {
        type: DELETE_EVENT
    }
}
