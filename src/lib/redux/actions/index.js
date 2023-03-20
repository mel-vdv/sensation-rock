import { getConcours } from "../../service";
import { GET_CONCOURS_FAILURE, GET_CONCOURS_PENDING, GET_CONCOURS_SUCCESS } from "./types";

export function getConcoursPending (){
    return{
        type: GET_CONCOURS_PENDING
    }
}
export function getConcoursSuccess (data){
    return{
        type: GET_CONCOURS_SUCCESS, 
        payload: {data}
    }
}
export function getConcoursFailure(error){
    return{
        type: GET_CONCOURS_FAILURE,
        payload:{error}
    }
}

//-----------------------------------------------------------------------------------------------
export const fetchConcours = ()=>{
    return async function(dispatch){
        dispatch(getConcoursPending);
        getConcours()
        .then((data)=>dispatch(getConcoursSuccess(data)))
        .catch((err)=>dispatch(getConcoursFailure(err)))
    }
}
