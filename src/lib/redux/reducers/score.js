import { GET_SCORE_ERROR, GET_SCORE_PENDING, GET_SCORE_SUCCESS, MODIF_SCORE_IMMEDIAT } from "../actions/types"


const initialState= {
  isLoading:false,
  error:null,
  item:null
}
export const scoreReducer = (state= initialState, action)=>{
 switch(action.type){
  case GET_SCORE_PENDING : return {
    ...state, isLoading:true
  }
  case GET_SCORE_SUCCESS: return{
    ...state, isLoading:false, item: action.payload.data[0].concours[0]
  }
  case GET_SCORE_ERROR: return{
    ...state, isLoading:false, error: action.payload.error
  }
  case MODIF_SCORE_IMMEDIAT : return {
    ...state, isLoading:false, item: action.payload.data
  }
  default: return state;
 }
    
}