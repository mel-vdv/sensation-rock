import { getConcours,getQuestions, postQuestion,   getAllUsers, postConcours, deleteQuest, updateQuestion, updateConcours, deleteConcours, getUserId, postUser, getEventId, getListeQ, getListeQPerso, getListeQSpe, updateScore, getScore } from "../../service";
import { GET_CONCOURS_FAILURE, GET_CONCOURS_PENDING, GET_CONCOURS_SUCCESS,
    GET_QUESTIONS_FAILURE, GET_QUESTIONS_PENDING, GET_QUESTIONS_SUCCESS,
    QUEL_CONCOURS,
    GET_ALL_USERS_PENDING,GET_ALL_USERS_SUCCESS, GET_ALL_USERS_ERROR, VIS_ADDQ, VIS_MODIFQ, VIS_ADDEV, VIS_MODIFEV, GET_USER_PENDING, GET_USER_SUCCESS, GET_USER_ERROR, VIS_GETEV, VIS_GETQ, VIS_GETUSERS, GET_NEW_USER, GET_EVENT_PENDING, GET_EVENT_SUCCESS, GET_EVENT_ERROR, GET_LISTEQ_PENDING, GET_LISTEQ_SUCCESS, GET_LISTEQ_ERROR, GET_LISTEQ_PERSO_PENDING, GET_LISTEQ_PERSO_SUCCESS, GET_LISTEQ_PERSO_ERROR, GET_LISTEQ_SPE_PENDING, GET_LISTEQ_SPE_SUCCESS, GET_LISTEQ_SPE_ERROR, GET_SCORE_PENDING, GET_SCORE_SUCCESS, GET_SCORE_ERROR, MODIF_SCORE_IMMEDIAT, MODIF_TIMER, STOP_TIMER, VIS_PUB,
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
//----------------------------------------- le score en cours
export function getScorePending(){
    return{ type: GET_SCORE_PENDING}
}
export function getScoreSuccess(data){
    return {type:GET_SCORE_SUCCESS, payload: {data}}
}
export function getScoreError(error){ 
    return {type : GET_SCORE_ERROR, payload: {error}}}
export function modifScoreImmediat(data){
    return {type: MODIF_SCORE_IMMEDIAT, payload: {data}}
}
export const fetchScore=(idu,idev)=>{
    return async function(dispatch){
        dispatch(getScorePending);
        getScore(idu,idev)
        .then((data)=>dispatch(getScoreSuccess(data)))
        .catch((err)=>dispatch(getScoreError(err)));
    }
}
export function modifScore(idu,obj){
    return async function(){
        updateScore(idu,obj)
        .then(()=>console.log('modif score success'))
        .catch(err=>console.error(err.message));
}
}
//----------------------------------------- TIMER
export function modifTimer(){
    return {type:MODIF_TIMER}
}
export function stopTimer(){
    return {type:STOP_TIMER}
}
//----------------------------------------- UN EVENT
export function getEventPending (){
    return{
        type: GET_EVENT_PENDING
    }
}
export function getEventSuccess (data){
    return{
        type: GET_EVENT_SUCCESS, payload: {data}
    }
}
export function getEventError (error){
    return{
        type: GET_EVENT_ERROR, payload: {error}
    }
}
export const fetchEventId = (idEv)=>{
    return async function(dispatch){
        dispatch(getEventPending);
        getEventId(idEv)
        .then((data)=>dispatch(getEventSuccess(data)))
        .catch((err)=>dispatch(getEventError(err)))
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
//----------------------------------------- get liste questions GENERALES
export function getListeQPending (){
    return{
        type: GET_LISTEQ_PENDING
    }
}
export function getListeQSuccess(data){
    return{
        type: GET_LISTEQ_SUCCESS, payload: {data}
    }
}
export function getListeQError (error){
    return{
        type: GET_LISTEQ_ERROR, payload: {error}
    }
}
export const fetchListeQ = (limit)=>{
    return async function(dispatch){
        dispatch(getListeQPending);
        getListeQ(limit)
        .then((data)=>dispatch(getListeQSuccess(data)))
        .catch((err)=>dispatch(getListeQError(err)))
    }
}
//----------------------------------------- get liste questions PERSO
export function getListeQPersoPending (){
    return{
        type: GET_LISTEQ_PERSO_PENDING
    }
}
export function getListeQPersoSuccess(data){
    return{
        type: GET_LISTEQ_PERSO_SUCCESS, payload: {data}
    }
}
export function getListeQPersoError (error){
    return{
        type: GET_LISTEQ_PERSO_ERROR, payload: {error}
    }
}
export const fetchListeQPerso = (limit, gouts)=>{
    return async function(dispatch){
        dispatch(getListeQPersoPending);
        getListeQPerso(limit,gouts)
        .then((data)=>dispatch(getListeQPersoSuccess(data)))
        .catch((err)=>dispatch(getListeQPersoError(err)))
    }
}
//----------------------------------------- get liste questions SPE
export function getListeQSpePending (){
    return{
        type: GET_LISTEQ_SPE_PENDING
    }
}
export function getListeQSpeSuccess(data){
    return{
        type: GET_LISTEQ_SPE_SUCCESS, payload: {data}
    }
}
export function getListeQSpeError (error){
    return{
        type: GET_LISTEQ_SPE_ERROR, payload: {error}
    }
}
export const fetchListeQSpe = (idEv, limit)=>{
    return async function(dispatch){
        dispatch(getListeQSpePending);
        getListeQSpe(idEv,limit)
        .then((data)=>dispatch(getListeQSpeSuccess(data)))
        .catch((err)=>dispatch(getListeQSpeError(err)))
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
export function visiblePub(ouinon){
    return{
        type: VIS_PUB,payload:{ouinon}
    }
}




