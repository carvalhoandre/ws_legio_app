import { LEGIO_PRESENT, LEGIO_FALT  } from './actionTypes'

export const present = legio => {
    return {
        type: LEGIO_PRESENT,
        payload: legio
    }
}

export const falt = () => {
    return{
        type: LEGIO_FALT
    }
}