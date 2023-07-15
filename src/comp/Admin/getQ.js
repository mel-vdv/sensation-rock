import React, { useEffect, useState } from 'react'
import { fetchListeQ, majStateListeQ, supprQuestion, visibleAddQ, visibleModifQ } from '../../lib/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import ModifQ from './modifQ';
import AddQ from './addQ';
import './admin.css';

const GetQ = () => {
  
  const dispatch = useDispatch();
  const stateQuest = useSelector(state => ({ ...state.listeQRed }));
  const stateVis = useSelector(state => ({ ...state.visibleRed }));
//---------------------------------------------------------
const [questModif, setQuestModif] = useState(null);
//---------------------------------------------------------
  useEffect(()=>{
    dispatch(fetchListeQ());
  },[]);
    
  const visAddQu = () => {
    dispatch(visibleAddQ(true));
  }
  const visModifQu = (q) => {
    setQuestModif(q);
    dispatch(visibleModifQ(true));
  }
  const supprQuest = (idQ,quest) => {
    dispatch(supprQuestion(idQ)).then(()=>dispatch(majStateListeQ(idQ)));
    alert(`question ${quest} supprimée avec succès.`);
  }
//---------------------------------------------------------
  return (
    <div className='getQ'>
    <h2>LES QUESTIONS</h2>
    {!stateVis.addQ && !stateVis.modifQ && 
    <button onClick={() => visAddQu()}>Ajouter une nouvelle question</button>
    }
    {stateQuest.isLoading && <div> is loading....</div>}
    {(!stateQuest.isLoading && !stateQuest.items) &&
    <div>is loading non : pas de items...</div>
    }
    {(!stateQuest.isLoading && !!stateQuest.items && !stateVis.addQ && !stateVis.modifQ) && <>
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>Propositions</th>
              <th>Réponse</th>
              <th>Catégorie</th>
              <th>Valeur</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stateQuest.items.map((x, i) => (
              <tr key={i}>
                <td>{x.Question}</td>
                <td>
                  <div className={x['Réponse']==1? 'correct':'incorrect'}>1 : {x['Proposition A']}</div>
                  <div className={x['Réponse']==2? 'correct':'incorrect'}>2 : {x['Proposition B']} </div>
                  <div className={x['Réponse']==3? 'correct':'incorrect'}>3 : {x['Proposition C']}</div>
                </td>
                <td>{x['Réponse']}</td>
                <td>{x.Catégorie}</td>
                <td>{x.Valeur}</td>
                <td>
                  <button onClick={() => supprQuest(x['_id'], x.Question)}>Supprimer la question {x.Question}</button>
                  <button onClick={() => visModifQu(x)}>Modifier la question {x.Question} </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>}
      
      {stateVis.addQ && <AddQ/>}
      {(stateVis.modifQ && !!questModif) && <ModifQ question={questModif} />}
    </div>
  )
}

export default GetQ