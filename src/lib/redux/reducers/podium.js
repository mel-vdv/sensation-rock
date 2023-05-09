import { GET_PODIUM_ERROR, GET_PODIUM_PENDING, GET_PODIUM_SUCCESS } from "../actions/types"

const initialState={
    isLoading : false,
    error: null,
    items:[] 
}

export const podiumReducer= (state= initialState, action)=>{
    switch(action.type){
        case GET_PODIUM_PENDING: return{
            ...state, isLoading:true
        }
        case GET_PODIUM_SUCCESS: return{
            ...state, isLoading:false, items: action.payload.data
        }
        case GET_PODIUM_ERROR : return{
            ...state, isLoading:false, error: action.payload.error
        }
        default: return state;
    }
}