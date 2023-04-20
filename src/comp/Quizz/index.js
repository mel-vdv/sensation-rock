import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ScoreUser from './scoreUser';
import Question from './Question';
import Timer from './Timer';
import Pub from './Pub';
import { visiblePub } from '../../lib/redux/actions';

const Quizz = () => {

  const stateEvent = useSelector(state => ({ ...state.eventRed }));
  const stateListeQ = useSelector(state => ({ ...state.listeQRed }));
  const stateListeQperso = useSelector(state => ({ ...state.listeQpersoRed }));
  const stateListeQspe = useSelector(state => ({ ...state.listeQspeRed }));
  const stateScore = useSelector(state => ({ ...state.scoreRed }));
  const stateTimer = useSelector(state => ({ ...state.timerRed }));
  const stateVis = useSelector(state => ({ ...state.visibleRed }));




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
        !!stateListeQspe.items &&
        !!stateScore.item &&
        !stateScore.isLoading &&
        !stateEvent.isLoading &&
        !!stateEvent.item
      ) &&
        <>
          <h1>quizz :</h1>
          <p> {stateListeQ.items.length} questions générales</p>
          <ul>
            {stateListeQ.items.map((e, i) => (
              <li key={i}>{e.Question}</li>
            ))}
          </ul>
          <p>{stateListeQperso.items.length} questions liées aux gouts perso</p>
          <ul>
            {stateListeQperso.items.map((e, i) => (
              <li key={i}>{e.Question}</li>
            ))}
          </ul>

          <p>{stateListeQspe.items.length} questions spécifiques de l'évènement </p>
          <ul>
            {stateListeQspe.items.map((e, i) => (
              <li key={i}>{e.Question}</li>
            ))}
          </ul>

          <Timer />

          {
            !stateVis.pub &&
            <Question liste={stateListeQ.items.concat(stateListeQspe.items, stateListeQperso.items)} />


          }

          {stateVis.pub
            &&
            <Pub />}


          <ScoreUser />
        </>}


    </div>)
}



export default Quizz