import React, { useState } from 'react'
import { addQuestion, visibleAddQ, visibleGetQ } from '../../lib/redux/actions';
import { useDispatch } from 'react-redux';
import './admin.css';

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
        <div>
          <label className='grand' htmlFor='question'>Intitulé de la question</label>
          <input type='text' id='question' onChange={(e) => setNewQ({ ...newQ, Question: e.target.value })} value={newQ.Question} required /></div>
        <div>
          <label  className='grand' htmlFor='prop-a'>Proposition 1</label>
          <input type='text' id='prop-a' onChange={(e) => setNewQ({ ...newQ, 'Proposition A': e.target.value })} value={newQ['Proposition A']} required />
        </div>
        <div>
          <label className='grand' htmlFor="prop-b">Proposition 2</label>
          <input type='text' id="prop-b" onChange={(e) => setNewQ({ ...newQ, 'Proposition B': e.target.value })} value={newQ['Proposition B']} required />
        </div>
        <div>
          <label className='grand' htmlFor="prop-c">Proposition 3</label>
          <input type='text' id="prop-c" onChange={(e) => setNewQ({ ...newQ, 'Proposition C': e.target.value })} value={newQ['Proposition C']} required />
        </div>
        <div>
          <label htmlFor='valeur'>Valeur de la question</label>
          <input type='number' id='valeur' onChange={(e) => setNewQ({ ...newQ, Valeur: e.target.value })} value={newQ.Valeur} required  min={1} max={5}/>
        </div>
        <div>
          <label htmlFor="rep" >Numéro de la réponse</label>
          <input type='number' id='rep' onChange={(e) => setNewQ({ ...newQ, Réponse: e.target.value })} value={newQ.Réponse} required  min={1} max={3}/>
        </div>
        <div>
          <label htmlFor='categ'>Catégorie de la question</label>
          <div id='categ'onChange={(e) => setNewQ({ ...newQ, Catégorie: e.target.value })} required>
            <input type='radio' value='Rock' name='categ' checked={newQ.Catégorie==='Rock'}/> Rock
            <input type='radio' value='Pop' name='categ' checked={newQ.Catégorie==='Pop'}/> Pop
            <input type='radio' value='Pop Rock' name='categ' checked={newQ.Catégorie==='Pop Rock'}/> Pop Rock
            <input type='radio' value='Rap' name='categ' checked={newQ.Catégorie==='Rap'}/> Rap
            <input type='radio' value='Folk' name='categ' checked={newQ.Catégorie==='Folk'}/> Folk
            <input type='radio' value='Reggae' name='categ' checked={newQ.Catégorie==='Reggae'}/> Reggae
            <input type='radio' value='Electro' name='categ' checked={newQ.Catégorie==='Electro'}/> Electro
            <input type='radio' value='Jazz' name='categ' checked={newQ.Catégorie==='Jazz'}/> Jazz
            <input type='radio' value='Variété' name='categ' checked={newQ.Catégorie==='Variété'}/> Variété
            <input type='radio' value='RNB' name='categ' checked={newQ.Catégorie==='RNB'}/> RNB
            <input type='radio' value='Musique Classique' name='categ' checked={newQ.Catégorie==='Musique Classique'}/> Musique Classique
          </div>
          
        </div>

        <button type='submit'>Valider cette nouvelle question</button>
      </form>
      <button className='retour' onClick={() => visAddQu()}>Annuler et Retour à la liste de questions</button>

    </div>
  )
}

export default AddQ;