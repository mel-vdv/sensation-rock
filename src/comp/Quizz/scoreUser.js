import React from 'react'
import { useSelector } from 'react-redux'

const ScoreUser = () => {

  const stateScore = useSelector(state=>({...state.scoreRed}));
  const stateEvent = useSelector(state=>({...state.eventRed}));

  return (
    <div className='score-user'>
      {( !!stateScore.item && !stateScore.isLoading )&& 
      <>
      <p> évènement= {stateEvent.item['_id']} {stateScore.item.idEv} </p>
      <p>Nombre de questions = {stateScore.item.nbQ} </p>
      <p>Nombre de secondes = {stateScore.item.nbSec} </p>
      <p>Nombre de points = {stateScore.item.nbPt} </p>
      </>
       }
       
    </div>
  )
}

export default ScoreUser