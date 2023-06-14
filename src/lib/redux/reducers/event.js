import { GET_EVENT_ERROR, GET_EVENT_PENDING, GET_EVENT_SUCCESS} from "../actions/types"

const initialState={
    isLoading : false,
    error: null,
    item: null
}
export const eventReducer = (state= initialState, action)=>{
    switch(action.type){
        case GET_EVENT_PENDING : return{
            ...state, isLoading:true
        }
        case GET_EVENT_SUCCESS : return{
            ...state, isLoading:false, item: action.payload.data[0]
        }
        case GET_EVENT_ERROR : return{
            ...state, isLoading:false, error: action.payload.error
        }
      
        default: return state;
    }
}