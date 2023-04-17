import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { modifQuestion, visibleModifQ } from '../../lib/redux/actions';

const ModifQ = ({question}) => {



const dispatch = useDispatch();
const[qMod, setqMod]= useState(question);
//-------------------------
const modifierQuestion= ()=>{
    dispatch(modifQuestion(qMod));
}
//-------------------------
const visMod = (ouinon)=>{
    dispatch(visibleModifQ(ouinon))
}
//-------------------------

  return (
    <div className='modifQ'>

<h2>MODIFIER LA QUESTION</h2>
   <form onSubmit={()=>modifierQuestion()}>

            <input type='text' onChange={(e)=>setqMod({...qMod, Question : e.target.value})} value={qMod.Question}/>
            <input type='text' onChange={(e)=>setqMod({...qMod, 'Proposition A' : e.target.value})} value={qMod['Proposition A']}/>
            <input type='text' onChange={(e)=>setqMod({...qMod, 'Proposition B' : e.target.value})} value={qMod['Proposition B']}/>
            <input type='text' onChange={(e)=>setqMod({...qMod, 'Proposition C' : e.target.value})} value={qMod['Proposition C']}/>
            <input type='text' onChange={(e)=>setqMod({...qMod, Valeur : e.target.value})} value={qMod.Valeur}/>
            <input type='text' onChange={(e)=>setqMod({...qMod, Réponse : e.target.value})} value={qMod.Réponse}/>
            <input type='text' onChange={(e)=>setqMod({...qMod, Catégorie : e.target.value})} value={qMod.Catégorie}/>
            <input type='submit' value="valider les modifications"/>
        </form>

        <button onClick={()=>visMod(false)}>retour à la liste de questions</button>
    </div>
  )
}

export default ModifQ