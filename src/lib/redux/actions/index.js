import { getConcours, getReglages, getQuestions } from "../../service";
import { GET_CONCOURS_FAILURE, GET_CONCOURS_PENDING, GET_CONCOURS_SUCCESS,
    GET_REGLAGES_FAILURE, GET_REGLAGES_PENDING, GET_REGLAGES_SUCCESS, 
    GET_QUESTIONS_FAILURE, GET_QUESTIONS_PENDING, GET_QUESTIONS_SUCCESS,
    QUEL_CONCOURS } from "./types";

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
export const fetchConcours = ()=>{
    return async function(dispatch){
        dispatch(getConcoursPending);
        getConcours()
        .then((data)=>dispatch(getConcoursSuccess(data)))
        .catch((err)=>dispatch(getConcoursFailure(err)))
    }
}
//-----------------------------------------
export function quelConcours(data){
    return{
        type: QUEL_CONCOURS,
        payload:{data}
    }
}
//------------------------------------
export function getQuestionsPending(){
    return{
        type: GET_QUESTIONS_PENDING
    }
}
export function getQuestionsSuccess(data){
    return{
        type: GET_QUESTIONS_SUCCESS,
        payload:{data}
    }
}
export function getQuestionsFailure(error){
    return{
        type: GET_QUESTIONS_FAILURE,
        payload:{error}
    }
}


export const fetchQuestions = ()=>{
    return async function(dispatch){
        dispatch(getQuestionsPending);
        getQuestions()
        .then((data)=>dispatch(getQuestionsSuccess(data)))
        .catch((err)=>dispatch(getQuestionsFailure(err)))
    }
}

//-----------------------------------------------------------------------------------------------
export function getReglagesPending(){
    return{
        type: GET_REGLAGES_PENDING
    }
}
export function getReglagesSuccess(data){
    return{
        type: GET_REGLAGES_SUCCESS,
        payload:{data}
    }
}
export function getReglagesFailure(error){
    return{
        type: GET_REGLAGES_FAILURE,
        payload:{error}
    }
}


export const fetchReglages = ()=>{
    return async function(dispatch){
        dispatch(getReglagesPending);
        getReglages()
        .then((data)=>dispatch(getReglagesSuccess(data)))
        .catch((err)=>dispatch(getReglagesFailure(err)))
    }
}
