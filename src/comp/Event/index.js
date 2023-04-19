import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchListeQ, fetchListeQPerso, fetchListeQSpe, fetchScore } from '../../lib/redux/actions';

const Event = () => {

  const stateEvent = useSelector(state => ({ ...state.eventRed }));
  const stateUser = useSelector(state=>({...state.userRed}));
 // destructuring :
 const nav= useNavigate();
 const dispatch= useDispatch();
//-----------------------------------------------------------
const participer = ()=>{
  // On prépare...
  //1. les questions
dispatch(fetchListeQ(stateEvent.item.nbQgen));
dispatch(fetchListeQPerso(stateEvent.item.nbQperso,stateUser.item.réponse1));
dispatch(fetchListeQSpe(stateEvent.item['_id'],stateEvent.item.nbQspe));
//2. le score
dispatch(fetchScore(stateUser.item['_id'], stateEvent.item['_id']));
nav('/quizz');
}
//-----------------------------------------------------------
  return (
    <div className='event'>

      event :
      { (!!stateEvent.item && !stateEvent.isLoading )&& 
      <div>
        <ul>
          <li>affiche : .....</li>
          <li>intitulé : {stateEvent.item.intitulé}</li>
          <li>description : {stateEvent.item.description}</li>
          <li>lieu : {stateEvent.item.lieu} </li>
          <li>prix : {stateEvent.item.prix} €</li>
          <button onClick={()=>participer()}> PARTICIPER AU CONCOURS </button>
        </ul>
        
      </div>}

    </div>
  )
}

export default Event