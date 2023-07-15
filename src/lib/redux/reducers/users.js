import { DELETE_USER, GET_ALL_USERS_ERROR, GET_ALL_USERS_PENDING, GET_ALL_USERS_SUCCESS } from "../actions/types"

const initialState={
    isLoading : false,
    error: null,
    items:[],
    existe: false
}
//---------------------------------------------
export const usersReducer = (state=initialState,action)=>{
 switch(action.type){
    case GET_ALL_USERS_PENDING : return{
        ...state,
        isLoading: true
    }
    case GET_ALL_USERS_SUCCESS : return {
        ...state,
        isLoading:false,
        items: action.payload.data
    }
    case GET_ALL_USERS_ERROR : return {
        ...state, isLoading: false, error : action.payload.error
    }
    case DELETE_USER: return {
        ...state, isLoading:false, items: state.items.filter(e=>e['_id']!==action.payload.idu)
    }
    default : return state;
    
 }
}