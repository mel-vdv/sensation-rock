import React from 'react';
import './index.css';
import { LoremIpsum } from 'react-lorem-ipsum';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchListeQ, fetchListeQPerso, fetchListeQSpe, fetchScore, initierScore, modifScoreImmediat } from '../../lib/redux/actions';

const Event = () => {

  const stateEvent = useSelector(state => ({ ...state.eventRed }));
  const stateUser = useSelector(state => ({ ...state.userRed }));
  // destructuring :
  const nav = useNavigate();
  const dispatch = useDispatch();
  //-----------------------------------------------------------
  const reprendre = () => {
    // On récupère...
    //1. les questions
    dispatch(fetchListeQ(stateEvent.item.nbQgen));
    dispatch(fetchListeQPerso(stateEvent.item.nbQperso, stateUser.item.réponse1));
    //dispatch(fetchListeQSpe(stateEvent.item['_id'], stateEvent.item.nbQspe));
    //2. le score
    dispatch(fetchScore(stateUser.item['_id'], stateEvent.item['_id']));
    //3.nav
    nav('/quizz');
  }
  //-----------------------------------------------------------
  const commencer = () => {
    // On récupère...
    //1. les questions
    dispatch(fetchListeQ(stateEvent.item.nbQgen));
    dispatch(fetchListeQPerso(stateEvent.item.nbQperso, stateUser.item.réponse1));
    dispatch(fetchListeQSpe(stateEvent.item['_id'], stateEvent.item.nbQspe));
    //2. on crée le score : 
    let obj = {
      idEv: stateEvent.item['_id'],
      nbPt: 0,
      nbSec: 0,
      nbQ: 0
    }
    dispatch(initierScore(stateUser.item['_id'], obj));
    dispatch(modifScoreImmediat(obj));
    //3. nav
    nav('/quizz');
  }
  //-----------------------------------------------------------
  return (
    <div>

      <button className='retour' onClick={() => nav('/')}>RETOUR A LA LISTE DES EVENEMENTS</button>

      {(!!stateEvent.item && !stateEvent.isLoading && !stateUser.isLoading && !!stateUser.item) &&
        <div className='container-event'>

          <div className='affiche'>
            {stateEvent.item.taille > 1 && <img 
            src={`https://firebasestorage.googleapis.com/v0/b/igra-835e2.appspot.com/o/affiches%2Fmoyen%2F${stateEvent.item['_id']}?alt=media`} alt='affiche' />}
            {stateEvent.item.taille <2 && <img 
            src={`https://firebasestorage.googleapis.com/v0/b/igra-835e2.appspot.com/o/affiches%2Fpetit%2F${stateEvent.item['_id']}?alt=media`} alt='affiche' />}
          </div>

          <div className='intitulé'>
            {stateEvent.item.intitulé}
            </div>

          <div className='descr'>
            {stateEvent.item.description}
            <LoremIpsum p={1} />

          </div>

          <div className='infos'>
            <div className='lieu'>LIEU : {stateEvent.item.lieu} </div>
            <div className='quand'>QUAND : {stateEvent.item.quand}</div>
            <div className='prix'>TARIF : {stateEvent.item.prix} €</div>
          </div>
          <div className='concours'>
            <div className='gain'>{stateEvent.item.gain} </div>
            <div className='dates'>En tentant votre chance <br/> du {stateEvent.item.début} au {stateEvent.item.fin}</div>
            <div className='bouton'>
              {stateUser.item.concours.filter(e => e.idEv === stateEvent.item['_id']).length > 0 && <button onClick={() => reprendre()}> POURSUIVRE </button>}
              {stateUser.item.concours.filter(e => e.idEv === stateEvent.item['_id']).length === 0 && <button onClick={() => commencer()}> COMMENCER </button>}</div>
          </div>
        </div>
      }

    </div>
  )
}

export default Event