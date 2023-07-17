import{GET_CONCOURS_FAILURE, GET_CONCOURS_PENDING, GET_CONCOURS_SUCCESS, MAJ_CONCOURS, MAJ_CONCOURS2} from './../actions/types';
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
        case MAJ_CONCOURS: return {
            ...state,
            items: state.items.map( (e)=>{ 
                if(e['_id']===action.payload.ev['_id']){return action.payload.ev;}
                else{return e;}
                })
        }
        case MAJ_CONCOURS2: return {
            ...state,
            items: state.items.map( (e)=>{ 
                if(e['_id']===action.payload.ev['_id']){
                    e['cloturé']= action.payload.ev['cloturé'];
                   return e;
                    }
                    else{ return e;}
                
                })
        }
        default: return state
    }
}