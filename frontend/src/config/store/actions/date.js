import { DATE_IN, DATE_OUT } from './actionTypes'

export const goDate = date => {
    return {
        type: DATE_IN,
        payload: date
    }
}

export const backDate = () => {
    return{
        type: DATE_OUT
    }
}