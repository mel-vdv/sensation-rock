import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {   majQuestionsSpe, modifQuestionSpe, visibleModifQspe } from '../../lib/redux/actions';
import './admin.css';
const ModifQspe = ({question,idEv, nomEv}) => {



const dispatch = useDispatch();
const[qMod, setqMod]= useState(question);
//-------------------------
const modifierQuestion= ()=>{
    dispatch(modifQuestionSpe(qMod, idEv));
    dispatch(majQuestionsSpe(qMod));
    alert(`question spécifique ${qMod.Question} modifiée avec succès pour l'évenènement ${nomEv}`);
    visMod(false);
}
//-------------------------
const visMod = (ouinon)=>{
    dispatch(visibleModifQspe(ouinon));
}
//-------------------------

  return (
    <div className='modifQspe'>

<h2>MODIFIER LA QUESTION</h2>
   <form onSubmit={()=>modifierQuestion()}>


            <label htmlFor='quest'>Intitulé de la question</label>
            <input id='quest' type='text' onChange={(e)=>setqMod({...qMod, Question : e.target.value})} value={qMod.Question}/>

            <label htmlFor='prop-a'>Proposition 1</label>
            <input id='prop-a' type='text' onChange={(e)=>setqMod({...qMod, 'Proposition A' : e.target.value})} value={qMod['Proposition A']}/>

            <label htmlFor='prop-b'>Proposition 2</label>
            <input id='prop-b' type='text' onChange={(e)=>setqMod({...qMod, 'Proposition B' : e.target.value})} value={qMod['Proposition B']}/>

            <label htmlFor='prop-c'>Proposition 3</label>
            <input id='prop-c' type='text' onChange={(e)=>setqMod({...qMod, 'Proposition C' : e.target.value})} value={qMod['Proposition C']}/>

            <label htmlFor='valeur'>Valeur de la question :</label>
            <input id='valeur' type='text' onChange={(e)=>setqMod({...qMod, Valeur : e.target.value})} value={qMod.Valeur}/>

            <label htmlFor='rep'>Numéro de la réponse</label>
            <input id='rep' type='text' onChange={(e)=>setqMod({...qMod, Réponse : e.target.value})} value={qMod.Réponse}/>

            <label htmlFor='categ'>Catégorie</label>
            <input id='categ' type='text' onChange={(e)=>setqMod({...qMod, Catégorie : e.target.value})} value={qMod.Catégorie}/>
            <button type='submit'>Valider les modifications</button>
        </form>

        <button onClick={()=>visMod(false)}>Retour à la liste de questions</button>
    </div>
  )
}

export default ModifQspe