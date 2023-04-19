import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import ScoreUser from './scoreUser';
import Question from './Question';
import { modifScore } from '../../lib/redux/actions';

const Quizz = () => {

  const stateListeQ = useSelector(state => ({ ...state.listeQRed }));
  const stateListeQperso = useSelector(state => ({ ...state.listeQpersoRed }));
  const stateListeQspe = useSelector(state=>({...state.listeQspeRed}));
  const stateScore = useSelector(state=>({...state.scoreRed}));
  const stateUser= useSelector(state=> ({...state.userRed}));
  //---------------------------------------------
  const dispatch = useDispatch();
const scoreChange = (n)=>{
  let obj= {
idEv : stateScore.item.idEv,
nbQ : stateScore.item.nbQ+1,
nbPt: stateScore.item.nbPt + n
  }
dispatch(modifScore(stateUser.item['_id'], obj));

}
  //---------------------------------------------
  //---------------------------------------------
  return (
    <div className='quizz'>


      {(stateListeQ.isLoading || 
        stateListeQperso.isLoading ||
        stateListeQspe.isLoading
        ) && <div>EN COURS DE CHARGEMENT...</div>}

      {(!stateListeQ.isLoading && 
      !stateListeQperso.isLoading && 
      !!stateListeQperso.items &&
       !!stateListeQ.items &&
       !stateListeQspe.isLoading &&
       !!stateListeQspe.items
       &&
       !!stateScore.item &&
       !stateScore.isLoading
       ) &&
        <>
          <h1>quizz :</h1>
          <p> {stateListeQ.items.length} questions générales</p>
          <ul>
            {stateListeQ.items.map((e,i)=>(
              <li key={i}>{e.Question}</li>
            ))}
          </ul>
          <p>{stateListeQperso.items.length} questions liées aux gouts perso</p>
          <ul>
            {stateListeQperso.items.map((e,i)=>(
              <li key={i}>{e.Question}</li>
            ))}
          </ul>

          <p>{stateListeQspe.items.length} questions spécifiques de l'évènement </p>
          <ul>
            {stateListeQspe.items.map((e,i)=>(
              <li key={i}>{e.Question}</li>
            ))}
          </ul>

          <button onClick={()=>scoreChange(2)}>score + 1</button>

          <Question />

          <ScoreUser />
        </>}


    </div>)
}



export default Quizz