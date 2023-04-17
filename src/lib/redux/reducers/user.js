import { GET_NEW_USER, GET_USER_ERROR, GET_USER_PENDING, GET_USER_SUCCESS } from "../actions/types"

const initialState={
    isLoading : false,
    error: null,
    item: null
}
export const userReducer = (state= initialState, action)=>{
    switch(action.type){
        case GET_USER_PENDING : return{
            ...state, isLoading:true
        }
        case GET_USER_SUCCESS : return{
            ...state, isLoading:false, item: action.payload.data[0]
        }
        case GET_USER_ERROR : return{
            ...state, isLoading:false, error: action.payload.error
        }
        case GET_NEW_USER: return{
            ...state, isLoading:false, item: action.payload.user
        }
        default: return state;
    }
}