import React from 'react'
import { useSelector } from 'react-redux'

const ScoreUser = () => {

  const stateScore = useSelector(state=>({...state.scoreRed}));
  const stateEvent = useSelector(state=>({...state.eventRed}));

  return (
    <>
      {( !!stateScore.item && !stateScore.isLoading  && !!stateEvent.item && !stateEvent.isLoading )&& 
      <>
      <div>{stateScore.item.nbPt} pts</div>
      <div>{stateScore.item.nbSec} sec</div>
      {stateScore.item.nbQ <= stateEvent.item.nbQtot &&
        <div>{stateScore.item.nbQ} / {stateEvent.item.nbQtot}</div>}
    
      </>
       }
       
    </>
  )
}

export default ScoreUser