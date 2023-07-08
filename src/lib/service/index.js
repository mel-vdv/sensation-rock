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
//----------------------------- user ID (après connexion);
export const getUserId = (emailU) => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:5000/api/user/' + emailU)
            .then((resp, er) => {
                if (er || !resp) {
                    return reject(er);
                }
                else {
                    resolve(resp.data);
                }
            })
            .catch(err => console.error(err.message));
    })
}
export const postUser = (data) => {
    console.log(data);
    axios.post('http://localhost:5000/api/users/add', data)
        .then(() => console.log('ok, new user ajouté'))
        .catch(err => console.error(err.message));
}
//----------------------     emails
export const postAdresseNL = (email) => {
    axios.post("/api/newsletters/add", { email: email })
        .then(() => console.log('ok, new email ajouté'))
        .catch(err => console.error(err.message));
}
//-----------------------   users
export const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:5000/api/users')
            .then((resp, err) => {
                if (err || !resp) { return reject(err); }
                else {
                    resolve(resp.data);
                }

            })
            .catch(err => console.error(err.message));
    })

}//------------
export const getUserExiste = (pseudo, email) => {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:5000/api/user/${pseudo}/${email}`)
            .then((resp, err) => {
                if (err || !resp) {
                    return reject(err);
                }
                else {
                    resolve(resp.data);
                }

            })
    })
}
//-------------------
export const updateUser = (idU, objet) => {
    axios.put('http://localhost:5000/api/user/modif/' + idU, objet)
        .then(() => console.log('ok,user modifié'))
        .catch(err => console.error(err.message));

}
//-------------
export const deleteUser = idu => {
    axios.put('http://localhost:5000/api/user/suppr/' + idu)
        .then(() => console.log('ok,user supprimé'))
        .catch(err => console.error(err.message));
}
//-----------------------   podium
export const getPodium = (idU, idEv) => {
    console.log('pod serv');
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:5000/api/podium/' + idU + '/' + idEv)
            .then((response, erreur) => {
                if (erreur || !response) {
                    return reject(erreur);
                }
                else {
                    let bibi = response.data[0].participants
                        .sort((a, b) => { return b.nbPt - a.nbPt; });

                    if (bibi.length > 10) {
                        console.log('cut');
                        let jojo = bibi.slice(0, 10);
                        resolve(jojo);
                    }
                    else { resolve(bibi); }
                    ///////////////////////////// IMPORTANT .DATA
                }
            })
            .catch(err => console.error(err.message));
    })
}
//-----------------------   score 
//GET : TOUJOURS PROMISE !!!!!!
export const getScore = (idU, idEv) => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:5000/api/score/' + idU + '/' + idEv)
            .then((response, erreur) => {
                if (erreur || !response) {
                    return reject(erreur);
                }
                else {
                    let bibi = response.data[0].concours.filter(e => e.idEv === idEv)[0];
                    resolve(bibi); ///////////////////////////// IMPORTANT .DATA
                }
            })
            .catch(err => console.error(err.message));
    })
}
// update (on crée)
export const initScore = (idU, obj) => {
    axios.put('http://localhost:5000/api/score/add/' + idU, obj)
        .then(() => console.log('ok,score init'))
        .catch(err => console.error(err.message));
}
//UPDATE 
export const updateScore = (idU, obj) => {
    axios.put('http://localhost:5000/api/score/modif/' + idU, obj)
        .then(() => console.log('ok,score modifié'))
        .catch(err => console.error(err.message));


}
//UPDATE PARTICIPANTS DU CONCOURS : incrementer le score
export const updateParticipants = (idev, idu, n) => {
    console.log('etape 2 service', idev, idu, n);
    axios.put(`/api/concours/modif/participants/${idev}/${idu}`, { n: n })
        .then(() => console.log('ok,concours>participants>nbpt modifié'))
        .catch(err => console.error(err.message));


}

//-----------------------   concours

export const getConcours = () => {
    // GET multi
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
//--- GET ONE
export const getEventId = (idEv) => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:5000/api/event/' + idEv) ///////////////////////////IMPORTANT DE NOTER https localhost...
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
export const updateConcours = (evMod) => {
    console.log('3', evMod['_id']);
    axios.put('http://localhost:5000/api/concours/modif', evMod)
        .then(() => console.log('ok, event modifié'))
        .catch(err => console.error(err.message));
}
// PUT !!! pas de promise, si on met put ici, il faut aussi put dans la route du server
export const deleteConcours = (idEv) => {
    axios.put('http://localhost:5000/api/concours/suppr', { id: idEv }) // PUT ET NON UPDATE // et dans req.body = un objet toujours
        .then((resp) => console.log(resp))
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
                    console.log(response.data[0]);
                    resolve(response.data);
                }
            })
            .catch(err => console.error(err.message));
    });
};
//----------------------   liste de questions générales / parametre = limit
//GET
export const getListeQ = (limit) => {

    return new Promise((resolve, reject) => {
        axios.get('http://localhost:5000/api/liste-generale/' + limit)
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
//----------------------   liste de questions perso / parametre = limit et gouts
//GET
export const getListeQPerso = (limit, gouts) => {
    let goutsUser = { gouts: gouts };
    return new Promise((resolve, reject) => {
        axios.put('http://localhost:5000/api/liste-perso/' + limit, goutsUser)
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
//----------------------   liste de questions perso / parametre = limit et gouts
//GET
export const getListeQSpe = (idEv, limit) => {
    console.log(idEv, limit);
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:5000/api/liste-spe/' + idEv + '/' + limit)
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
export const postQuestionSpe = (data, idEv) => {
    axios.post(`/api/questionspe/add/${idEv}`, data)
        .then(() => console.log('ok, question spe ajoutée'))
        .catch(err => console.error(err.message));
}
export const updateQuestion = (qMod) => {
    axios.put('http://localhost:5000/api/questions/modif', qMod)
        .then(() => console.log('ok, questions modifiée'))
        .catch(err => console.error(err.message));
}
export const updateQuestionSpe = (qMod, idEv) => {
    axios.put(`/api/questionspe/modif/${idEv}`, qMod)
        .then(() => console.log('ok, questions spe modifiée'))
        .catch(err => console.error(err.message));
}
// PUT !!! pas de promise
export const deleteQuest = (idQ) => {
    axios.put('http://localhost:5000/api/questions/suppr', { id: idQ }) // PUT ET NON UPDATE // et dans req.body = un objet toujours
        .then((resp) => console.log(resp))
        .catch(err => console.log('pb', err));

}
export const deleteQuestSpe = (idQ, idEv) => {
    axios.put('http://localhost:5000/api/questionspe/suppr', { idQ: idQ, idEv: idEv }) // PUT ET NON UPDATE // et dans req.body = un objet toujours
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
//---------------------------- envoi messages
export const postFormContact = (formul) => {
    axios.post('http://localhost:5000/api/msg/contact', formul)
        .then(() => console.log('ok, form contact ajouté et envoyé email'))
        .catch(err => console.error(err.message));
}
export const postDemande = (email) => {
    axios.post('http://localhost:5000/api/msg/demande', { email: email })
        .then(() => console.log('ok, demande infos annonceurs envoyée email'))
        .catch(err => console.error(err.message));
}



