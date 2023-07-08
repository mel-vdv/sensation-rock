import { GET_USER_EXISTE } from "../actions/types"

const initialState={
    items:[] ,
    verif:false
}

export const verifInscrReducer= (state= initialState, action)=>{
    switch(action.type){
        case GET_USER_EXISTE: return{
            ...state, verif:true, items: action.payload.tabUsers
        }
        default: return state;
    }
}