import { CREATE_TREASURY, DELETE_TREASURY } from '../actions/actionTypes'

const initialState = {
    saldoAnterior: null,
    coletaDoDia: null,
    diaDaColeta: null,
    despesas: null,
    subTotal: null,
    totalEmCaixa: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TREASURY:
            return {
                ...state,
                saldoAnterior: action.payload.saldoAnterior,
                coletaDoDia: action.payload.coletaDoDia,
                diaDaColeta: action.payload.diaDaColeta,
                despesas: action.payload.despesas,
                subTotal: action.payload.subTotal,
                totalEmCaixa: action.payload.totalEmCaixa
            }
        case DELETE_TREASURY:
            return {
                ...state,
                saldoAnterior: null,
                coletaDoDia: null,
                diaDaColeta: null,
                despesas: null,
                subTotal: null,
                totalEmCaixa: null,
            }
        default:
            return state
    }
}

export default reducer;