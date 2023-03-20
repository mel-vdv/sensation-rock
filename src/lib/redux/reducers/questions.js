import { GET_QUESTIONS_FAILURE, GET_QUESTIONS_PENDING, GET_QUESTIONS_SUCCESS } from "../actions/types"

const initialState={
    isLoading:false,
    error:null,
    items:[]
}
//-------------------------
export const questionsReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_QUESTIONS_PENDING: return{
            ...state, 
            isLoading:true
        }
        case GET_QUESTIONS_SUCCESS: return{
            ...state,
            isLoading:false,
            items: action.payload.data
        }
        case GET_QUESTIONS_FAILURE : return{
            ...state,
            isLoading: false,
            error: action.payload.error
        }
        default: return state
    }
}