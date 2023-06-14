import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modifScore, modifScoreImmediat, modifTimer, visiblePub } from '../../lib/redux/actions';
import { stopTimer } from '../../lib/redux/actions';
import vrai from './images/vrai.png';
import faux from './images/faux.png';

const Question = ({ liste }) => {
  const stateScore = useSelector(state => ({ ...state.scoreRed }));
  const stateUser = useSelector(state => ({ ...state.userRed }));
  const stateEvent = useSelector(state => ({ ...state.eventRed }));
  const stateTimer = useSelector(state => ({ ...state.timerRed }));
  //------------------------------------------------
  const [delai, setDelai] = useState(5);
  useEffect(() => {
   let bibi;
    switch(liste[stateScore.item.nbQ].Valeur){
      case 1 : bibi = stateEvent.item.nbSecRep1 ; setDelai(bibi);break;
      case 2 : bibi = stateEvent.item.nbSecRep2 ; setDelai(bibi);break;
      case 3:  bibi = stateEvent.item.nbSecRep3 ; setDelai(bibi);break;
      case 4:  bibi = stateEvent.item.nbSecRep4 ; setDelai(bibi);break;
      case 5:  bibi = stateEvent.item.nbSecRep5 ; setDelai(bibi);break;
      default: console.log('oups');
    }
  }, [stateScore.item.nbQ]);
  //-------------------------------------------------
  const [vrai1, setVrai1] = useState(false);
  const [vrai2, setVrai2] = useState(false);
  const [vrai3, setVrai3] = useState(false);
  const [faux1, setFaux1] = useState(false);
  const [faux2, setFaux2] = useState(false);
  const [faux3, setFaux3] = useState(false);
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
    if (((stateScore.item.nbQ % stateEvent.item.nbQPub === 0) &&
      (stateScore.item.nbQ > 0)
    )) { dispatch(visiblePub(true)); }
  }
  //-------------------------------------------------
  const repondre = (n) => {
    if (liste[stateScore.item.nbQ].Réponse === n) {
      switch (n) {
        case 1: setVrai1(true); break;
        case 2: setVrai2(true); break;
        case 3: setVrai3(true); break;
        default: console.log('oups');
      }
      setTimeout(() => {
        switch (n) {
          case 1: setVrai1(false); break;
          case 2: setVrai2(false); break;
          case 3: setVrai3(false); break;
          default: console.log('oups');
        }
        let m = liste[stateScore.item.nbQ].Valeur;
        scoreChange(m);
      }, 700);
    }
    else {
      switch (n) {
        case 1: setFaux1(true); break;
        case 2: setFaux2(true); break;
        case 3: setFaux3(true); break;
        default: console.log('oups');
      }
      setTimeout(() => {
        switch (n) {
          case 1: setFaux1(false); break;
          case 2: setFaux2(false); break;
          case 3: setFaux3(false); break;
          default: console.log('oups');
        }
        scoreChange(0);
      }, 700);
    }
  }
  //-------------------------------------------------
  const lancerTimer = () => {
    console.log('on lance (q)');
    intervalRef.current = setInterval(() => {
      console.log('bip q');
      dispatch(modifTimer());
    }, 1000);
  }
  //------------------------

  //------------------------
  useEffect(() => {
    dispatch(stopTimer());
    lancerTimer();

    return () => {
      console.log('clean'); clearInterval(intervalRef.current);
    }
  }, []);
  //---------------------------
  useEffect(() => {
    if (stateTimer.timer > delai) {
      scoreChange(0);
    }
  }, [stateTimer.timer]);
  //-------------------------------------------------
  return (
    <>
      {stateEvent.item.nbQtot >= stateScore.item.nbQ &&
        <div className='question'>
          {/*<p>CATEGORIE = {liste[stateScore.item.nbQ].Catégorie},Réponse = {liste[stateScore.item.nbQ].Réponse} , Valeur = {liste[stateScore.item.nbQ].Valeur} </p>*/}
          <div className='time'>{delai - stateTimer.timer}</div>
          <div className='quest'>{liste[stateScore.item.nbQ].Question}</div>
          {!vrai1 && !faux1 && <button className='prop' onClick={() => repondre(1)}> {liste[stateScore.item.nbQ]['Proposition A']}</button>}
          {vrai1 && <img src={vrai} alt="bonne réponse" />}
          {faux1 && <img src={faux} alt="mauvaise réponse" />}

          {!vrai2 && !faux2 && <button className='prop' onClick={() => repondre(2)}> {liste[stateScore.item.nbQ]['Proposition B']}</button>}
          {vrai2 && <img src={vrai} alt="bonne réponse" />}
          {faux2 && <img src={faux} alt="mauvaise réponse" />}

          {!vrai3 && !faux3 && <button className='prop' onClick={() => repondre(3)}> {liste[stateScore.item.nbQ]['Proposition C']}</button>}
          {vrai3 && <img src={vrai} alt="bonne réponse" />}
          {faux3 && <img src={faux} alt="mauvaise réponse" />}
        </div>
      }

    </>

  )
}
export default Question