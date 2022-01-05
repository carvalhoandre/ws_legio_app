import {
    CREATE_WORK,
    DELETE_WORK
} from './actionTypes'

export const addWork = work => {
    return {
        type: CREATE_WORK,
        payload: work
    }
}

export const removeWork = () => {
    return {
        type: DELETE_WORK
    }
}