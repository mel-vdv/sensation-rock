import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modifScore, modifScoreImmediat, modifTimer, visiblePub } from '../../lib/redux/actions';
import { stopTimer } from '../../lib/redux/actions';

const Question = ({ liste }) => {
  const stateScore = useSelector(state => ({ ...state.scoreRed }));
  const stateUser = useSelector(state => ({ ...state.userRed }));
  const stateEvent = useSelector(state => ({ ...state.eventRed }));
  const stateTimer = useSelector(state => ({ ...state.timerRed }));
  //-------------------------------------------------
  const dispatch = useDispatch();
  //--------------------------------------------------
  const intervalRef = useRef();
  //--------------------------------------------------

  const scoreChange = (n) => {
    let obj = {
      idEv: stateScore.item.idEv,
      nbQ: stateScore.item.nbQ + 1,
      nbPt: stateScore.item.nbPt + n,
      nbSec: stateScore.item.nbSec + stateTimer.timer
    }
     dispatch(stopTimer());
    dispatch(modifScoreImmediat(obj));
    dispatch(modifScore(stateUser.item['_id'], obj));
    if(((stateScore.item.nbQ % stateEvent.item.nbQPub === 0) &&
    (stateScore.item.nbQ > 0) 
  )){dispatch(visiblePub(true));}

   
  }
  //-------------------------------------------------
  const repondre = (n) => {
    if (liste[stateScore.item.nbQ].Réponse === n) {
      let n = liste[stateScore.item.nbQ].Valeur;
      scoreChange(n);
    }
    else {
      scoreChange(0);
    }
  }
  //-------------------------------------------------

  const lancerTimer = () => {console.log('on lance (q)');
   intervalRef.current= setInterval(() => { console.log('bip q');
      dispatch(modifTimer());
    }, 1000);
  }
  //------------------------
  useEffect(() => {
    dispatch(stopTimer());
    lancerTimer();

    return ()=>{
      console.log('clean');clearInterval(intervalRef.current);
    } 
  }, []);
  //---------------------------
  useEffect(() => {
    if (stateTimer.timer > stateEvent.item.nbSecRep) {
      scoreChange(0);
     // clearInterval(intervalRef.current);
    }
  }, [stateTimer.timer]);
  //-------------------------------------------------
  return (
    <div className='question'>

      <p>NOMBRE DE SECONDE POUR REPONDRE : {stateEvent.item.nbSecRep} </p>
      <p>TIMER  : {stateTimer.timer} secon</p>


      Question {stateScore.item.nbQ} : {liste[stateScore.item.nbQ].Question}
      CATEGORIE = {liste[stateScore.item.nbQ].Catégorie}
      <button onClick={() => repondre(1)}> {liste[stateScore.item.nbQ]['Proposition A']}</button>
      <button onClick={() => repondre(2)}> {liste[stateScore.item.nbQ]['Proposition B']}</button>
      <button onClick={() => repondre(3)}> {liste[stateScore.item.nbQ]['Proposition C']}</button>
      Réponse = {liste[stateScore.item.nbQ].Réponse}
      Valeur = {liste[stateScore.item.nbQ].Valeur}
    </div>
  )
}

export default Question