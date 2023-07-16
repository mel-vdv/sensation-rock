import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { majQuestions, modifQuestion, visibleModifQ } from '../../lib/redux/actions';
import './admin.css';

const ModifQ = ({ question }) => {



  const dispatch = useDispatch();
  const [qMod, setqMod] = useState(question);
  //-------------------------
  const modifierQuestion = () => {
    dispatch(modifQuestion(qMod));
    dispatch(majQuestions(qMod));
    alert(`question ${qMod.Question} modifiée avec succès`);
    visMod(false);
  }
  //-------------------------
  const visMod = (ouinon) => {
    dispatch(visibleModifQ(ouinon));
  }
  //-------------------------

  return (
    <div className='modifQ'>

      <h2>MODIFIER LA QUESTION</h2>
      <form onSubmit={modifierQuestion}>
        <div>
          <label htmlFor='quest'>Intitulé de la question</label>
          <input id='quest' type='text' onChange={(e) => setqMod({ ...qMod, Question: e.target.value })} value={qMod.Question} />
        </div>
        <div>
          <label htmlFor='prop-a'>Proposition 1</label>
          <input id='prop-a' type='text' onChange={(e) => setqMod({ ...qMod, 'Proposition A': e.target.value })} value={qMod['Proposition A']} />
        </div>
        <div>
          <label htmlFor='prop-b'>Proposition 2</label>
          <input id='prop-b' type='text' onChange={(e) => setqMod({ ...qMod, 'Proposition B': e.target.value })} value={qMod['Proposition B']} />
        </div>
        <div>
          <label htmlFor='prop-c'>Proposition 3</label>
          <input id='prop-c' type='text' onChange={(e) => setqMod({ ...qMod, 'Proposition C': e.target.value })} value={qMod['Proposition C']} />
        </div>
        <div>
          <label htmlFor='valeur'>Valeur de la question :</label>
          <input id='valeur' type='number' onChange={(e) => setqMod({ ...qMod, Valeur: e.target.value })} value={qMod.Valeur} min={1} max={5} />
        </div>
        <div>
          <label htmlFor='rep'>Numéro de la réponse</label>
          <input id='rep' type='number' onChange={(e) => setqMod({ ...qMod, Réponse: e.target.value })} value={qMod.Réponse} min={1} max={3} />
        </div>
        <div>
          <label htmlFor='categ'>Catégorie de la question</label>
          <div id='categ'onChange={(e) => setqMod({ ...qMod, Catégorie: e.target.value })} required role='radiogroup' aria-label='catégorie'>
            <input type='radio' value='Rock' name='categ' checked={qMod.Catégorie==='Rock'} aria-label='rock'/> Rock
            <input type='radio' value='Pop' name='categ' checked={qMod.Catégorie==='Pop'} aria-label='pop'/> Pop
            <input type='radio' value='Pop Rock' name='categ' checked={qMod.Catégorie==='Pop Rock'} aria-label='pop rock'/> Pop Rock
            <input type='radio' value='Rap' name='categ' checked={qMod.Catégorie==='Rap'} aria-label='rap'/> Rap
            <input type='radio' value='Folk' name='categ' checked={qMod.Catégorie==='Folk'} aria-label='folk'/> Folk
            <input type='radio' value='Reggae' name='categ' checked={qMod.Catégorie==='Reggae'} aria-label='reggae'/> Reggae
            <input type='radio' value='Electro' name='categ' checked={qMod.Catégorie==='Electro'} aria-label='electro'/> Electro
            <input type='radio' value='Jazz' name='categ' checked={qMod.Catégorie==='Jazz'} aria-label='jazz'/> Jazz
            <input type='radio' value='Variété' name='categ' checked={qMod.Catégorie==='Variété'} aria-label='variété'/> Variété
            <input type='radio' value='RNB' name='categ' checked={qMod.Catégorie==='RNB'} aria-label='rnb'/> RNB
            <input type='radio' value='Musique Classique' name='categ' checked={qMod.Catégorie==='Musique Classique'} aria-label='musique classique'/> Musique Classique
          </div>
        </div>



        <button type='submit'>Valider les modifications</button>
      </form>

      <button onClick={() => visMod(false)}>Retour à la liste de questions</button>
    </div>
  )
}

export default ModifQ