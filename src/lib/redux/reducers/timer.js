import { MODIF_TIMER, STOP_TIMER } from "../actions/types";

const initialState={
    timer:0
}

export const timerReducer = (state= initialState, action)=>{
    switch(action.type){
    case MODIF_TIMER: 
    return {
        ...state, timer : state.timer + 1
    }
    case STOP_TIMER : 
    return{
        ...state, timer:0
    }
    default:
    return state;

    }
}