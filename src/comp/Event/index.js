import React from 'react'
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
    dispatch(fetchListeQSpe(stateEvent.item['_id'], stateEvent.item.nbQspe));
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
    let obj =  {
        idEv: stateEvent.item['_id'],
        nbPt: 0,
        nbSec: 0,
        nbQ: 0
      } 
    dispatch(initierScore(stateUser.item['_id'],obj));
    dispatch(modifScoreImmediat(obj));
    //3. nav
    nav('/quizz');
  }
  //-----------------------------------------------------------
  return (
    <div className='event'>

      <button onClick={()=>nav('/')}>RETOUR A LA LISTE DES EVENEMENTS</button>

      event :
      {(!!stateEvent.item && !stateEvent.isLoading && !stateUser.isLoading && !!stateUser.item) &&
        <div>
          <ul>
            <img src={`https://firebasestorage.googleapis.com/v0/b/igra-835e2.appspot.com/o/affiches%2F${stateEvent.item['_id']}?alt=media`} alt='affiche'/>
            <li>intitulé : {stateEvent.item.intitulé}</li>
            <li>description : {stateEvent.item.description}</li>
            <li>lieu : {stateEvent.item.lieu} </li>
            <li>prix : {stateEvent.item.prix} €</li>
            {stateUser.item.concours.filter(e => e.idEv === stateEvent.item['_id']).length > 0 && <button onClick={() => reprendre()}> POURSUIVRE </button>}
            {stateUser.item.concours.filter(e => e.idEv === stateEvent.item['_id']).length === 0 && <button onClick={() => commencer()}> COMMENCER </button>}


          </ul>

        </div>}

    </div>
  )
}

export default Event