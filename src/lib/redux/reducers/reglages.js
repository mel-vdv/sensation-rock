import { GET_REGLAGES_FAILURE, GET_REGLAGES_PENDING, GET_REGLAGES_SUCCESS } from "../actions/types"

const initialState={
    isLoading:false,
    error:null,
    items:null
}
//-------------------------
export const reglagesReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_REGLAGES_PENDING: return{
            ...state, 
            isLoading:true
        }
        case GET_REGLAGES_SUCCESS: return{
            ...state,
            isLoading:false,
            items: action.payload.data
        }
        case GET_REGLAGES_FAILURE : return{
            ...state,
            isLoading: false,
            error: action.payload.error
        }
        default: return state
    }
}