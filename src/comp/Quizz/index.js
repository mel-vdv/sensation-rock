import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ScoreUser from './scoreUser';
import Question from './Question';
import Timer from './Timer';
import Pub from './Pub';
import { fetchPodium, visiblePodium } from '../../lib/redux/actions';
import Podium from './Podium';

const Quizz = () => {

  const stateEvent = useSelector(state => ({ ...state.eventRed }));
  const stateUser = useSelector(state => ({ ...state.userRed }));
  const stateListeQ = useSelector(state => ({ ...state.listeQRed }));
  const stateListeQperso = useSelector(state => ({ ...state.listeQpersoRed }));
  const stateListeQspe = useSelector(state => ({ ...state.listeQspeRed }));
  const stateScore = useSelector(state => ({ ...state.scoreRed }));
  const stateVis = useSelector(state => ({ ...state.visibleRed }));
  const statePodium= useSelector(state=> ({...state.podiumRed}));



  const dispatch = useDispatch();
  //---------------------------------------------
  const openPodium =()=>{
    dispatch(fetchPodium(stateUser.item['_id'], stateEvent.item['_id']));
    dispatch(visiblePodium(true));
  }
  const closePodium =()=>{
    dispatch(visiblePodium(false));
  }
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

          {!stateVis.pub &&
            <Question liste={stateListeQ.items.concat(stateListeQspe.items, stateListeQperso.items)} />
          }

          {stateVis.pub &&
            <Pub />
          }

          <ScoreUser />

          {!stateVis.podium &&<button onClick={()=>openPodium()}>VOIR LE PODIUM</button>}
          {stateVis.podium &&<button onClick={()=>closePodium()}>FERMER</button>}
          {(stateVis.podium && !statePodium.isLoading && !!statePodium.items) && <Podium/>}
        </>}


    </div>)
}



export default Quizz