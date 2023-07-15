import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { majQuestionsSpe, modifQuestionSpe, visibleModifQspe } from '../../lib/redux/actions';
import './admin.css';
const ModifQspe = ({ question, idEv, nomEv }) => {



  const dispatch = useDispatch();
  const [qMod, setqMod] = useState(question);
  //-------------------------
  const modifierQuestion = () => {
    dispatch(modifQuestionSpe(qMod, idEv));
    dispatch(majQuestionsSpe(qMod));
    alert(`question spécifique ${qMod.Question} modifiée avec succès pour l'évenènement ${nomEv}`);
    visMod(false);
  }
  //-------------------------
  const visMod = (ouinon) => {
    dispatch(visibleModifQspe(ouinon));
  }
  //-------------------------

  return (
    <div className='modifQspe'>

      <header><h3>MODIFIER LA QUESTION SPECIFIQUE</h3></header>

      <form onSubmit={() => modifierQuestion()}>

        <div>
          <label className='grand' htmlFor='quest'>Intitulé de la question</label>
          <input  id='quest' type='text' onChange={(e) => setqMod({ ...qMod, Question: e.target.value })} value={qMod.Question} />
        </div>
        <div>
          <label className='grand' htmlFor='prop-a'>Proposition 1</label>
          <input id='prop-a' type='text' onChange={(e) => setqMod({ ...qMod, 'Proposition A': e.target.value })} value={qMod['Proposition A']} />
        </div>
        <div>
          <label className='grand' htmlFor='prop-b'>Proposition 2</label>
          <input id='prop-b' type='text' onChange={(e) => setqMod({ ...qMod, 'Proposition B': e.target.value })} value={qMod['Proposition B']} />
        </div>
        <div>
          <label className='grand' htmlFor='prop-c'>Proposition 3</label>
          <input id='prop-c' type='text' onChange={(e) => setqMod({ ...qMod, 'Proposition C': e.target.value })} value={qMod['Proposition C']} />
        </div>
        <div>
          <label htmlFor='valeur'>Valeur de la question </label>
          <input id='valeur' type='number' onChange={(e) => setqMod({ ...qMod, Valeur: +e.target.value })} value={+qMod.Valeur} min={1} max={5}/>
        </div>
        <div>
          <label htmlFor='rep'>Numéro de la réponse</label>
          <input id='rep' type='number' onChange={(e) => setqMod({ ...qMod, Réponse: +e.target.value })} value={+qMod.Réponse} min={1} max={3}/>
        </div>
        <button type='submit'>Valider les modifications</button>
      </form>

      <button className='retour' onClick={() => visMod(false)}>Annuler les modifications et Retour à la liste de questions spécifiques</button>
    </div>
  )
}

export default ModifQspe