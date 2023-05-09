import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addConcours, visibleAddEv } from '../../lib/redux/actions';

const AddEv = () => {

    const initialEv = {
        intitulé: "",
        description: "",
        quand: undefined,
        lieu: '',
        catégorie : '',
        prix: undefined,
        taille: undefined,
        début: undefined,
        fin: undefined,

        nbSessMax: undefined,
        nbMinParSess: undefined,
        nbQtot: undefined,
        nbQspe: undefined,
        nbQperso: undefined,
        nbQgen: undefined,

        nbSecRep1: undefined,
        nbSecRep2: undefined,
        nbSecRep3: undefined,
        nbSecRep4: undefined,
        nbSecRep5: undefined,

        nbSecPub: undefined,
        nbQPub: undefined,


    }
    const [newEv, setNewEv] = useState(initialEv);
    ////////////////////////////////////////////////
    const dispatch = useDispatch();
    //---------------
    const close = () => {
        dispatch(visibleAddEv(false))
    }
    //---------------
    const ajouterEvent = () => {
        dispatch(addConcours(newEv));
        alert('nouvel évenement ajouté avec succès');
    }
    ////////////////////////////////////////////////
    ////////////////////////////////////////////////
    return (
        <div className='addEv'>
            <header><h2>AJOUTER UN EVENEMENT</h2></header>

            <form onSubmit={() => ajouterEvent()}>

                <label for="intitule">Intitulé de l'évènement</label>
                <input id='intitule' type='text' onChange={(e) => setNewEv({ ...newEv, intitulé: e.target.value })} value={newEv.intitulé} required/>

                <label for="descr">Description</label>
                <textarea id='descr' value={newEv.description} onChange={(e) => setNewEv({ ...newEv, description: e.target.value })} required></textarea>

                <label for="date">Date</label>
                <input id='date' type='date' value={newEv.quand} onChange={(e) => setNewEv({ ...newEv, quand: e.target.value })} required/>

                <label for="lieu">Lieu</label>
                <input id='lieu' type='text' value={newEv.lieu} onChange={(e) => setNewEv({ ...newEv, lieu: e.target.value })} required/>

                <label for="categ">Catégorie </label>
                <input id='categ' type='text' value={newEv.catégorie} onChange={(e) => setNewEv({ ...newEv, catégorie: e.target.value })}required/>

                <label for="prix"> Prix </label>
                <input id='prix' type='number' value={newEv.prix} onChange={(e) => setNewEv({ ...newEv, prix: e.target.value })} required/>

                <label for='taille'>Taille</label>
                <input id='taille' type='number' value={newEv.taille} onChange={(e) => setNewEv({ ...newEv, taille: e.target.value })} required/>

                <label for="debut">Date du début du concours </label>
                <input id="debut" type='date' value={newEv.début} onChange={(e) => setNewEv({ ...newEv, début: e.target.value })} required/>

                <label for="fin">Date de fin du concours</label>
                <input id="fin" type='date' value={newEv.fin} onChange={(e) => setNewEv({ ...newEv, fin: e.target.value })} required/>

                <label for="nbSessMax">Nombre de sessions maximales</label>
                <input id='nbSessMax' type='number' value={newEv.nbSessMax} onChange={(e) => setNewEv({ ...newEv, nbSessMax: e.target.value })} required />

                <label for="nbMinParSess" >Nombre de minutes maximum par session </label>
                <input id="nbMinParSess" type='number' value={newEv.nbMinParSess} onChange={(e) => setNewEv({ ...newEv, nbMinParSess: e.target.value })} required/>
                
                <label for="nbQtot">Nombre total de question </label>
                <input id="nbQtot" type='number' value={newEv.nbQtot} onChange={(e) => setNewEv({ ...newEv, nbQtot: e.target.value })} required/>

                <label for="nbQspe">Nombre de questions spécifiques</label> 
                <input id='nbQspe' type='number' value={newEv.nbQspe} onChange={(e) => setNewEv({ ...newEv, nbQspe: e.target.value })} required/>
                
                <label for="nbQperso" >Nombre de Questions liées aux goûts personnels du joueur </label>
                <input id='nbQperso' type='number' value={newEv.nbQperso} onChange={(e) => setNewEv({ ...newEv, nbQperso: e.target.value })} required/>
                
                <label for="nbQgen">Nombre de questions générales </label>
                <input id='nbQgen' type='number' value={newEv.nbQgen} onChange={(e) => setNewEv({ ...newEv, nbQgen: e.target.value })} required/>

                <label for="nbSecRep1">Nombre de secondes pour répondre à une question de valeur 1</label>
                <input id='nbSecRep1' type='number' value={newEv.nbSecRep1} onChange={(e) => setNewEv({ ...newEv, nbSecRep1: e.target.value })} required/>
                <label for="nbSecRep2">Nombre de secondes pour répondre à une question de valeur 2</label>
                <input id='nbSecRep2' type='number' value={newEv.nbSecRep1} onChange={(e) => setNewEv({ ...newEv, nbSecRep2: e.target.value })} required/>
                <label for="nbSecRep3">Nombre de secondes pour répondre à une question de valeur 3</label>
                <input id='nbSecRep3' type='number' value={newEv.nbSecRep1} onChange={(e) => setNewEv({ ...newEv, nbSecRep3: e.target.value })} required />
                <label for="nbSecRep4">Nombre de secondes pour répondre à une question de valeur 4</label>
                <input id='nbSecRep4' type='number' value={newEv.nbSecRep1} onChange={(e) => setNewEv({ ...newEv, nbSecRep4: e.target.value })} required/>
                <label for="nbSecRep5">Nombre de secondes pour répondre à une question de valeur 5</label>
                <input id='nbSecRep5' type='number' value={newEv.nbSecRep1} onChange={(e) => setNewEv({ ...newEv, nbSecRep5: e.target.value })} required/>

                <label for="nbSecPub">Nombre de secondes d'affichage de la publicité : </label>
                <input id="nbSecPub" type='number' value={newEv.nbSecPub} onChange={(e) => setNewEv({ ...newEv, nbSecPub: e.target.value })} required/>

                <label for="nbQPub">Nombre de questions entre 2 publicités </label>
                <input id='nbQPub' type='number' value={newEv.nbQPub} onChange={(e) => setNewEv({ ...newEv, nbQPub: e.target.value })} required />

                <button type='submit'>Enregistrer ce nouvel évènement</button>
            </form>

            <button onClick={() => close()}>Retour à la liste des évènements</button>
        </div>
    )
}

export default AddEv