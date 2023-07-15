import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addConcours, visibleAddEv } from '../../lib/redux/actions';
import './admin.css';

const AddEv = () => {

    const initialEv = {
        intitulé: "",
        description: "",
        quand: undefined,
        lieu: '',
        thème: '',

        prix: undefined,
        taille: undefined,
        gain: "",
        nbGagnants: undefined,

        début: undefined,
        fin: undefined,

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

        emailAnn: "",

        pub: false,
        'affiche-g': false,
        'affiche-m': false,
        'affiche-p': false,



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
        alert("première étape d'ajout de nouvel évenement réussie, maintenant ajoutez une publicité et une image d'affiche");
    }
    ////////////////////////////////////////////////
    ////////////////////////////////////////////////
    return (
        <div className='addEv'>
            <header><h3>AJOUTER UN EVENEMENT</h3></header>

            <form onSubmit={() => ajouterEvent()}>

                <div className='rubrique'>L'évènement</div>
                <div>
                    <label for="intitule">Intitulé de l'évènement</label>
                    <input id='intitule' type='text' onChange={(e) => setNewEv({ ...newEv, intitulé: e.target.value })} value={newEv.intitulé} required /></div>

                <div>
                    <label for="categ">Thème</label>
                    <div id='categ' onChange={(e) => setNewEv({ ...newEv, thème: e.target.value })}>
                        <input type='radio' value='théâtre' name='categ' /> Théâtre
                        <input type='radio' value='cinéma' name='categ' /> Cinéma
                        <input type='radio' value='musique' name='categ' /> Musique
                        <input type='radio' value='jeux' name='categ' /> Jeux
                        <input type='radio' value='gastronomie' name='categ' /> Gastronomie
                        <input type='radio' value='sport' name='categ' /> Sport
                        <input type='radio' value='com' name='categ' /> Commerces locaux
                        <input type='radio' value='divers' name='categ' /> Divers
                    </div>
                </div>
                <div>
                    <label for="descr">Description</label>
                    <textarea id='descr' value={newEv.description} onChange={(e) => setNewEv({ ...newEv, description: e.target.value })} required></textarea></div>
                <div>
                    <label for="prix"> Prix </label>
                    <input id='prix' type='number' value={newEv.prix} onChange={(e) => setNewEv({ ...newEv, prix: +e.target.value })} required />
                </div>
                <div>
                    <label for="lieu">Lieu</label>
                    <input id='lieu' type='text' value={newEv.lieu} onChange={(e) => setNewEv({ ...newEv, lieu: e.target.value })} required /></div>
                <div>
                    <label for="date">Date</label>
                    <input id='date' type='date' value={newEv.quand} onChange={(e) => setNewEv({ ...newEv, quand: e.target.value })} required />
                </div>
                <div className='rubrique'>Le concours</div>
                <div>
                    <label for="gain">Accroche sur le gain</label>
                    <input id='gain' type='text' onChange={(e) => setNewEv({ ...newEv, gain: e.target.value })} value={newEv.gain} required /></div>
                <div>
                    <label for="nbGagnants">Nombre de gagnants</label>
                    <input id='nbGagnants' type='number' onChange={(e) => setNewEv({ ...newEv, nbGagnants: e.target.value })} value={newEv.nbGagnants} required /></div>
                <div>
                    <label for="emailAnn">Email de l'annonceur</label>
                    <input id='emailAnn' type='email' value={newEv.emailAnn} onChange={(e) => setNewEv({ ...newEv, emailAnn: e.target.value })} required />

                </div>
                <div>
                    <label for="debut">Date du début du concours </label>
                    <input id="debut" type='date' value={newEv.début} onChange={(e) => setNewEv({ ...newEv, début: e.target.value })} required /></div>
                <div>
                    <label for="fin">Date de fin du concours</label>
                    <input id="fin" type='date' value={newEv.fin} onChange={(e) => setNewEv({ ...newEv, fin: e.target.value })} required /></div>
                <div className='rubrique'>Les questions</div>
                <div>
                    <label for="nbQtot">Nombre total de question </label>
                    <input id="nbQtot" type='number' value={newEv.nbQtot} onChange={(e) => setNewEv({ ...newEv, nbQtot: +e.target.value })} required />
                </div>
                <div>
                    <label for="nbQspe">Nombre de questions spécifiques</label>
                    <input id='nbQspe' type='number' value={newEv.nbQspe} onChange={(e) => setNewEv({ ...newEv, nbQspe: +e.target.value })} required />
                </div>
                <div>
                    <label for="nbQperso" >Nombre de Questions liées aux goûts personnels du joueur </label>
                    <input id='nbQperso' type='number' value={newEv.nbQperso} onChange={(e) => setNewEv({ ...newEv, nbQperso: +e.target.value })} required />
                </div>
                <div>
                    <label for="nbQgen">Nombre de questions générales </label>
                    <input id='nbQgen' type='number' value={newEv.nbQgen} onChange={(e) => setNewEv({ ...newEv, nbQgen: +e.target.value })} required />
                </div>
                <div>
                    <label for="nbSecRep1">Nombre de secondes pour répondre à une question de valeur 1</label>
                    <input id='nbSecRep1' min={5} max={60} type='number' value={newEv.nbSecRep1} onChange={(e) => setNewEv({ ...newEv, nbSecRep1: +e.target.value })} required />
                </div>
                <div>
                    <label for="nbSecRep2">Nombre de secondes pour répondre à une question de valeur 2</label>
                    <input id='nbSecRep2' min={5} max={60} type='number' value={newEv.nbSecRep2} onChange={(e) => setNewEv({ ...newEv, nbSecRep2: +e.target.value })} required />
                </div>
                <div>
                    <label for="nbSecRep3">Nombre de secondes pour répondre à une question de valeur 3</label>
                    <input id='nbSecRep3' min={5} max={60} type='number' value={newEv.nbSecRep3} onChange={(e) => setNewEv({ ...newEv, nbSecRep3: +e.target.value })} required />
                </div>
                <div>
                    <label for="nbSecRep4">Nombre de secondes pour répondre à une question de valeur 4</label>
                    <input id='nbSecRep4' min={5} max={60} type='number' value={newEv.nbSecRep4} onChange={(e) => setNewEv({ ...newEv, nbSecRep4: +e.target.value })} required />
                </div>
                <div>
                    <label for="nbSecRep5">Nombre de secondes pour répondre à une question de valeur 5</label>
                    <input id='nbSecRep5' min={5} max={60} type='number' value={newEv.nbSecRep5} onChange={(e) => setNewEv({ ...newEv, nbSecRep5: +e.target.value })} required />
                </div>
                <div className='rubrique'>Les publicités</div>
                <div>
                    <label for="nbSecPub">Nombre de secondes d'affichage de la publicité  </label>
                    <input id="nbSecPub" type='number' min={1} max={20} value={newEv.nbSecPub} onChange={(e) => setNewEv({ ...newEv, nbSecPub: +e.target.value })} required />
                </div>
                <div>
                    <label for="nbQPub">Nombre de questions entre 2 publicités </label>
                    <input id='nbQPub' type='number' value={newEv.nbQPub} onChange={(e) => setNewEv({ ...newEv, nbQPub: +e.target.value })} required />
                </div>
                
                <div>
                    <label for='taille'>Taille de l'affichage</label>
                    <div id='taille' onChange={(e) => setNewEv({ ...newEv, taille: e.target.value })} required>
                        <input type='radio' value={1} name='taille' checked={newEv.taille==1}/> Affichage basique
                        <input type='radio' value={2} name='taille' checked={newEv.taille==2} /> Affichage + visible
                        <input type='radio' value={3} name='taille' checked={newEv.taille==3} /> Affichage premium banderolle du site
                    </div>
                </div>
                

                <button type='submit'>Enregistrer ce nouvel évènement</button>
            </form>

            <button className='retour' onClick={() => close()}>Retour à la liste des évènements</button>
        </div>
    )
}

export default AddEv