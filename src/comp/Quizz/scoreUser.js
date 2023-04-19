import React from 'react'
import { useSelector } from 'react-redux'

const ScoreUser = () => {

  const stateScore = useSelector(state=>({...state.scoreRed}));

  return (
    <div className='score-user'>
      {( !!stateScore.item && !stateScore.isLoading )&& 
      <>
      <p>Nombre de questions = {stateScore.item.nbQ} </p>
      <p>Nombre de secondes = {stateScore.item.nbSec} </p>
      <p>Nombre de points = {stateScore.item.nbPt} </p>
      </>
       }
       
    </div>
  )
}

export default ScoreUser