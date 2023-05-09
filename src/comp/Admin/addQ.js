import React, { useState } from 'react'
import { addQuestion, visibleAddQ, visibleGetQ } from '../../lib/redux/actions';
import { useDispatch } from 'react-redux';

const AddQ = () => {
  /////////////////////////////////////////////
  const initialQ = {
    Question: "", 'Proposition A': "", 'Proposition B': "", 'Proposition C': "",
    'Réponse': undefined, 'Catégorie': "", 'Valeur': undefined
  }

  const [newQ, setNewQ] = useState(initialQ);
  /////////////////////////////////////////////
  const dispatch = useDispatch();
  //----------------------------------------------
  const ajouterQuestion = () => {
    dispatch(addQuestion(newQ));
    alert('question ajoutée avec succès');
    setNewQ(initialQ);
  }
  //----------------------------------------------
  const visAddQu = () => {
    dispatch(visibleGetQ(true));
    dispatch(visibleAddQ(false));
  }
  ///////////////////////////////////////////////
  return (
    <div className='addQ'>
      <header>
        <h2>AJOUTER UNE QUESTION</h2>
      </header>


        <form onSubmit={() => ajouterQuestion()}>
          <label htmlFor='question'>Intitulé de la question</label>
          <input type='text' id='question' onChange={(e) => setNewQ({ ...newQ, Question: e.target.value })} value={newQ.Question} required />
          
          <label htmlFor='prop-a'>Proposition 1</label>
          <input type='text' id='prop-a' onChange={(e) => setNewQ({ ...newQ, 'Proposition A': e.target.value })} value={newQ['Proposition A']} required />
          
          <label htmlFor="prop-b">Proposition 2</label>
          <input type='text' id="prop-b" onChange={(e) => setNewQ({ ...newQ, 'Proposition B': e.target.value })} value={newQ['Proposition B']} required />
          
          <label htmlFor="prop-c">Proposition 3</label>
          <input type='text' id="prop-c" onChange={(e) => setNewQ({ ...newQ, 'Proposition C': e.target.value })} value={newQ['Proposition C']} required />
          
          <label htmlFor='valeur'>Valeur de la question</label>
          <input type='number' id='valeur' onChange={(e) => setNewQ({ ...newQ, Valeur: e.target.value })} value={newQ.Valeur} required />

          <label htmlFor="rep" >Numéro de la réponse</label>
          <input type='number' id='rep' onChange={(e) => setNewQ({ ...newQ, Réponse: e.target.value })} value={newQ.Réponse} required />

          <label htmlFor='categ'>Catégorie de la question</label>
          <input type='text' id='categ' onChange={(e) => setNewQ({ ...newQ, Catégorie: e.target.value })} value={newQ.Catégorie} required />
          
          <button type='submit'>Valider cette nouvelle question</button>
        </form>
        <button onClick={() => visAddQu()}>Annuler et Retour à la liste de questions</button>

    </div>
  )
}

export default AddQ;