import { GET_LISTEQ_SPE_ERROR, GET_LISTEQ_SPE_PENDING, GET_LISTEQ_SPE_SUCCESS } from "../actions/types"

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
        default: return state;
    }
}