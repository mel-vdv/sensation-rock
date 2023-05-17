import React from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux'
import ScoreUser from './scoreUser';
import Question from './Question';
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
  const statePodium = useSelector(state => ({ ...state.podiumRed }));



  const dispatch = useDispatch();
  //---------------------------------------------
  const openPodium = () => {
    dispatch(fetchPodium(stateUser.item['_id'], stateEvent.item['_id']));
    dispatch(visiblePodium(true));
  }
  const closePodium = () => {
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
          <div className='titre'>{stateEvent.item.intitulé}</div>

          <div className='infos'>
            <div className='pseudo'>{stateUser.item.pseudo}</div>
            <div className='score-user'><ScoreUser /></div>
          </div>

          <div className='question'> {!stateVis.pub && !stateVis.podium &&
            <Question liste={stateListeQ.items.concat(stateListeQspe.items, stateListeQperso.items)} />
          }
          </div>


          {stateVis.pub &&
            <div className='pub'>
              <Pub />  </div>
          }


          <div className='bas'>
            <button>Pause</button>

            {!stateVis.podium && <button onClick={() => openPodium()}>VOIR LE PODIUM</button>}

            {stateVis.podium &&
              <div className='podium'>
                <button onClick={() => closePodium()}>FERMER</button>
                {(stateVis.podium && !statePodium.isLoading && !!statePodium.items) && <Podium />}
              </div>}

          </div>
        </>}


    </div>)
}



export default Quizz