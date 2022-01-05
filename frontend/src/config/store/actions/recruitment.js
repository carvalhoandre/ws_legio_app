import {
    CREATE_RECRUITMENT,
    DELETE_RECRUITMENT,
} from './actionTypes'

export const addRecruitment = recruitment => {
    return {
        type: CREATE_RECRUITMENT,
        payload: recruitment
    }
}

export const removeRecruitment = () => {
    return {
        type: DELETE_RECRUITMENT
    }
}