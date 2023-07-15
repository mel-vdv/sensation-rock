import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addQuestionSpe, ajoutQspe, visibleAddQspe } from '../../lib/redux/actions';
import './admin.css';

const AddQspe = ({ nomEv, idEv }) => {

    //---------------------------------------
    const initialQ = {
        Question: "", 'Proposition A': "", 'Proposition B': "", 'Proposition C': "",
        'Réponse': undefined, 'Catégorie': "", 'Valeur': undefined
    }
    const [newQ, setNewQ] = useState(initialQ);
    //---------------------------------------
    const dispatch = useDispatch();

    const ajouterQuestionSpe = () => {
        dispatch(addQuestionSpe(newQ, idEv));
        dispatch(ajoutQspe(newQ));
        alert('question spécifique ajoutée avec succès au quizz ', nomEv);
        setNewQ(initialQ);
        dispatch(visibleAddQspe(false));
    }
    //---------------------------------------
    const visAddQu = () => {
        dispatch(visibleAddQspe(false));
    }
    //---------------------------------------
    return (
        <div className='addQspe'>
            <header>
                <h3>FORMULAIRE D'AJOUT MANUEL D'UNE QUESTION SPECIFIQUE</h3>
            </header>
            <form onSubmit={() => ajouterQuestionSpe()}>
                <div>
                    <label  className='grand'htmlFor='question'>Intitulé de la question</label>
                    <input type='text' id='question' onChange={(e) => setNewQ({ ...newQ, Question: e.target.value })} value={newQ.Question} required />
                </div>
                <div>
                    <label className='grand'htmlFor='prop-a'>Proposition 1</label>
                    <input type='text' id='prop-a' onChange={(e) => setNewQ({ ...newQ, 'Proposition A': e.target.value })} value={newQ['Proposition A']} required />
                </div>
                <div>
                    <label className='grand'htmlFor="prop-b">Proposition 2</label>
                    <input type='text' id="prop-b" onChange={(e) => setNewQ({ ...newQ, 'Proposition B': e.target.value })} value={newQ['Proposition B']} required />
                </div>
                <div>
                    <label className='grand'htmlFor="prop-c">Proposition 3</label>
                    <input type='text' id="prop-c" onChange={(e) => setNewQ({ ...newQ, 'Proposition C': e.target.value })} value={newQ['Proposition C']} required />
                </div>
                <div>
                    <label htmlFor='valeur'>Valeur de la question</label>
                    <input type='number' id='valeur' onChange={(e) => setNewQ({ ...newQ, Valeur: +e.target.value })} value={+newQ.Valeur} required min={1} max={3} />
                </div>
                <div>
                    <label htmlFor="rep" >Numéro de la réponse</label>
                    <input type='number' id='rep' onChange={(e) => setNewQ({ ...newQ, Réponse: +e.target.value })} value={+newQ.Réponse} required min={1} max={5} />
                </div>
                <button type='submit'>Valider cette nouvelle question</button>
            </form>
            <button className='retour' onClick={() => visAddQu()}>Annuler l'ajout et Retour à la liste de questions spécifiques</button>

        </div>
    )
}

export default AddQspe