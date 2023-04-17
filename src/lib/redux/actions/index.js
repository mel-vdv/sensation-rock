import { getConcours, getReglages, getQuestions, postQuestion, updateReglages,  getAllUsers, postConcours, deleteQuest, updateQuestion, updateConcours, deleteConcours, getUserId, postUser } from "../../service";
import { GET_CONCOURS_FAILURE, GET_CONCOURS_PENDING, GET_CONCOURS_SUCCESS,
    GET_REGLAGES_FAILURE, GET_REGLAGES_PENDING, GET_REGLAGES_SUCCESS, 
    GET_QUESTIONS_FAILURE, GET_QUESTIONS_PENDING, GET_QUESTIONS_SUCCESS,
    QUEL_CONCOURS,
    GET_ALL_USERS_PENDING,GET_ALL_USERS_SUCCESS, GET_ALL_USERS_ERROR, VIS_ADDQ, VIS_MODIFQ, VIS_ADDEV, VIS_MODIFEV, GET_USER_PENDING, GET_USER_SUCCESS, GET_USER_ERROR, VIS_GETEV, VIS_GETQ, VIS_GETUSERS, GET_NEW_USER,
   } from "./types";

//////////////////////////////////////////////////////////////////////////////// USER commence un quizz : 
export function getUserIdPending(){
    return{
        type :GET_USER_PENDING
    }
}
export function getUserIdSuccess(data){
    return{
        type :GET_USER_SUCCESS,
        payload: {data}
    }
}
export function getUserIdError(error){
    return{
        type :GET_USER_ERROR,
        payload : {error}
    }
}
export function getNewUser(user){
    return{
        type :GET_NEW_USER,
        payload : {user}
    }
}
export const fetchUserId = (emailUser)=>{
    return async function(dispatch){
        dispatch(getUserIdPending);
        getUserId(emailUser)
        .then((data)=>
        dispatch(getUserIdSuccess(data))

        )
        .catch((err)=>dispatch(getUserIdError(err)))
    }
}
export function addNewUser(newUser){
    return async function(){
        postUser(newUser)
        .then(()=>console.log('ajout user success'))
        .catch(err=>console.error(err.message));
}
}
//////////////////////////////////////////////////////////////////////////////// USERS
export function getAllUsersPending (){
    return {
        type : GET_ALL_USERS_PENDING,
    }
}
export function getAllUsersSuccess (data){
    return {
        type : GET_ALL_USERS_SUCCESS,payload:{data}
    }
}
export function getAllUsersError (error){
    return {
        type : GET_ALL_USERS_ERROR,payload:{error}
    }
}
export const fetchAllUsers = ()=>{
    return async function(dispatch){
        dispatch(getAllUsersPending);
        getAllUsers()
        .then((data)=>dispatch(getAllUsersSuccess(data)))
        .catch((err)=>dispatch(getAllUsersError(err)))
    }
}
//////////////////////////////////////////////////////////////////////////////// CONCOURS
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
export function addConcours(newEv){
    return async function(){
        postConcours(newEv)
        .then(()=>console.log('ajout event success'))
        .catch(err=>console.error(err.message));
}
}
export function modifConcours(evMod){
    console.log('2');
    return async function(){
        updateConcours(evMod)
        .then(()=>console.log('modif event success'))
        .catch(err=>console.error(err.message));
    }
}
export function supprConcours(idEv){
    return async function(){
        deleteConcours(idEv)
        .then(()=>console.log('ok event suppr'))
        .catch(err=>console.error(err.message));
}
}

//////////////////////////////////////////////////////////////////////////////////  QUESTIONS
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
export function addQuestion(newQuest){
    return async function(){
        postQuestion(newQuest)
        .then(()=>console.log('ajout success'))
        .catch(err=>console.error(err.message));
}
}
export function modifQuestion(qMod){
    return async function(){
        updateQuestion(qMod)
        .then(()=>console.log('ajout success'))
        .catch(err=>console.error(err.message));
    }
}
export function supprQuestion(idQ){
    return async function(){
        deleteQuest(idQ)
        .then(()=>console.log('ok q suppr'))
        .catch(err=>console.error(err.message));
}
}
//////////////////////////////////////////////////////////////////// VISIBILITE DES COMPOSANTS
export function visibleAddQ(ouinon){
    return {
        type : VIS_ADDQ,
        payload:{ouinon}
    }
}
export function visibleAddEv(ouinon){
    return {
        type : VIS_ADDEV,
        payload:{ouinon}
    }
}
export function visibleModifQ(ouinon){
    return {
        type : VIS_MODIFQ,
        payload:{ouinon}
    }
}
export function visibleModifEv(ouinon){
    return {
        type : VIS_MODIFEV,
        payload:{ouinon}
    }
}
export function visibleGetEv(ouinon){
    return {
        type : VIS_GETEV,
        payload:{ouinon}
    }
}
export function visibleGetQ(ouinon){
    return {
        type : VIS_GETQ,
        payload:{ouinon}
    }
}
export function visibleGetUsers(ouinon){
    return {
        type : VIS_GETUSERS,
        payload:{ouinon}
    }
}



////////////////////////////////////////////////////////////////////////////////////////////PARAMETRES
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
export function modifRegl(reglModif){
    console.log('actions : modif regl');
    return async function(){
        updateReglages(reglModif)
        .then(()=>console.log('modif regl ok'))
        .catch(err=>console.error(err.message));
}
}

