import { ADD_QSPE, DELETE_QSPE, GET_LISTEQ_SPE_ERROR, GET_LISTEQ_SPE_PENDING, GET_LISTEQ_SPE_SUCCESS, MAJ_QSPE } from "../actions/types"

const initialState={
    isLoading : false,
    error: null,
    items:[] 
}

export const listeQspeReducer= (state= initialState, action)=>{
    switch(action.type){
        case GET_LISTEQ_SPE_PENDING
         : return{
            ...state, isLoading:true
        }
        case GET_LISTEQ_SPE_SUCCESS: return{
            ...state, isLoading:false, items: action.payload.data
        }
        case GET_LISTEQ_SPE_ERROR : return{
            ...state, isLoading:false, error: action.payload.error
        }
        case DELETE_QSPE: return{
                ...state, isLoading: false, items: state.items.filter(e => e['_id'] !== action.payload.idQ)
        }
        case ADD_QSPE: 
        return{////     important cette façon d'ajouter un élément à un tableau !!!
            ...state, isLoading:false, items:[...state.items, action.payload.quest] 
        }
        case MAJ_QSPE: return{
            ...state, isLoading:false, items: state.items.map((e) => {
                if (e['_id'] === action.payload.quest['_id']) { return action.payload.quest;}
                else { return e; }
            })
        }
        default: return state;
    }
}