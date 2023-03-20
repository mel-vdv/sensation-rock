import{GET_CONCOURS_FAILURE, GET_CONCOURS_PENDING, GET_CONCOURS_SUCCESS} from './../actions/types';
//-------------------------
const initialState= {
    isLoading: false,
    error:null,
    items:[]
}
//-------------------------
export const concoursReducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_CONCOURS_PENDING : return{
            ...state,
            isLoading:true
        }
        case GET_CONCOURS_SUCCESS: return{
            ...state,
            isLoading:false,
            items:action.payload.data
        }
        case GET_CONCOURS_FAILURE: return{
            ...state,
            isLoading: false,
            error: action.payload.error
        }
        default: return state
    }
}