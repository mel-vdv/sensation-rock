import React, { useEffect, useState } from 'react'
import { fetchListeQ, majStateListeQ, supprQuestion, visibleAddQ, visibleModifQ } from '../../lib/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import ModifQ from './modifQ';
import AddQ from './addQ';

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
    <button onClick={() => visAddQu()}>Ajouter une nouvelle question</button>
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
                  1 :{x['Proposition A']} <br />
                  2 :{x['Proposition B']} <br />
                  3 :{x['Proposition C']} <br />
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