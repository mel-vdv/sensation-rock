/*
FAUSSES DATA TEMPORAIRES :

import {data} from './../../data/concours'

export const getConcours = ()=>{
    return new Promise ((resolve)=>{
        resolve(data);
    });
}
*/
import axios from "axios";
//-----------------------   concours

export const getConcours= () => {

    return new Promise((resolve, reject)=>{
        axios.get('http://localhost:5000/api/concours') ///////////////////////////IMPORTANT DE NOTER https localhost...
        .then((response, erreur)=>{
            if(erreur||!response){
                return reject(erreur);
            }
            else{
                resolve(response.data); ///////////////////////////// IMPORTANT .DATA
            }  
        })
        .catch(err => console.error(err.message));
    });
};

//----------------------    questions
export const getQuestions= () => {

    return new Promise((resolve, reject)=>{
        axios.get('http://localhost:5000/api/questions') 
        .then((response, erreur)=>{
            if(erreur||!response){
                return reject(erreur);
            }
            else{
                resolve(response.data); 
            }  
        })
        .catch(err => console.error(err.message));
    });
};


//----------------------    admin réglages
export const getReglages= () => {

    return new Promise((resolve, reject)=>{
        axios.get('http://localhost:5000/api/reglages') 
        .then((response, erreur)=>{
            if(erreur||!response){
                return reject(erreur);
            }
            else{
                resolve(response.data[0]); ///////////////////////////////////// MEGA IMPORTANT QUAND IL Y A QUE 1 DOCUMENT
            }  
        })
        .catch(err => console.error(err.message));
    });
};




