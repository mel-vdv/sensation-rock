import React, {  useState }  from 'react'
import { addQuestion, visibleAddQ } from '../../lib/redux/actions';
import { useDispatch } from 'react-redux';

const AddQ = () => {
/////////////////////////////////////////////
const initialQ= {
  Question : "",'Proposition A': "", 'Proposition B' : "",'Proposition C': "",
  'Réponse':null,'Catégorie':"",'Valeur':null
}

  const [newQ, setNewQ]= useState(initialQ);
  /////////////////////////////////////////////
  const dispatch = useDispatch();
//----------------------------------------------
    const ajouterQuestion = ()=>{
        dispatch(addQuestion(newQ));
      }
//----------------------------------------------
      const visAddQu = ()=>{
        dispatch(visibleAddQ(false));
        }
///////////////////////////////////////////////
  return (
    <div className='addQ'>
        <h2>AJOUTER UNE QUESTION</h2>

        <form onSubmit={()=>ajouterQuestion()}>

            <input type='text' onChange={(e)=>setNewQ({...newQ, Question : e.target.value})} value={newQ.Question}/>
            <input type='text' onChange={(e)=>setNewQ({...newQ, 'Proposition A' : e.target.value})} value={newQ['Proposition A']}/>
            <input type='text' onChange={(e)=>setNewQ({...newQ, 'Proposition B' : e.target.value})} value={newQ['Proposition B']}/>
            <input type='text' onChange={(e)=>setNewQ({...newQ, 'Proposition C' : e.target.value})} value={newQ['Proposition C']}/>
            <input type='text' onChange={(e)=>setNewQ({...newQ, Valeur : e.target.value})} value={newQ.Valeur}/>
            <input type='text' onChange={(e)=>setNewQ({...newQ, Réponse : e.target.value})} value={newQ.Réponse}/>
            <input type='text' onChange={(e)=>setNewQ({...newQ, Catégorie : e.target.value})} value={newQ.Catégorie}/>
            <input type='submit' value="ajouter"/>
        </form>
        <button onClick={()=>visAddQu()}>retour à la liste de questions</button>
    </div>
  )
}

export default AddQ;