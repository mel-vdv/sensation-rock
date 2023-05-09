import { DELETE_Q, GET_LISTEQ_ERROR, GET_LISTEQ_PENDING, GET_LISTEQ_SUCCESS, MAJ_Q } from "../actions/types"

const initialState = {
    isLoading: false,
    error: null,
    items: []
}

export const listeQReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LISTEQ_PENDING: return {
            ...state, isLoading: true
        }
        case GET_LISTEQ_SUCCESS: return {
            ...state, isLoading: false, items: action.payload.data
        }
        case GET_LISTEQ_ERROR: return {
            ...state, isLoading: false, error: action.payload.error
        }
        case DELETE_Q:
            return {
                ...state, isLoading: false, items: state.items.filter(e => e['_id'] !== action.payload.idQ)
            }
        case MAJ_Q: 
        return {
            ...state, 
             items: state.items.map((e) => {
                if (e['_id'] === action.payload.quest['_id']) { return action.payload.quest; }
                else { return e; }
            })
        }
        default: return state;
    }
}