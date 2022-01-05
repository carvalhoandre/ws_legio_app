import {
    CREATE_TREASURY,
    DELETE_TREASURY
} from './actionTypes'

export const addTreasury = treasury => {
    return {
        type: CREATE_TREASURY,
        payload: treasury
    }
}

export const removeTreasury = () => {
    return {
        type: DELETE_TREASURY
    }
}