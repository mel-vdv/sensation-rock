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
//-----------------------   users
export const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:5000/api/users')
            .then((resp, err) => {
                if (err||!resp) {return reject(err); }
                else {
                    resolve(resp.data);
                }

            })
            .catch(err => console.error(err.message));
    })

}
//-----------------------   concours

export const getConcours = () => {

    return new Promise((resolve, reject) => {
        axios.get('http://localhost:5000/api/concours') ///////////////////////////IMPORTANT DE NOTER https localhost...
            .then((response, erreur) => {
                if (erreur || !response) {
                    return reject(erreur);
                }
                else {
                    resolve(response.data); ///////////////////////////// IMPORTANT .DATA
                }
            })
            .catch(err => console.error(err.message));
    });
};
//-------POST
export const postConcours = (data) => {
    axios.post('http://localhost:5000/api/concours/add', data)
        .then(() => console.log('ok, new concours ajouté'))
        .catch(err => console.error(err.message));
}

//----------------------    questions
//GET
export const getQuestions = () => {

    return new Promise((resolve, reject) => {
        axios.get('http://localhost:5000/api/questions')
            .then((response, erreur) => {
                if (erreur || !response) {
                    return reject(erreur);
                }
                else {
                    resolve(response.data);
                }
            })
            .catch(err => console.error(err.message));
    });
};
//POST !! pas de promise
export const postQuestion = (data) => {
    axios.post('http://localhost:5000/api/questions/add', data)
        .then(() => console.log('ok, questions ajoutée'))
        .catch(err => console.error(err.message));
}
// PUT !!! pas de promise
export const deleteQuest= (idQ) => {
    axios.put('http://localhost:5000/api/questions/suppr', {id : idQ}) // PUT ET NON UPDATE // et dans req.body = un objet toujours
        .then((resp) => console.log(resp))
        .catch(err => console.log('pb', err));

}

//----------------------    admin réglages
export const getReglages = () => {

    return new Promise((resolve, reject) => {
        axios.get('http://localhost:5000/api/reglages')
            .then((response, erreur) => {
                if (erreur || !response) {
                    return reject(erreur);
                }
                else {
                    resolve(response.data[0]); ///////////////////////////////////// MEGA IMPORTANT QUAND IL Y A QUE 1 DOCUMENT
                }
            })
            .catch(err => console.error(err.message));
    });
};
// PUT !!! pas de promise
export const updateReglages = (reglModif) => {
    console.log(' service : update', reglModif);
    axios.put('http://localhost:5000/api/reglages/modif', reglModif) // PUT ET NON UPDATE 
        .then((resp) => console.log(resp))
        .catch(err => console.log('pb', err));

}




