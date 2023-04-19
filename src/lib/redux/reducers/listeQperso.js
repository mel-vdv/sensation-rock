import { GET_LISTEQ_PERSO_ERROR, GET_LISTEQ_PERSO_PENDING, GET_LISTEQ_PERSO_SUCCESS } from "../actions/types"

const initialState={
    isLoading : false,
    error: null,
    items:[] 
}

export const listeQpersoReducer= (state= initialState, action)=>{
    switch(action.type){
        case GET_LISTEQ_PERSO_PENDING
         : return{
            ...state, isLoading:true
        }
        case GET_LISTEQ_PERSO_SUCCESS: return{
            ...state, isLoading:false, items: action.payload.data
        }
        case GET_LISTEQ_PERSO_ERROR : return{
            ...state, isLoading:false, error: action.payload.error
        }
        default: return state;
    }
}